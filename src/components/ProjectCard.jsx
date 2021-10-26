import React, { useState } from 'react';
// import PropTypes from 'prop-types';

export default function ProjectCard ({ project: { name, purpose, stack, tech, repo, cover, app  } }) {
    const [isActive, setActive] = useState('');
    const [repoActive, setRepoAct] = useState('');
    const toggleTechActive = () => {
        if (isActive) {
          setActive('');
        } else {
          setActive('is-active')
        }
      };
      const toggleRepoActive = () => {
          if (repoActive) {
            setRepoAct('');
          } else {
            setRepoAct('is-active')
          }
        };
    return (
        <div className="project-card">
        <figure className="project-card-cover">
            <img src={ cover } alt="project cover" />
        </figure>
        <section className="project-card-body">
            <h3 className="title is-3"> { name } </h3>
            <article className="project-card-purpose">
            <h5 className="subtitle is-4"> Propósito </h5>
            <p> { purpose }  </p>
            </article>
            <nav className="project-card-nav">
            { tech.map((stack) => <button className="button is-primary rounded">{ stack }</button>) }
            <div className={`dropdown ${isActive}`} style={ { textDecoration: 'none' } }>
             <div className="dropdown-trigger">
                <button
                  className="button is-primary"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu2"
                  onClick={ () => toggleTechActive() }
                >
                <span>Tech Stack</span>
                <span className="icon is-small" >
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
                <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                    <div className="dropdown-content" style={ { width: '70%' } }>
                    <ul style={ { textAlign: 'center' } }>
                        { stack
                          .map((tech) => (
                                <li>
                                { tech }
                                <span className="dropdown-divider" />
                                    </li>
                            )) }
                    </ul>
                    </div>
                </div>
             </div>
            </div>
            </nav>
            <footer className="project-card-footer">
            { typeof repo[0] === 'object' ?  <div
            className={`dropdown ${repoActive}`}
            style={ { textDecoration: 'none' } }
            >
             <div className="dropdown-trigger">
                <button
                  className="button is-success"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu2"
                  onClick={ () => toggleRepoActive() }
                  style={ { width: '70%' } }
                >
                <span>Repo</span>
                <span className="icon is-small" >
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
                <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                    <div className="dropdown-content" style={ { width: '50%' } }>
                    <ul style={ { textAlign: 'center' } }>
                        { repo
                          .map(({ link, of }, index) => (
                                <li>
                                  <a href={ link } target="_blank" rel="noreferrer" >{ of }</a>
                                  { index !== repo.length -1 && <span className="dropdown-divider" /> }
                                </li>
                            )) }
                    </ul>
                    </div>
                </div>
             </div>
            </div>
            : <a href={ repo } target='_blank' rel="noreferrer">
                <button className="button is-success rounded"> Repo </button> 
              </a>
}
            <a href={ app } target="_blank" rel="noreferrer">
              <button className="button is-success rounded"> App </button>
            </a>
            </footer>
        </section>
    </div>
    );
}