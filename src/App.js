import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import Armazenador from './componentes/Armazenador';

class App extends Component {
  state = {
    armazenadorStateArray:[
      {
        id: 1,
        titulo: 'Meu Projeto Tcc',
        area: 'Computação / Ciencia de Dados',
        data: new Date(2023, 3, 22, 12, 15, 0),
        resumo: 'Resumo do projeto 01'
      },
      {
        id: 2,
        titulo: 'Meu Projeto Dissertacao',
        area: 'Computação / Ciencia de Dados',
        data: new Date(2023, 3, 22, 12, 15, 0),
        resumo: 'Resumo do projeto 02'
      }
    ],
    armazenadorStateREQUEST: {
      titulo: '',
      area: '',
      data: '',
      resumo: ''
    }
  }

  adicionarTCCMocks = () => {
    console.log("Adicionando NOVO TCC...");
    const novoTccMock = {
        id: 3,
        titulo: 'Meu Projeto Mock Incluido VIA ESTADO',
        area: 'Computação Mock State/ Mock State',
        data: new Date(2023, 3, 22, 12, 15, 0),
        resumo: 'Resumo do Texto mockado adicionado'
    }

    /**obtem a lista armazenada no array de estados existentes */
    /**MOD1 - criando lista e adicionando valor */
    /*
    let lista = this.state.armazenadorStateArray;
    lista.push(novoTccMock); // add o novo objeto dentro da lista 
    this.setState({armazenadorStateArray: lista}); //inclui na lista de estados a nova lista
    */

    /**MOD 2 -utilizando spred para incluir na lista de estados */
    this.setState({armazenadorStateArray: [...this.state.armazenadorStateArray, novoTccMock]})

  }

  adicionarTCCInput = (evento) => {
    evento.preventDefault(); /* anula o envnto POST informado lá no form */

    const stateREQUEST = this.state.armazenadorStateREQUEST;
    stateREQUEST.data = new Date();
    this.setState({armazenadorStateArray: [...this.state.armazenadorStateArray, stateREQUEST], //captura o que ja existe no array de estado e inclui o novo estado
    armazenadorStateREQUEST:{ //lmpando o campo input após setar o valores no novo estado
      titulo: '',
      area: '',
      data: '',
      resumo: ''
    }}) 
  }

  /*responsael por preencher o estado do objeto com a digitação */
  mudarEstadoAoDigitarTCC = evento => {
    /*const value = evento.target.value; /** obtem o valor do evento */
    /*const campoPosicao = evento.target.name; /** obtem o nome do evento */
    
    /*this.setState({armazenadorStateREQUEST: {...this.armazenadorStateREQUEST, titulo: value} })*/ //dessa forma deve ser criado um pra cada

    const {name, value} = evento.target;
    this.setState({armazenadorStateREQUEST: {...this.state.armazenadorStateREQUEST, [name]: value} }) //dessa forma captura buscando pelo name e value do evento (ou seja, name e value do campo input)
  }

  removerTcc = titulo => {
    let list = this.state.armazenadorStateArray;

    list = list.filter(t => t !== titulo)
    this.setState({armazenadorStateArray: list})
  }

  render() {
    return (

      <div className="App">
        
         <div className='styles'>
            <h1>Renderizando o componente 1- SET HARD CODE</h1>
            <Armazenador indice="1" numero1="3" numero2="2" inteiro1={1} inteiro2={2} 
            titulo="Ocupação dos Manguezais Ludovicenses" area="Biologia  / Bioma / Ciencia da natureza"
            data={new Date(2023, 3, 19)}>
              Texto dentro do componente 1 (children)
              <p>OBS: Aqui dentro pode passar um componente</p>
            </Armazenador>

            <h1>Renderizando o componente 2 - SET HARD CODE</h1>
            <Armazenador indice="2" numero1="5" numero2="6" inteiro1={7} inteiro2={3}
            titulo="Facilidades do uso de react" area="Computação / Ciencia de dados"
            data={new Date(2022, 2, 15)}>
              Texto dentro do componente 2 (children)
            </Armazenador>


            <h1>Renderizando o componente 3 COM STATE - OBJETOS MOCK</h1>

            {this.state.armazenadorStateArray.map((armazenadoParam, indice) => (

                <Armazenador 
                key={indice}
                titulo={armazenadoParam.titulo} 
                area={armazenadoParam.area}
                data={armazenadoParam.data}
                resumo={armazenadoParam.resumo}
                onRemove={this.removerTcc.bind(this, armazenadoParam)}
                >

                </Armazenador>

            ))}


            <h1>Renderizando o componente 4 COM STATE - MANIPULANDO ESTADO</h1>
            <button onClick={this.adicionarTCCMocks}> Adicionado um TCC com Evento Mock </button>
            <br></br>

            <br></br>

            
            <form method="post" onSubmit={this.adicionarTCCInput} className="Novo-Arquivo" /** onSubmit modifica o Array de Estado de acordo com o que vem do formulário*/>
              
              <h3>Adicionando um Novo TCC Via Input</h3>
              <input
              type="text"
              name="titulo"
              onChange={this.mudarEstadoAoDigitarTCC} /**muda o estado ao digitar */
              value={this.state.armazenadorStateREQUEST.titulo} /** recebe o estado no indice titulo */
            
              required
              placeholder="Digite o Título" 
              />
              <input
              type="text"
              name="area"
              onChange={this.mudarEstadoAoDigitarTCC} /**muda o estado ao digitar */
              value={this.state.armazenadorStateREQUEST.area}
              required
              placeholder="Digite Area" 
              />
              <textarea
                name="resumo"
                onChange={this.mudarEstadoAoDigitarTCC} /**muda o estado ao digitar */
                value={this.state.armazenadorStateREQUEST.resumo}
                required
                rows="5" 
              />

            <button 
            /*onClick={this.adicionarTCCInput}*/
            type='submit' > 
            add Via Input 
            </button>

            </form>

         </div>
        


      </div>

    );
  }


}

export default App;
