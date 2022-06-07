
import React from 'react'
import './Job.css'
import  blue from './blue.png'
const Job = ({company,design,location,skills,exp}) => {
    
  return (
    <div className='cont'>
          
        <div className='rowCont'>
            <div className='comp'>{company}</div>
            <div className='wrap'>
                <div className='design'>{design}</div>
                <div className='locat'><span><img src={blue}></img></span>{location}</div>
            </div>
            <div className='experence'>{exp==0?<div className='fresh'>Fresher</div>:<div className='expr'>Experience:{exp}year</div>}</div>
            <div className='skill'>Skills required:
               {skills.map((lang)=>{
                   return(
                       <div className='language'>{lang}</div>
                   )
               })}
            </div>
        </div>
    </div>
  )
}

export default Job