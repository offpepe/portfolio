import React, { Component } from 'react';
import data from '../services/data';

class PageLanding extends Component {
    render() {
        const { name, age, nationality } = data;
        return (
            <div className="page-landing">
                <h2>{ name }</h2>
                <p>{`${age}, ${nationality} `}</p>
                <img src='https://pbs.twimg.com/profile_images/1242553915650048000/9g_THTxk_400x400.jpg' alt={`foto de ${name}`}/>
            </div>
        );
    }
}

export default PageLanding;