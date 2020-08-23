import React, { HtmlHTMLAttributes } from 'react'

import './stylesreceived.css'

export interface boxItem{
    avatar: string;
    remetente: string;
    assunto: string;
    remetenteCompleto?: string;
    corpotexto?: string;
    horario?: string;
    datahora?: string;
    email?: string;
    onClick?: Function;
}

const received: React.FC<boxItem> = ({...boxItem}) => {

    return(
        <div className="box-container">
            <div className="box-received">
                <img src={boxItem.avatar} alt="teste"/>
                <h1> {boxItem.remetente} </h1>
                <h2> {boxItem.assunto} </h2>
                <p> {boxItem.corpotexto} </p>
                <h4> {boxItem.horario} </h4>
            </div>
        </div>
    )
}

export default received;