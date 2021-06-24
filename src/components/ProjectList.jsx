import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import PropTypes from 'prop-types';

class ProjectList extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className="project-list">
                {projects
                .sort((a , b) => {
                 a = a.releaseDate.split('/')
                 b = b.releaseDate.split('/')
                 return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
                })
                .map((project, index) => <ProjectCard key={ index } project={ project }/>)}
            </div>
            );
    }
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectList;