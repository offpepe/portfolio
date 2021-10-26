/* eslint-disable valid-typeof */
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import  './css/ProjectsCarrousel.css';

export default function ProjectCarrousel () {
    const [proj, setProj] = useState(0)
    const projectsMock = [
        {
            name: 'Agiota Finder',
            purpose: 'Ajuda pessoas que não tem dinheiro e crédito na praça à achar um agiota da região',
            stack: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Express'],
            tech: ['Front-end', 'Back-end'],
            repo: [{ of: 'Back-end', link: 'https://github.com' }, { of: 'Front-end', link: 'https://tiktok.com/' }],
            cover: 'https://pbs.twimg.com/media/ETkS_koWoAADjzz.jpg',
            app: 'https://www.facebook.com/'
        },
        {
            name: 'Castra Map',
            purpose: 'Encontra postos de castração, com filtros de preço, distancia e etc',
            stack: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Express'],
            tech: ['Front-end', 'Back-end'],
            repo: [{ of: 'Back-end', link: 'https://github.com' }, { of: 'Front-end', link: 'https://tiktok.com/' }],
            cover: 'https://previews.123rf.com/images/coffeeein/coffeeein1702/coffeeein170200112/71669838-animal-map-for-kid-world-vector-poster-for-children-cute-illustrated-preschool-cartoon-globe-with-an.jpg',
            app: 'https://castracao.campogrande.ms.gov.br/#/(ccz:inicial)'
        }
    ]
    const handleNextProjects = () => {
        if(proj < projectsMock.length - 1) {
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
        <ProjectCard project={ projectsMock[proj] }/>
        <span 
              style={ { margin: '0px 20px', fontSize: '30px' } } 
              onClick={ () => handleNextProjects() }
            >
            <i className="fas fa-chevron-right"/>
        </span>
        </div>
    );
}
