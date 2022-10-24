/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { Gateway, Wallets } from 'fabric-network';
import * as path from 'path';
import * as fs from 'fs';

async function main() {
    try {
        // load the network configuration
        const ccpPath = path.resolve(__dirname, '..', '..', '..','test-network','organizations','peerOrganizations','org1.example.com', 'connection-org1.json');
        const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get('appUser');
        if (!identity) {
            console.log('An identity for the user "appUser" does not exist in the wallet');
            console.log('Run the registerUser.ts application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');
        

        // Get the contract from the network.
        const caseContract = network.getContract('fabcar','CaseContract');
        const patientContract = network.getContract('fabcar','PatientContract')
        const medicalOperatorContract = network.getContract('fabcar','OperatorContract');
        const usageRecordContract = network.getContract('fabcar','UsageRecordContract');

        // Submit the specified transaction.
        // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')
        // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR12', 'Dave')
        // await contract.submitTransaction('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom');

         await patientContract.submitTransaction('InitLedger');
         console.log(`Transaction: InitLedger has been submitted`);
         await patientContract.submitTransaction('QueryPatient','philong123');
         
        // await medicalOperatorContract.submitTransaction('InitOperator');
        // console.log(`Transaction: InitOperator has been submitted`);
        // // await medicalOperatorContract.submitTransaction('CreateCase','philong123','Doctor1','Success','Flu','Use medicine');
        // console.log(`Transaction: OperatorCreateCase has been submitted`);
        // await usageRecordContract.submitTransaction('ReadRecord','philong123');



      

        // Disconnect from the gateway.
        await gateway.disconnect();

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}

main();
