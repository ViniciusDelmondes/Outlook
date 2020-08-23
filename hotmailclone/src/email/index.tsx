import React from 'react'

import './styles.css'

import closeIcon from '../assets/icons/fechar.svg'
import responderIcon from '../assets/icons/responder.svg'
import respondertodosIcon from '../assets/icons/respondertodos.svg'
import encaminharIcon from '../assets/icons/encaminhar.svg'
import opcoesIcon from '../assets/icons/maisopcoes.svg'

import emailOpenIcon from '../assets/icons/emailOpen.svg'


interface Test {
    emailItem: any;
    setEmailItem: any;
    
}

function closedEmail(){
    const Closed = document.querySelector('.container-email')
    Closed?.classList.add('closeEmail')
}

const Email: React.FC<Test> = (props) => {
    const {emailItem} = props
    return(
        <div className="container-email d-invisibility">
            <div className="page-header">
                <button type="button" className="btn-closed" onClick={closedEmail}> 
                    <img src={closeIcon} alt="fechar página" className="btn-icon"/> 
                </button>
            </div>
            <div className="options-topbar">
                <div className="responder">
                    <img src={responderIcon} alt="responder emaill" className="icon-responder"/>
                    Responder
                </div>

                <div className="respondertodos">
                    <img src={respondertodosIcon} alt="responder todos" className="icon-respondertodos"/>
                    Responder a todos
                </div>

                <div className="encaminhar">
                    <img src={encaminharIcon} alt="encaminhar" className="icon-encaminhar"/>
                    Encaminhar
                </div>

                <div className="opcoes">
                    <img src={opcoesIcon} alt="mais opções" className="icon-opcoes"/>
                </div>
            </div>
        
            <div className="container-bodyEmail">
                <div className="header-container">
                    <div className="assunto-content"> 
                        <span>{!!emailItem && emailItem.assunto}</span>
                    </div>
                    <div className="info-container">
                        <div className="avatar-content">
                            <img src={!!emailItem && emailItem.avatar} />
                        </div>
                        <div className="info-email">
                            <div className="info-email-row">
                                <img src={emailOpenIcon} alt="" className="icon-open"/>
                                <h3>{!!emailItem && emailItem.remetente}</h3>
                            </div>
                            <div className="date-content">
                                <span>{!!emailItem && emailItem.datahora}</span>
                            </div> 
                        </div>
                    </div> 
                    <div className="to-email">
                        <h3>Para:</h3>
                        <span>{!!emailItem && emailItem.email}</span>
                    </div>          
                </div>

                <div className="body-area">
                    <p> {!!emailItem && emailItem.corpoarea}</p>
                    <p> {!!emailItem && emailItem.corpoarea2}</p>
                </div>
               
            </div> 
            
             
        </div>
    )
}

export default Email;