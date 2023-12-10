import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Octokit } from "@octokit/core"

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
        console.log("YES",response.data[0].name)

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
      <li key={proj.name}>{proj.name}{<br></br>}{proj.language}</li>
    ))}
    
    </>
  )
}

export default ProjectPage
