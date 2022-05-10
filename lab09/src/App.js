import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container py-5">
        <h1 class="text-center py-3">Lista de Productos</h1>
        <table class="table table-hover">
            <thead class="table-primary text-center"><tr><th>Codigo</th><th>Descripcion</th><th>Precio</th><th>Borrar</th></tr></thead>
            <tbody>
              {this.state.articulos.map(elemento => {
                return (
                  <tr key={elemento.codigo}>
                      <td>
                        {elemento.codigo}
                      </td>
                      <td>
                        {elemento.descripcion}
                      </td>
                      <td>
                        {elemento.precio}
                      </td>
                      <td class="text-center">
                        <button onClick={()=>this.borrar(elemento.codigo)} class="btn btn-primary">Borrar</button>
                      </td>
                  </tr>
                )
              })}
            </tbody>
        </table>
      </div>
    );
  }
  borrar(cod){
    var temp = this.state.articulos.filter((el)=>el.codigo !==cod)
    this.setState({
      articulos:temp
    })
  }
  constructor(props){
    super(props)
    this.state={
      articulos:[{
        codigo:1,
        descripcion:'coca-cola',
        precio:2.50
      },{
        codigo:2,
        descripcion:'inka-cola',
        precio:2.20
      },{
        codigo:3,
        descripcion:'fanta',
        precio:1.70
      }]
    }
    this.borrar=this.borrar.bind(this);
  }
}

export default App;
