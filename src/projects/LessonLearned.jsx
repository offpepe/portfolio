import React, { Component } from 'react';
import './LessonLearned.css';

class LessonLearned extends Component {
    render() {
        return (
        <div>
            <div id="cabecalho">
              <h1 id="titulo">Lesson Learned</h1>
              <h2>Alan Albuquerque Ferreira Lopes</h2>
              <nav>
                <a href="#licoes aprendidas">Lições</a>
                <a href="#rodape">Contato</a>
                <a href="https://offpepe.github.io/">Portfolio</a>
              </nav>
            </div>
            <section class="photo_section">
            <img
              src="src/imgs/me_photo.jpeg"
              alt="Foto de Alan Albuquerque"
              id="minha_foto"
            />
           </section>
            
        </div>
        );
    }
}

export default LessonLearned;