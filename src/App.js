import React, {useState, useEffect} from 'react';
import './App.css';
import Description from './description';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(3);
  const [jobs, setJobs] = useState([]);

  
  const fetchJobs = async()=>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setJobs(data);
      setLoading(false);
    }
    catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  

  useEffect(()=>{
    fetchJobs()
    },[]
  )

  

  if(loading){
    return(
      <div className='container'>
        <div className='title'>
          <h2>Loading ...</h2>
        </div>
      </div>
    )
  }
  const job = jobs.filter((job)=> job.order === value) ;
  console.log(job);
  const {id, title, dates, duties, company, order} = job[0];

  return (
    <div className='container'>
      <div className='row'>
        <div className='title'>
          <h1>Experience</h1>
        </div>
        <div className='contents'>
          <div className='tabs'>
            {jobs.map((jb, index)=>{
              return(
                <button key={index} className={`company-btn ${jb.order === value && 'active'}`} onClick={()=>{setValue(jb.order)}}>{jb.company}</button>
              )
            })}
          </div>
          <div className='info'>
            
            <div className='job'>{title}</div>
            <div className='company'><p>{company}</p></div>
            <div className='date'>{dates}</div>
            <Description duties={duties}/>
          </div>
        </div>
        <div className='btn-more'>
          <button className='btn'>more info</button>
        </div>
      </div>
    </div>

  );
}

export default App;
