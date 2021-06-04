import React, { Component } from 'react';
import data from '../services/data';

class PageLanding extends Component {
    render() {
        const { name, age, nationality } = data;
        return (
            <div className="page-landing fade-in">
                <section>
                <h2 className='title is-3'>{ name }</h2>
                <p className='subtitle is-4'>{`${age}, ${nationality} `}</p>
                </section>
                <img src={ process.env.PUBLIC_URL + '/profile_photo.jpg' } alt={`foto de ${name}`}/>
            </div>
        );
    }
}

export default PageLanding;