import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProjectCard extends Component {
    constructor() {
      super();
      this.state = {
        renderInfo: false,
        infoClass: '',
      }
      this.showProjectInfo = this.showProjectInfo.bind(this);
      this.removeProjectInfo = this.removeProjectInfo.bind(this);
    }

    showProjectInfo(e) {
      this.setState({ renderInfo: true, infoClass: 'fade-in-card-info' });
    }

    removeProjectInfo(e) {
        this.setState({ renderInfo: true, infoClass: 'fade-out' });
      }

    render() {
        const { project } = this.props;
        const { renderInfo, infoClass } = this.state;
        const { name, imagePath, module } = project;
        const pathName = name.split(' ').join('-');
        return (
            <div className='card' onMouseOver={ this.showProjectInfo } onMouseOut={ this.removeProjectInfo }>
                <Link to={ `/portfolio/projects/${pathName}` } >
                { renderInfo && <div className={ `project-card-header ${infoClass}` }>
                    <img className="module-icon" src={ module.img } alt={ `${module.id} img` } />
                    <h2 className='card-header-title is-centered project-title'>{ name }</h2>
                    <p className='card-header-subtitle project-instruction'> Clique para ver detalhes </p>
                </div>}
                <img src={ imagePath } className='card-image' alt={`imagem de ${name} project`} />
                </Link>
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