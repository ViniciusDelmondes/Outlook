import React, { useState, useEffect } from 'react'

import './styles.css'


import reloadIcon from '../assets/icons/reload.svg'
import listaIcon from '../assets/icons/lista.svg'
import downIcon from '../assets/icons/down.svg'

import Received from '../components/received/index'

import handleMarkeOff from '../components/received/index'

interface Type {
    avatar: string;
    remetente: string;
    assunto: string;
    corpotexto: string;
    horario: string;
    email: string;
    datahora: string;
}

interface Obj {
    avatar: string;
    remetente: string;
    assunto: string;
    corpotexto: string;
    horario: string;
    email: string;
    datahora: string;
}

interface Box {
    emailData: Array<Type>;
    emailItem: any;
    setEmailItem: any;
    
}

 const Main: React.FC<Box> = (props) => { 
    const {emailData, emailItem, setEmailItem} = props;
    console.log(emailItem)
    function handleOptionsMainDestaques(){
        const Destaques = document.querySelector('.destaques')
        Destaques?.classList.add('handleClick')
    
        const Outros = document.querySelector('.outros')
        Outros?.classList.remove('handleClick')
    }
    
    function handleOptionsMainOutros(){
        const Destaques = document.querySelector('.destaques')
        Destaques?.classList.remove('handleClick')
    
        const Outros = document.querySelector('.outros')
        Outros?.classList.add('handleClick')
    }

    function  handleOpenEmail(params: any, index: any) {
        setEmailItem(params)
        // const prev = document.querySelectorAll('.box-received')?.classList.add('desmarcar')
        const prev = document.querySelectorAll('.box-received')
        prev[index].classList.add('desmarcar');

        document.querySelector('.d-invisibility')?.classList.remove("d-invisibility");
    }
    
    useEffect(() => {
        handleOptionsMainDestaques();
    }, [])

    return( 
        <div className="containermain"> 
            <div className="header">
                <input placeholder="Pesquisar" type="text"/>
                <button type="button" className="btn-reload">
                    <img src={reloadIcon} alt="atualizar" className="image-reload"/>
                </button>
                <button type="button" className="btn-lista">
                    <img src={listaIcon} alt="listagem" className="image-lista"/>
                </button>
                <div className="abas_link">
                <div className="links">
                    <a className="destaques" onClick={handleOptionsMainDestaques}> Destaques </a>
                    <a className="outros" onClick={handleOptionsMainOutros}> Outros </a>
                    <button className="btn-filtrar">
                        Tudo  
                        <img src={downIcon} alt="filtro selecionar" className="icon-filtrar"/>
                    </button>
                </div>
            </div>
            </div>
            
            
        
            <div className="container-boxItems">
                <main className="boxItems">
                    
                    {emailData.map((item: any, index: any) => {
                        return (
                            <div className="container-item" onClick={() => handleOpenEmail(item, index)}>
                            <Received key={index}
                            avatar={item.avatar}
                            remetente={item.remetente}
                            assunto={item.assunto}
                            corpotexto={item.corpotexto}
                            horario={item.horario}                            
                            />
                            </div>
                            
                        )
                    })}    
                    

                </main>
            </div>

            

        </div>
    )

}

export default Main;