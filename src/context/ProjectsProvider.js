import React, { useState } from 'react';
import Proptypes from 'prop-types';

import ProjectsContext from './ProjectsContext';

export default function ProjectsProvider ({ children }) {
    const [projects, setProjects] = useState([
        {
            name: 'Shipit Trivia',
            purpose: 'Projeto desenvolvido em grupo durante a formação de programadores do curso da Trybe, com o intuíto de testar nosso aprendizados referentes ao módulo de Desenvolvimento Front-End.',
            stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Redux-thunk'],
            tech: ['Front-end'],
            repo: 'https://github.com/offpepe/shipit-trivia',
            cover: `${process.env.PUBLIC_URL}/shipit-trivia.png`,
            app: 'https://shipit-trivia.netlify.app/'
        },
        {
            name: 'Movie Library',
            purpose: 'Projeto proposto pela Trybe no início do módulo Front-end, porém feita FullStack, pelo projeto Trybe NG+, para treinar ambas as Stacks',
            stack: ['HTML, CSS', 'Javascript', 'ReactJS', 'NodeJS', 'Express', 'Multer-S3', 'AWS-S3','Heroku-Dyno'],
            tech: ['Front-end', 'Back-end'],
            repo: [{ of: 'Back-end', link: 'https://github.com/offpepe/Movie-Library-API' }, { of: 'Front-end', link: 'https://github.com/offpepe/movie-library' }],
            cover: `${process.env.PUBLIC_URL}/movie-library.png`,
            app: 'https://offpepe.github.io/movie-library/'
        }
    ]);
    const value = {
        projects,
        setProjects,
    };
    return (
        <ProjectsContext.Provider value={ value }>
            { 
              children
            }
        </ProjectsContext.Provider>
    )
}

ProjectsContext.propTypes = {
    children: Proptypes.objectOf(Proptypes.any).isRequired,
};