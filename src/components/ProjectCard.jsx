import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectCard extends Component {
    render() {
        const { project } = this.props;
        const { name, releaseDate, resume, knowledgeUsed, imagePath } = project;
        return (
            <div className='card'>
                <div className='card-header'>
                    <h2 className='card-header-title'>{ name }</h2>
                    <p className='card-header-subtitle'>{ releaseDate }</p>
                </div>
                <img src={ imagePath } className='card-image' alt={`imagem de ${name} project`} />
                <p className="card-content">{ resume }</p>
                <div className="card-footer">
                {knowledgeUsed.map((knowledge, index) => <p key={ index } className="card-footer-item">{ knowledge }</p>)}
                </div>
            </div>
        );
    }
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
      name: PropTypes.string,
      releaseDate: PropTypes.string,
      resume: PropTypes.string,
      knowledgeUsed: PropTypes.arrayOf(PropTypes.string),
      imagePath: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;