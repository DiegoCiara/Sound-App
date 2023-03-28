import React from "react";
import './styles.css'

export  function ContactCapture() {
  
  return(
  
    <div className="content-card" >
      <h3>Entre em contato</h3>
      <p>Deixe preencha o formulário abaixo, nós entraremos em contato com você</p>
      <div className="contact-capture">
        <div className='title'>
          Nome:
        </div>
        <input type='text' />
        <div className='title'>
          E-mail:
        </div>
        <input type='email'/>
        <div className='title'>
          Telefone:
        </div>
        <input type='number'/>
        <div style={{
          display: 'flex', 
          flexDirection:'row', 
          width: '80%',
          height: '10%',
          }}>
          <input type='checkbox' className="checkbox"/>
          <div className="title mini"><p>Concordo com a</p> &nbsp; <a href="www.diegociara.vercel.app">Politica e Privacidade</a></div>
        </div>
        <button className="send">Enviar</button>
      </div>
    </div>
  );
};