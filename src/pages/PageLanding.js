import React from 'react';

export default function PageLanding () {
        return (
            <div className="page-landing fade-in">
                <div className="page-landing-cover">
                    <img src="https://cdn.dribbble.com/users/4578246/screenshots/11686961/tundra2_4x.png" alt="cover" />
                </div>
                <section className="page-lading-body">
                    <img src={ process.env.PUBLIC_URL + '/profile_photo.jpeg' } className="page-lading-body" alt={`foto de Alan`}/>
                    <h2 className='title is-3'>Alan Albuquerque F. Lopes</h2>
                    <p className='subtitle profile-card-subtitle'>Não há saber mais ou saber menos: há saberes diferentes</p>
                </section>
                <nav className="page-landing-nav">
                    <button className="button is-success rounded">
                      <a href="https://github.com/offpepe"
                        target="_blank"
                        rel="noreferrer"
                        style={ { textDecoration: 'none', color: 'white' } }
                      >
                          <i className="fab fa-github" />
                      </a>
                    </button>
                    <button className="button is-success rounded">
                    <a href="https://www.linkedin.com/in/alanalbuquerq/ "
                        target="_blank"
                        rel="noreferrer"
                        style={ { textDecoration: 'none', color: 'white' } }
                      >
                      <i className="fab fa-linkedin-in"/>
                    </a>
                    </button>
                    <button className="button is-success rounded">
                        <i class="fas fa-cog" />
                    </button>
                    <button className="button is-success rounded">
                            <i class="fas fa-envelope-open" />
                    </button>
                </nav>
            </div>
        );
}
