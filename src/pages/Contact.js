import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import data from '../services/data';

class Contact extends Component {
    constructor() {
      super();
      this.state = {
        from_name :'',
        to_name: '',
        message: '',
        reply_to: 'alan.alb.flopes@gmail.com',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.renderAlert = this.renderAlert.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      const serviceID = 'service_efrtl4t';
      const templateID = 'template_v9n3zab';
      const templateParams = { ...this.state };
      const buttonSubmit = document.getElementById('submit-btn');
      buttonSubmit.classList.add('is-loading');
      emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            buttonSubmit.classList.remove('is-loading');
            buttonSubmit.classList.remove('is-primary');
            buttonSubmit.classList.add('is-success');
            buttonSubmit.innerText = 'Enviado!'
            this.renderAlert('success');
            setTimeout(() => {
                buttonSubmit.classList.remove('is-success');
                buttonSubmit.classList.add('is-primary');
                buttonSubmit.innerText = 'Enviar'
            }, 1000);
        })
        .catch((err) => {
            buttonSubmit.classList.remove('is-loading');
            buttonSubmit.classList.remove('is-primary');
            buttonSubmit.classList.add('is-danger');
            buttonSubmit.innerText = 'Erro!'
            this.renderAlert('error', err);
            setTimeout(() => {
                buttonSubmit.classList.remove('is-danger');
                buttonSubmit.classList.add('is-primary');
                buttonSubmit.innerText = 'Enviar'
            }, 1000);
        });
    }

    componentDidMount() {
        emailjs.init('user_GDIZ7XgctjBwTeSRZHpZO');
    }

    renderAlert(type, err = null) {
      switch (type) {
          case 'success':
            return this.setState(
              {
                alert: () => <span className="alert-success"><p> Email enviado! </p></span>
              },() => setTimeout(() => this.setState ({ alert: undefined }), 2000));
          case 'error':
            return  this.setState(
              {
                alert: () => <span className="alert-error"><p>{ `Erro! ${err}` }</p></span>
              }, () => setTimeout(() => this.setState ({ alert: undefined }), 2000));
          default:
              return  this.setState(
                  {
                    alert: () => <span className="alert-error"><p>O maior ser vivo do mundo é um fungo!</p></span>
                  }, () => setTimeout(() => this.setState ({ alert: undefined }), 2000));
      }
    }

    handleChange(e) {
     this.setState({
       [e.target.name]: e.target.value,
     });
    }

    render() {
        const { alert } = this.state;
        return (
          <main className="contact fade-in">                
            <section className="contact-content">
                <section className="contact-networks-conteiner">
                <h2 className="contact-title"> Entre em contato </h2>
                  <div className="contact-networks">
                  <a href={ data.network.github.path } target="_blank" rel="noreferrer">
                    <i className="content-icons fab fa-github"/>
                  </a>
                  <a href={ data.network.linkedin.path } target="_blank" rel="noreferrer">
                    <i className="content-icons fab fa-linkedin"/>
                  </a>
                  <a href={ data.network.twitter.path } target="_blank" rel="noreferrer">
                    <i className="content-icons fab fa-twitter-square"/>
                  </a>
                  <a href={ data.network.instagram.path } target="_blank" rel="noreferrer">
                    <i className="content-icons fab fa-instagram"/>
                  </a>
                  </div>
                </section>
                <section className="contact-form-sec">
                    <form className="form-contact" onSubmit={ this.handleSubmit }>
                      <label htmlFor="from_name" className="control has-icons-left has-icons-right">
                          <input
                            type="text"
                            maxLength="15"
                            name="from_name"
                            className="input is-primary"
                            placeholder="Seu nome"
                            onChange={ this.handleChange }
                           />
                           <span className="icon is-small is-left">
                             <i className="fas fa-user"/>
                           </span>
                      </label>
                      <label htmlFor="to_name" className="control has-icons-left has-icons-right">
                          <input
                            type="email"
                            name="to_name"
                            className="input is-primary"
                            placeholder="Seu e-mail"
                            onChange={ this.handleChange }
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-envelope"/>
                          </span>
                      </label>
                      <label htmlFor="message">
                      <textarea
                        name="message"
                        className="textarea is-primary"
                        placeholder="Escreva sua mensagem aqui."
                        onChange={ this.handleChange }
                      />
                      </label>
                      <button type="submit" id="submit-btn" className="button is-primary" > Enviar </button>
                    </form>
                </section>
            </section>
              { alert && alert() }
          </main>
        );
    }
}

export default Contact;