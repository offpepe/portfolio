import React, { Component } from 'react';
import ProglList from '../components/ProglList';
import data from '../services/data'

class About extends Component {
    render() {
        return (
            <main>
                <h2> Sobre Mim </h2>
                <article>
                    <p>{ data.about }</p>
                </article>
                <h3> Habilidades </h3>
                <ul className='prog-list'>
                    Linguagens de programação
                    <ProglList progl={data.skills.progl} />
                </ul>
                <ul className='frame-list'>
                   Frameworks
                    <ProglList progl={data.skills.frameWorks} className='prog-list'/>
                </ul>
                <ul>
                    {data.skills.habilities.map((hab) => <li>{ hab }</li>)}
                </ul>
            </main>
        );
    }
}   
export default About;