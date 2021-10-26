import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import './css/Contact.css';

export default function Contact () {
  const [serviceId] = useState('service_efrtl4t');
  const [template] = useState('template_v9n3zab');

  useEffect(() => {
    emailjs.init('user_GDIZ7XgctjBwTeSRZHpZO');
  }, []);

  const sendEmail = async (email, name, message, subject) => {
    const sendBtn = document.getElementsByClassName('send-btn')[0];
    if(email && name && message) {
      const params = {
        from_name: (subject ? `${name}  - Assunto: ${subject}` : name),
        to_name: email,
        message,
        reply_to: 'alan.alb.flopes@gmail.com',
      }
      try {
        sendBtn.classList.add('is-loading');
        await emailjs.send(serviceId, template, params);
        sendBtn.classList.remove('is-loading');
        sendBtn.classList.remove('is-success');
        sendBtn.classList.add('is-primary');
        sendBtn.innerHTML = "Enviado!"
        setTimeout(() => sendBtn.innerHTML = "Enviar", 800);
      } catch (err) {
        sendBtn.classList.remove('is-success');
        sendBtn.classList.add('is-danger');
        sendBtn.innerHTML = "Erro!"
        alert(err);
        setTimeout(() => sendBtn.innerHTML = "Enviar", 800);
      }
    }
  }

    return (
      <main className="contact-main fade-in">
        <div className="contact-textContent">
          <h3 className="title is-3" style={ { fontWeight: 100, fontSize: '35px' } }>
            Deixe uma mensagem!
          </h3>
        </div>
        <form
          className="control contact-form"
          onSubmit={ async (ev) => {
            ev.preventDefault();
            const { email, subject, name, message } = ev.target;
            await sendEmail(email.value, name.value, message.value, subject.value);
          } }
          >
          <div class="control has-icons-left has-icons-right">
          <input
            style={ { marginBottom: '5px' } }
            className="input is-hovered is-medium"
            name="email"
            type="email"
            placeholder="contact.me@mail.com.js"
            required
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
          <input
            style={ { marginBottom: '5px' } }
            className="input is-hovered is-medium"
            name="name"
            type="text"
            placeholder="Seu nome"
            required
            />
          <input
          style={ { marginBottom: '5px' } }
          className="input is-hovered is-medium"
          name="subject"
          type="text"
          placeholder="Assunto"
          />
          <textarea 
            className="textarea is-info is-medium"
            name="message"
            placeholder="Escreva sua mensagem"
            required
          />
          <button
            className="button is-success send-btn"
            type="submit"
            > Enviar </button>
        </form>
      </main>
    );
}