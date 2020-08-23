import React from 'react'

import './styles.css'

import closeIcon from '../assets/icons/fechar.svg'
import addIcon from '../assets/icons/mais.svg'


function MoreOptions(){

    function handleClose(){
        document.querySelector('.container-more-options')?.classList.add('display-none')
    }


    return(
        <div className="container-more-options display-none">
            <div className="header-close">
                <img src={closeIcon} alt="fechar página" onClick={handleClose} className="more-icon-close"/>
            </div>
            <div className="header-title">
                <h1> Todas as pastas </h1>
                <img src={addIcon} alt="adicionar" className="more-options-add"/>
            </div>
            <div className="container-all-options">
                <div className="Caixa-de-saida">
                    <h1>Caixa de Saída</h1>
                </div>
                <div className="Caixa-de-entrada"> 
                    <h1>Caixa de Entrada</h1>
                </div>
                <div className="arquivo-morto">
                    <h1>Arquivo Morto</h1>
                </div>
                <div className="Contatos">
                    <h1>Contatos</h1>
                </div>
                <div className="Historico">
                    <h1>Histórico de conversa</h1>
                </div>
                <div className="Enviados">
                    <h1>Enviados</h1>
                </div>
                <div className="Excluidos">
                    <h1>Excluídos</h1>
                </div>
                <div className="Lixo">
                    <h1>Lixo</h1>
                </div>
                <div className="Rascunhos">
                   <h1>Rascunhos</h1>
                </div>
            </div>
        </div>
    )
}

export default MoreOptions;

