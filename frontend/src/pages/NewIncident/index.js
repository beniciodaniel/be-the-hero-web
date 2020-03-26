import React from 'react';

import {Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import imgLogo from '../../assets/logo.svg';

import './styles.css'

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={imgLogo} alt="Be The Hero"/>
          <h1>Cadastro novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para /profile
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Título do caso"/>
          <textarea placeholder="Descrição"/>
          <input placeholder="Valor em reais"/>        
          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}