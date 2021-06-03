import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import PropTypes from 'prop-types';

class ProjectList extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className="project-list">
                {projects.map((project, index) => <ProjectCard key={ index } project={ project }/>)}
            </div>
            );
    }
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectList;