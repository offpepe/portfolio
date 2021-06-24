import React, { Component } from 'react';
import { projects } from '../services/data';
import GitCard from './GitCard';

class ProjectDetails extends Component {
    constructor(props) {
      super(props);
      const { location: { pathname } } = this.props;
      const projectPath = pathname.split('/').pop();
      const projectTitle = projectPath.split('-').join(' ');
      const project = projects.filter((project) => project.name === projectTitle).shift();
      this.state = {
          project,
          participants: [],
      }
      this.fetchGithubUsers = this.fetchGithubUsers.bind(this);
    }

    componentDidMount() {
      const { project } = this.state;
      if (project.participants) {   
        project.participants.forEach((participant) => {
            this.fetchGithubUsers(participant.gitHub);
        });
      }
    }

    async fetchGithubUsers(user) {
      const { participants } = this.state;
      const rawGitInfo = await fetch(`https://api.github.com/users/${user}`);
      const gitInfo = await rawGitInfo.json();
      participants.push(gitInfo);
      this.setState({ participants });
    }

    render() {
        const { participants, project } = this.state;
        return (
            <main className="project-details-content fade-in">
              { project.participants && <aside className="github-conteiner">
               <h4 className="title is-4"> GitHub de participantes do grupo  </h4>
              { participants.length > 0 ? participants
              .map((participant, index) => <GitCard key={ index } gitInfo={ participant } />) : '...loading'  }
              </aside>}
              <section className="project-conteiner">
                <h2 className="title is-3"> { project.name } </h2>
                <div className="project-details-tags">
                  <h4> { project.releaseDate } </h4>
                  <div className="know-details">
                      { project.knowledgeUsed.map((knowledge, index) => <p key={ index }>{ knowledge }</p>) }
                  </div>
                  <img src={ project.module.img } alt={ `img of ${project.module.id}` } className="project-details-img-module" />
                </div>
                <article className="project-details-resume">
                    <p> { project.resume } </p>
                </article>
                <div className="project-details-buttons">
                  <a href={ project.appLink } alt="link do app" target="_blank" rel="noreferrer">
                    <button type="button" className="button is-rounded is-outlined is-success" disabled={ project.appLink === 'not-found' }>
                          Ver Projeto 
                    </button>
                  </a>
                  <a href={ project.repoLink } alt="link do app" target="_blank" rel="noreferrer">
                      <button type="button" className="button is-rounded is-outlined is-info"> Ver Repositório </button>
                  </a>
                </div>
              </section>
            </main>
        );
    }
}

export default ProjectDetails;