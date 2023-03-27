import React from "react";
import './styles.css'

export  function ContactCapture() {
  return(
    <div className="content-card">
      <div className="contact-capture">
        Nome:
        <input type='text'className="Nome"/>
        E-mail:
        <input type='email' className="Email"/>
        Telefone:
        <input type='number' className="Phone"/>
        <button className="send">Enviar</button>
      </div>
    </div>
  );
};