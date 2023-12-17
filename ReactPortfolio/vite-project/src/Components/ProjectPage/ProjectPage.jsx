import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Octokit } from "@octokit/core"
import './ProjectPage.css'

const ProjectPage = () => {

  const [project, setProject] = useState([]);
  useEffect(()=>{

    const octokit = new Octokit({auth: `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`})
    const fetchProjects = async () => {
      try {
        const response = await octokit.request("GET /users/{owner}/repos", {
            owner: "Habeebah157",
            per_page:1000,
        });
        for(let i = 0; i<response.data.length; i++){
            console.log(response.data[i].language); // You can handle the response data here
        }
        console.log("YES",response.data)

        setProject(response.data)
       
    } catch (error) {
        console.error(error); // Handle any errors that may occur during the request
    }

    }  
    fetchProjects();
  },[])
  
  return (
    <>
    <Navbar/>
    {project.map(proj =>(
      <div className='project-container'>
      <li className='project-name'key={proj.name}><a href={proj.html_url} target='_blank'>{proj.name}</a>{<br></br>}{proj.language}</li>
      </div>
   
    ))}
    
    </>
  )
}

export default ProjectPage
