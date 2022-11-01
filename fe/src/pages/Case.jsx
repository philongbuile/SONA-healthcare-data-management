import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import useFetch from '../api/useFetch'
import './Case.css'
import { PersonalInforFetch } from '../api/userApi';

const Case = () => {

    const {id} = useParams();
    const {data, error, isPending} = useFetch('http://localhost:8080/medinfo/query_by_keyword/' + id);
    // const { data: personalData, isPendingP, errorP } = PersonalInforFetch('philong123');

    console.log(data);
    // console.log(personalData);
    return(
        <div className="box">
            <Navbar/>
            {isPending && <div className='loader'> </div>}
            {error && <div> {error} </div>}
            {data && (
                <div className='container'> 
                    <div className='container-title'>
                        <h2>Title</h2>
                    </div>
                    <div className='container-context'>
                    <div className='container-text-box'>Operation Name:
                        <div>
                            <p className ='container-text'>{data.response[0].OperatorName}</p>
                        </div>
                    </div >
                    <div className='container-text-box'>Operation:
                        <p className ='container-text'>{data.response[0].Operation}</p>
                    </div>
                    <div className='container-text-box'> Role:
                        <p className ='container-text'>{data.response[0].Roles}</p>
                    </div>
                    <div className='container-text-box'>Record ID:
                        <p className ='container-text'>{data.response[0].Record_ID}</p>
                    </div>
                    {/* <div className='container-text-box'>Time:
                        <p className ='data-text'>{data.response[0].Time}</p>

                        <p className ='data-text'>{personalData.response.Username}</p>

                        <p className ='data-text'>{personalData.response.FullName}</p>

                        <p className ='data-text'>{personalData.response.Medicalinfo_ID}</p>

                    </div> */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Case;