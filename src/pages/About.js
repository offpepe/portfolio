import React, { Component } from 'react';
import ProglList from '../components/ProglList';
import data from '../services/data'

class About extends Component {
    render() {
        return (
            <main className="about fade-in">
                <h2 className="title is-3"> Sobre Mim </h2>
                <article>
                    <p>{ data.about }</p>
                </article>
                <h3 className="subtitle is-3"> Habilidades </h3>
                <section>
                <ul className='prog-list'>
                    <h4 className="subtitle is-5">Linguagens de programação</h4>
                    <ProglList className='prog-item' progl={data.skills.progl} />
                </ul>
                <ul className='prog-list'>
                   <h4 className="subtitle is-5">Frameworks</h4>
                    <ProglList progl={data.skills.frameWorks} className='prog-list'/>
                </ul>
                <ol className='prog-list misc'>
                    <h4 className="subtitle is-5"> Conhecimentos gerais </h4>
                    {data.skills.habilities.map((hab) => <li key={ hab }>{ hab }</li>)}
                </ol>
                </section>
            </main>
        );
    }
}   
export default About;