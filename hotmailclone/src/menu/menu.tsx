import React from 'react'

import menuIcon from '../assets/icons/menu-aberto.svg'
import userIcon from '../assets/icons/user.svg'
import addIcon from '../assets/icons/adicionar.svg'
import pastaIcon from '../assets/icons/pasta.svg'
import mobileIcon from '../assets/icons/telefone.svg'
import emailIcon from '../assets/icons/email.svg'
import calendarioIcon from '../assets/icons/calendario.svg'
import pessoasIcon from '../assets/icons/pessoas.svg'
import tickedIcon from '../assets/icons/ticked.svg'
import configIcon from '../assets/icons/config.svg'

import './styles.css'

function Menu(){

    function handleClickNavigationEmail(){
        const emailMain = document.querySelector('.emailmain')
        emailMain?.classList.add('clickeffect')
    
        const Schedule = document.querySelector('.schedule')
        Schedule?.classList.remove('clickeffect')
    
        const Pessoas = document.querySelector('.pessoas')
        Pessoas?.classList.remove('clickeffect')
    
        const Ticked = document.querySelector('.ticked')
        Ticked?.classList.remove('clickeffect')
    
        const Config = document.querySelector('.config')
        Config?.classList.remove('clickeffect')
    };
    
    function handleClickNavigationSchedule(){
        const emailMain = document.querySelector('.emailmain')
        emailMain?.classList.remove('clickeffect')
    
        const Schedule = document.querySelector('.schedule')
        Schedule?.classList.add('clickeffect')
    
        const Pessoas = document.querySelector('.pessoas')
        Pessoas?.classList.remove('clickeffect')
    
        const Ticked = document.querySelector('.ticked')
        Ticked?.classList.remove('clickeffect')
    
        const Config = document.querySelector('.config')
        Config?.classList.remove('clickeffect')
    }
    
    function handleClickNavigationPessoas(){
        const emailMain = document.querySelector('.emailmain')
        emailMain?.classList.remove('clickeffect')
    
        const Schedule = document.querySelector('.schedule')
        Schedule?.classList.remove('clickeffect')
    
        const Pessoas = document.querySelector('.pessoas')
        Pessoas?.classList.add('clickeffect')
    
        const Ticked = document.querySelector('.ticked')
        Ticked?.classList.remove('clickeffect')
    
        const Config = document.querySelector('.config')
        Config?.classList.remove('clickeffect')
    }
    
    function handleClickNavigationTicked(){
        const emailMain = document.querySelector('.emailmain')
        emailMain?.classList.remove('clickeffect')
    
        const Schedule = document.querySelector('.schedule')
        Schedule?.classList.remove('clickeffect')
    
        const Pessoas = document.querySelector('.pessoas')
        Pessoas?.classList.remove('clickeffect')
    
        const Ticked = document.querySelector('.ticked')
        Ticked?.classList.add('clickeffect')
    
        const Config = document.querySelector('.config')
        Config?.classList.remove('clickeffect')
    }
    
    function handleClickNavigationConfig(){
        const emailMain = document.querySelector('.emailmain')
        emailMain?.classList.remove('clickeffect')
    
        const Schedule = document.querySelector('.schedule')
        Schedule?.classList.remove('clickeffect')
    
        const Pessoas = document.querySelector('.pessoas')
        Pessoas?.classList.remove('clickeffect')
    
        const Ticked = document.querySelector('.ticked')
        Ticked?.classList.remove('clickeffect')
    
        const Config = document.querySelector('.config')
        Config?.classList.add('clickeffect')
    }

    function handleClickView(){
        document.querySelector('.d-none')?.classList.remove("d-none");
    }

    function handleClickViewMoreOptions(){
        document.querySelector('.display-none')?.classList.remove("display-none");
    }

    return (
        <div className="container">
            <div className="content"> 

                <h1 className="title">Caixa de entrada - Hotmail</h1>
                <div className="top-header">

                    <button type="button" className="btn-menu">
                        <img src={menuIcon} alt="icone menu" className="btn-image-menu"/>
                    </button>

                    <div className="new_email" onClick={handleClickView}>

                        <img src={addIcon} alt="adicionar" className="image-add"/>
                        Novo email
                    </div>

                    <div className="listagem">
                        <div className="contas">
                            <img src={userIcon} alt="icone do usuário" className="image-user"/> 
                            Contas
                                <div className="contas_email">
                                    <h1>Hotmail</h1>
                                    <p> viniciusdelmo@hotmail.com </p>
                                </div>
                        </div>

                        <div className="pastas">
                            <img src={pastaIcon} alt="pastas do usuário" className="image-pastas"/> 
                            Pastas
                                <div className="pastas_caixa">
                                    <h1>Caixa de entrada</h1>
                                </div>
                                <div className="more_folders" onClick={handleClickViewMoreOptions}>
                                    <h1>Mais</h1>
                                </div>
                        </div>
                    </div>

                    
                    <div className="warning-container">
                        <img src={mobileIcon} alt="icone do usuário" className="btn-image-mobile"/>
                        <div className="warning-items">
                            Obtenha o aplicativo gratuito do Outlook em seu <br/> telefone
                        </div>
                    </div>

                    <footer className="divs-footer">

                        <div className="emailmain" onClick={handleClickNavigationEmail}>
                            <img src={emailIcon} alt="email" className="image-emailmain"/>  
                        </div>

                        <div className="schedule" onClick={handleClickNavigationSchedule}>
                            <img src={calendarioIcon} alt="calendário" className="image-schedule"/>  
                        </div>

                        <div className="pessoas" onClick={handleClickNavigationPessoas}>
                            <img src={pessoasIcon} alt="pessoas" className="image-pessoas"/>
                        </div>

                        <div className="ticked" onClick={handleClickNavigationTicked}>
                            <img src={tickedIcon} alt="ticked" className="image-ticked"/>
                        </div>

                        <div className="config" onClick={handleClickNavigationConfig}>
                            <img src={configIcon} alt="configuração" className="image-config"/>
                        </div>

                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Menu;