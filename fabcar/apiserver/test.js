// const express = require('express');
// // const bodyParser = require('body-parser');
// const ejs = require('ejs');
// const util = require('util')

const { consoleTestResultHandler } = require("tslint/lib/test")

// const app = express();

// // app.use(bodyParser.urlencoded({ extended: true }))
// // app.use(bodyParser.json({ type: 'application/json' }))
// // app.use(bodyParser.raw());

// app.use(express.json({type: 'application/json'})); // Used to parse JSON bodies
// app.use(express.urlencoded()); // Parse URL-encoded bodies using query-string library
// // or
// app.use(express.urlencoded({ extended: false}));

// app.set("view engine", "ejs");

// const PORT = 8080
// app.listen(PORT, () => {
//     console.log("App listening on port " + PORT)
// })


// app.get('/patient/query/:name/:age', (req, res, next) => {
//     res.send(req.params)
// })

// app.post('/patient/doctor-query/:re', (req, res, next) => {
//     try {

//         let patient_username = req.body.patient;
//         let doctor_username = req.body.doctor;
//         let record_id = req.body.record;
//         let date = Date();
        
//         const result = {
//             'req': req.body, 
//             'time': date
//         }

//         res.render('form', {
//             result: util.inspect(result,false,null)
//         });
//         console.log(req.body)
//         // await gateway.disconnect();

//     } catch (error) {
//         console.error(`Failed to evaluate transaction: ${error}`);
//     }
// })


let result = {
    'Fullname': 'Le Duc Minh', 
    'Phone': '0120388435'
}
result = JSON.stringify(result)
console.log(typeof(result))
result = JSON.parse(result)
console.log(typeof(result))
// console.log(result.Fullname)
result = result.toString()
console.log(typeof(result))
result = JSON.parse(result)
console.log(typeof(result))