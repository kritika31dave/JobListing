

import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Job from './Job';
//import Job from './Job';


function App() {
  const[jobs,setJobs]=useState([])
  const[name,setName]=useState({});
  useEffect(() => {
    axios
      .get(
        'http://refertest.pythonanywhere.com/job/openings'
      )
      .then(res => {
        setJobs(res.data.data);
        
      })
      .catch(error => console.log(error));
  }, []);
  useEffect(()=>{
    axios.get(
      'http://refertest.pythonanywhere.com/user/data'
    )
    .then(respon=>{
      setName(respon.data.data)
    })
    .catch(error=>console.log(error));
  })
  return (
     <div className='main'>
       <div className='header'>
          <div className='image'>
            <img src={name.pictureUrl} ></img>
          </div>
         <div className='nameDiv'>
         <div className='name'>{name.name}</div>
         <div className='clg'>{name.college}</div>
         </div>
       </div>
       <div><h1>Jobs Description</h1></div>
       {
         jobs.map((desc)=>{
           return(
            <Job
            design={desc.designation}
            company={desc.company}
            id={desc.id}
            location={desc.location}
            exp={desc.min_experience}
           skills={desc.skills}
           />
           )
         })
       }
       
    </div>
      
          
            
    
  );
}

export default App;
