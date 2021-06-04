import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav>
                    <Link className='button is-rounded is-info is-outlined' to='/portfolio'> Inicio </Link>
                    <Link className='button is-rounded is-info is-outlined' to='/portfolio/about'> Sobre Mim </Link>
                    <Link className='button is-rounded is-info is-outlined' to='/portfolio/projects'> Projetos </Link>
                </nav>
            </header>
        );
    }
}

export default Header;