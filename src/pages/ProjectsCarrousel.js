import { Dropdown } from 'react-bootstrap';
import React from 'react';
import  './css/ProjectsCarrousel.css';

export default function ProjectCarrousel () {
        return (
            <div className="project-card">
                <figure className="project-card-cover">
                    <img src="https://www.seekpng.com/png/detail/137-1379498_work-in-progress.png" alt="project cover" />
                </figure>
                <section className="project-card-body">
                    <h3 className="title is-3"> Project Name </h3>
                    <article className="project-card-purpose">
                    <h5 className="subtitle is-4"> Propósito </h5>
                    <p> lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum  </p>
                    </article>
                    <nav className="project-card-nav">
                    { ['Front-end', 'Back-end', 'CS'].map((stack) => <button className="button is-primary rounded">{ stack }</button>) }
                    <div class="dropdown is-active">
                     <div class="dropdown-trigger">
                        <button class="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu2">
                        <span>Tech Stack</span>
                        <span class="icon is-small" >
                          <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                        <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                            <div class="dropdown-content">
                                <div class="dropdown-item">
                                <p>You ca   n insert <strong>any type of content</strong> within the dropdown menu.</p>
                                </div>
                            </div>
                        </div>
                     </div>
                    </div>
                    </nav>
                    <footer className="project-card-footer">
                    <button className="button is-success rounded"> Repo </button>
                    <button className="button is-success rounded"> App </button>
                    </footer>
                </section>

            </div>
        );
}
