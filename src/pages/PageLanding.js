import React, { Component } from 'react';
import data from '../services/data';

class PageLanding extends Component {
    render() {
        const { name, age } = data;
        return (
            <div className="page-landing fade-in">
                <img src={ process.env.PUBLIC_URL + '/profile_photo.jpg' } alt={`foto de ${name}`}/>
                <section>
                <h2 className='title is-3'>{ `Oi, eu sou ${name}` }</h2>
                <p className='subtitle is-4'>{`tenho ${age} e sou desenvolvedor web Front-End`}</p>
                </section>
            </div>
        );
    }
}

export default PageLanding;