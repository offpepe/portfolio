import React, { Component } from 'react';
import ProjectTabs from '../components/ProjectTabs';
import ProjectList from '../components/ProjectList';
import { projects } from '../services/data';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            filteredProjects: projects,
        }
    }

    queryChangeHandler = (target) => {
      let { query } = this.state;
      query = (Object.entries(target)[1].pop().query);
      this.filterByModule(query);
      this.setState({ query });
    }

    filterByModule = (query) => {
      let { filteredProjects } = this.state;
      switch (query) {
          case '':
            filteredProjects = projects;
            break;
          case 'fp':
            filteredProjects = projects.filter((proj) => proj.module.id === 'fp');
            break;
          case 'df':
            filteredProjects = projects.filter((proj) => proj.module.id === 'df');
            break;
          case 'db':
            filteredProjects = projects.filter((proj) => proj.module.id === 'db');
            break;
          default:
            break;
      }
      this.setState({ filteredProjects });
    }

    render() {
        const { filteredProjects } = this.state;
        return (
            <main className="about fade-in">
                <ProjectTabs handler={ this.queryChangeHandler } projects={ projects } />
                {filteredProjects.length > 0 ? 
                <ProjectList className="project-list" projects={ filteredProjects } /> :
                  <div className="no-proj-message">
                  <p>
                    Ainda não há projetos aqui, mas estou trabalhando nisso!<br/>
                  </p>
                    <div className="message-icons">
                      <i class="fas fa-hard-hat"/><i class="fas fa-toolbox"/><i class="fas fa-tools"/>
                      </div>
                  </div>}
            </main>
        );
    }
}

export default Projects;