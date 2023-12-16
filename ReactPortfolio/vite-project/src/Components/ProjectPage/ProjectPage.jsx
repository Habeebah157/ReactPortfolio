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
      <li className='project-name'key={proj.name}>{proj.name}{<br></br>}{proj.language}</li>
      </div>
   
    ))}
    
    </>
  )
}

export default ProjectPage
