import React from "react";
import './Armazenador.css'
import imagemRepo from './repositorio.png'

//JSX  - HTML dentro do JS
const Armazenador = (props) => // props indica que será obtido os valores das propriedades enviadas nos objeto  que 'instacia' esta classe
    // props é um objetos que vem as propriedades do componente
    { // {} indica que a classe tem um retorno 
    const num1 = 2;
    const num2 = 5;

    const numParam1 = props.numero1;
    const numParam2 = props.numero2;

    const intParam1 = props.inteiro1;
    const intParam2 = props.inteiro2;



    return ( // tudo que será retornado prcisa estar entre ()
    //para realizar operação de (soma, divisao, ect), precisa estar entre {}
    <div className="Armazenador"> 
        <img class="repoimg" src={imagemRepo} alt={props.titulo}></img>
        <h1>COMPONENTE ARMAZENADOR {props.indice}</h1>

        <p> Numero parametro 1 enviado: {numParam1}</p>
        <p> Numero parametro 2 enviado: {numParam2}</p>
        <h4>Soma dos dois parametros String: {numParam1 + numParam2}</h4>
        <h4>Soma dos dois parametros Inteiro: {intParam1 + intParam2}</h4>


        <div>A soma de 2+5 é: {2+5}</div>
        <h3 class="numero1">Numero 1: {props.numero1}</h3> 
        <h3 class="numero1">Numero 2: {props.numero2}</h3>
        <div class="conteudo">
            <h3 class="titulo">Titulo: {props.titulo}</h3> 
            <h3 class="area">Area 1: {props.area}</h3>
            <h3 class="data">Data: {props.data.toString()}</h3>
            <p class="resumo">
                <h4>RESUMO:</h4> 
                {props.resumo}
            </p>
        <button onClick={props.onRemove}>&times;</button> {/** integracao entre os componentes */}

        </div> 
        
        <h3> Texto do componente: {props.children}</h3>

        
        <div> [mode 2] A soma de 2+5 é: {num1+num2}</div>
        
    </div>
    )

};


export default Armazenador;