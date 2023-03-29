import React from "react";
import './styles.css'

export  function ContactCapture() {
  
  return(
  
    <div className="content-card" >
      <div className="title-contact">
        <h3>Se junte a festa!</h3>
        <p>Preencha o formulário abaixo para receber as melhores recomendações de músicas</p>
      </div>
      <div className="contact-capture">
        <div className="input-container">
          <div className='title'>
            <label htmlFor='name'>
              Nome:
            </label>
          </div> 
          <input type='text' placeholder="Insira seu nome" name="name" autoComplete={false} autoCorrect={false}/>
        </div>
        <div className="input-container">
          <div className='title'>
            E-mail:
          </div> 
          <input type='email' />
        </div>
        <div className="input-container">
          <div className='title'>
            Telefone:
          </div> 
          <input type='number' />
        </div>
        <div style={{
          display: 'flex', 
          flexDirection:'row', 
          width: '100%',
          height: '10%',
          }}>
          <input type='checkbox' className="checkbox"/>
          <div className="title mini">Concordo com a &nbsp; <a href="https://diegociara.vercel.app" className="politic-and-privacity">Politica e Privacidade</a></div>
        </div>
        <button className="send">Enviar</button>
      </div>
    </div>
  );
};