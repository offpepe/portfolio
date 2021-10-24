import React, { useState } from 'react';
import Proptypes from 'prop-types';

import ProjectsContext from './ProjectsContext';

export default function ProjectsProvider ({ children }) {
    const [projects, setProjects] = useState({});
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