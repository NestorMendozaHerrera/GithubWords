import React, { Component } from 'react';
import Imagen from './Imagen';
import Botonera from './Botonera';
import Palabra_Adivinada_Hasta_El_Momento from './Palabra_Adivinada_Hasta_El_Momento';



class Ahorcado extends Component{
  constructor(props){
    super(props);
    
    this.getBotoneraVacia = this.getBotoneraVacia.bind(this);
    this.Se_Pulso_Boton = this.Se_Pulso_Boton.bind(this);
    this.getPalabra_Adivinada = this.getPalabra_Adivinada.bind(this);
    this.getPalabra_Adivinada_Hasta_El_Momento = this.getPalabra_Adivinada_Hasta_El_Momento.bind(this);
   

    let Palabra_Adivinada = this.getPalabra_Adivinada();

    this.state={
      numFallos: 0,
      numAciertos: 0,
      Palabra_Adivinada: Palabra_Adivinada,
      palabra_Adivinada_Hasta_El_Momento: this.getPalabra_Adivinada_Hasta_El_Momento(Palabra_Adivinada),
      botones: this.getBotoneraVacia()
    };
  }
  getPalabra_Adivinada_Hasta_El_Momento(palabra){
    let guiones = "";
    for(let i = 0; i  < palabra.length  ; i++){
      guiones += "-";
      
    }
    return guiones;
  }

  getPalabra_Adivinada(){
    let palabras = ["CARACOLA", "ESPECIMEN", "PERSONA"];
    let Num_Aleatorio = Math.floor(Math.random()*palabras.length);
    let palabra = palabras[Num_Aleatorio];
    return palabra;
  }

  getBotoneraVacia(){
    let letras = [
        "A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N",
        "Ñ", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z"
    ];

    let botones = [];

    botones = letras.map((l)=> ({letra: l, estado: "no-pulsado"}));

    return botones;
  }

Se_Pulso_Boton(i){
  let letra = this.state.botones[i].letra;
  let botonesAux = this.state.botones;
  
  if(this.Hay_Acierto(letra)){
    botonesAux[i].estado = "pulsado-acertado";
    this.setState((prevState) => ({
      botones: botonesAux
    }));
  } else{
    botonesAux[i].estado = "pulsado-no-acertado";
    this.setState((prevState) => ({
     numFallos: prevState.numFallos + 1,
      botones: botonesAux
    }));
  }
}

componentDidUpdate(){
  if(this.state.numAciertos == this.state.Palabra_Adivinada.length){
    alert("GANASTE, FELICIDADES, PULSA ACEPTAR PARA SEGUIR JUGANDO.");
    this.reinicializar();
  }
  if(this.state.numFallos == 7){
    alert("PERDISTE," + " LA PALABRA ERA" + " " + this.state.Palabra_Adivinada + "," + " PULSA ACEPTAR PARA SEGUIR JUGANDO.");
    this.reinicializar();
  }
}

reinicializar(){
  let Palabra_Adivinada = this.getPalabra_Adivinada();

    this.setState({
        numFallos: 0,
        numAciertos: 0,
        Palabra_Adivinada: Palabra_Adivinada,
        palabra_Adivinada_Hasta_El_Momento: this.getPalabra_Adivinada_Hasta_El_Momento(Palabra_Adivinada),
        botones: this.getBotoneraVacia()
      });
}

Hay_Acierto(letra){
  let acierto = false;
  for(let i = 0; i < this.state.Palabra_Adivinada.length; i++){
    if(this.state.Palabra_Adivinada.charAt(i) === letra){
      this.setState((prevState) => ({
        numAciertos: (prevState.numAciertos) + 1,
        palabra_Adivinada_Hasta_El_Momento: prevState.palabra_Adivinada_Hasta_El_Momento.substr(0, i) +
        letra + prevState.palabra_Adivinada_Hasta_El_Momento.substr(i + 1)
      }));
      acierto = true;
    }
    
  }
  return acierto;
}
render() {
  return (
    <div>
        <Imagen numFallos={this.state.numFallos}/>

        <Palabra_Adivinada_Hasta_El_Momento
        Palabra_Adivinada_Hasta_El_Momento = {this.state.palabra_Adivinada_Hasta_El_Momento}/>

        <Botonera Se_Pulso_Boton = {(i) => this.Se_Pulso_Boton(i)} botones = {this.state.botones}/>

        

       </div>
    );
  }
} 
      
    

export default Ahorcado;
