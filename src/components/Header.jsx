import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <Link to='/'> Inicio </Link>
                    <Link to='/about'> Sobre Mim </Link>
                    <Link to=''> Projetos </Link>
                </nav>
            </header>
        );
    }
}

export default Header;