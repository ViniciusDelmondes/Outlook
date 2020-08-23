import React, { useEffect } from 'react'

import './styles.css'

import closeIcon from '../assets/icons/fechar.svg'
import lixoIcon from '../assets/icons/lixo.svg'
import enviarIcon from '../assets/icons/enviar.svg'
import boldIcon from '../assets/icons/bold.svg'
import italicoIcon from '../assets/icons/italico.svg'
import underlineIcon from '../assets/icons/underline.svg'
import emailOpenIcon from '../assets/icons/emailOpen.svg'
import userCreateIcon from '../assets/icons/userCreate.svg'
import downIcon from '../assets/icons/down.svg'
import paragraphIcon from '../assets/icons/paragrafo.svg'
import desfazerIcon from '../assets/icons/desfazer.svg'

function CreateEmail(){

    
    function handleOptionsMainFormatar(){
        const Formatar = document.querySelector('.createEmail-Formatar')
        Formatar?.classList.add('handleClickTopbar')
    
        const Inserir = document.querySelector('.createEmail-Inserir')
        Inserir?.classList.remove('handleClickTopbar')
    
        const Desenhar = document.querySelector('.createEmail-Desenhar')
        Desenhar?.classList.remove('handleClickTopbar')
    
        const Options = document.querySelector('.createEmail-Options')
        Options?.classList.remove('handleClickTopbar')
    }
    
    function handleOptionsMainInserir(){
        const Formatar = document.querySelector('.createEmail-Formatar')
        Formatar?.classList.remove('handleClickTopbar')
    
        const Inserir = document.querySelector('.createEmail-Inserir')
        Inserir?.classList.add('handleClickTopbar')
    
        const Desenhar = document.querySelector('.createEmail-Desenhar')
        Desenhar?.classList.remove('handleClickTopbar')
    
        const Options = document.querySelector('.createEmail-Options')
        Options?.classList.remove('handleClickTopbar')
    }
    
    function handleOptionsMainDesenhar(){
        const Formatar = document.querySelector('.createEmail-Formatar')
        Formatar?.classList.remove('handleClickTopbar')
    
        const Inserir = document.querySelector('.createEmail-Inserir')
        Inserir?.classList.remove('handleClickTopbar')
    
        const Desenhar = document.querySelector('.createEmail-Desenhar')
        Desenhar?.classList.add('handleClickTopbar')
    
        const Options = document.querySelector('.createEmail-Options')
        Options?.classList.remove('handleClickTopbar')
    }
    
    function handleOptionsMainOptions(){
        const Formatar = document.querySelector('.createEmail-Formatar')
        Formatar?.classList.remove('handleClickTopbar')
    
        const Inserir = document.querySelector('.createEmail-Inserir')
        Inserir?.classList.remove('handleClickTopbar')
    
        const Desenhar = document.querySelector('.createEmail-Desenhar')
        Desenhar?.classList.remove('handleClickTopbar')
    
        const Options = document.querySelector('.createEmail-Options')
        Options?.classList.add('handleClickTopbar')
    }

    useEffect(() => {
        handleOptionsMainFormatar();
    }, [])

    function closedView(){
        document.querySelector('.container-CreateEmail')?.classList.add('d-none')
    }

    return(
        <>
            <div className="container-CreateEmail d-none">
                <div className="page-header-closedEmail">
                    <button type="button" className="btn-closed-createEmail" onClick={closedView}> 
                        <img src={closeIcon} alt="fechar página" className="btn-icon-closedEmail"/> 
                    </button>
                </div>
                <div className="topbar-options">
                    <div className="createEmail-Formatar" onClick={handleOptionsMainFormatar}>
                        Formatar
                    </div>
                    <div className="createEmail-Inserir" onClick={handleOptionsMainInserir}>
                        Inserir
                    </div>
                    <div className="createEmail-Desenhar" onClick={handleOptionsMainDesenhar}>
                        Desenhar
                    </div>
                    <div className="createEmail-Options" onClick={handleOptionsMainOptions}>
                        Opções
                    </div>
                    <div className="createEmail-Descartar">
                        <img src={lixoIcon} alt="" className="icon-lixeira"/>
                        Descartar
                    </div>
                    <div className="createEmail-Enviar">
                        <img src={enviarIcon} alt="" className="icon-enviar"/>
                        Enviar
                    </div>
                </div>
                <div className="options-write"> 
                    <div className="Bold">
                        <img src={boldIcon} alt="" className="icon-bold"/>
                    </div>
                    <div className="Italic">
                        <img src={italicoIcon} alt="" className="icon-italico"/>
                    </div>
                    <div className="Underline">
                        <img src={underlineIcon} alt="" className="icon-underline"/>
                    </div>
                    <div className="more-options">
                        <img src={downIcon} alt="" className="icon-down"/>
                    </div>
                    <div className="paragraph">
                        <img src={paragraphIcon} alt="" className="icon-paragraph"/>
                    </div>
                    <div className="write-formating">
                        <input type="text" placeholder="Arial" className="input-type-text"/>
                    </div>
                    <div className="desfazer">
                        <img src={desfazerIcon} alt="" className="icon-desfazer"/>
                        <p>Desfazer</p>
                    </div>
                </div>
                <div className="remetente-box">
                    <form>
                        <div className="in">
                            <h1>De:</h1>
                            <p> viniciusdelmo@hotmail.com </p>
                            <img src={emailOpenIcon} alt="" className="email-open-icon"/>
                        </div>
                        <div className="for">
                            <h1>Para:</h1>
                            <textarea className="textarea-para"/>
                            <img src={userCreateIcon} alt="" className="user-icon-createemail"/>
                            <p> Cc e Cco </p>
                        </div>
                        <div className="subject-matter">
                            <h1>Assunto</h1>
                            <textarea className="textarea-assunto"/>
                        </div>
                        <div className="body">
                            <textarea className="body-content"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateEmail;