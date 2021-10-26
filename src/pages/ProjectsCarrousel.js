/* eslint-disable valid-typeof */
import React, { useContext, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsContext from '../context/ProjectsContext';
import  './css/ProjectsCarrousel.css';

export default function ProjectCarrousel () {
    const [proj, setProj] = useState(0)
    const { projects } = useContext(ProjectsContext);
    const handleNextProjects = () => {
        if(proj < projects.length - 1) {
            console.log(proj)
            setProj(proj+1)
        }
    }
    const handlePreviousProjects = () => {
        if(proj > 0) {
            setProj(proj-1)
        }
    }
    return (
        <div style={ { display: 'flex', alignItems: 'center' }} className="fade-in">
        <span 
              style={ { margin: '0px 20px', fontSize: '30px' } } 
              onClick={ () => handlePreviousProjects() }
            >
            <i className="fas fa-chevron-left"/>
        </span>
        <ProjectCard project={ projects[proj] }/>
        <span 
              style={ { margin: '0px 20px', fontSize: '30px' } } 
              onClick={ () => handleNextProjects() }
            >
            <i className="fas fa-chevron-right"/>
        </span>
        </div>
    );
}
