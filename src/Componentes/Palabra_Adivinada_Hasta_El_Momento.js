import React, { Component } from 'react';
import './Palabra_Adivinada_Hasta_El_Momento.css';

class Palabra_Adivinada_Hasta_El_Momento extends Component{
  constructor(props){
    super(props);

 
  }

  
render() {
  return (
      <p id = "palabra-adivinada-hasta-el-momento">{this.props.Palabra_Adivinada_Hasta_El_Momento}</p>
    );
  }
}

export default Palabra_Adivinada_Hasta_El_Momento; 
