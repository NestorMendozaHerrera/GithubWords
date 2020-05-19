import React, { Component } from 'react';
import "./Botonera.css";

class Botonera extends Component{
  constructor(props){
    super(props);

    this.getBotonera = this.getBotonera.bind(this);
  }

  getBotonera(){
    return this.props.botones.map((boton, Index)=>(

    <button className={boton.estado}
            key={Index}
            disabled = {boton.estado != "no-pulsado" ? true : false}
            onClick = {() => this.props.Se_Pulso_Boton(Index)}>
            
      {boton.letra}
    </button>

    ));
  }
render() {
  return (
    <div id = "Botonera">
       {this.getBotonera()}
    </div>
    );
  }
}

export default Botonera; 
