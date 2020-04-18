import React, { Component } from 'react'
import Header from './composant/Header'
import Interface from './composant/Interface'


class App extends Component {
  state = {
    lettres : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    mot_a_trouver : "roger",
    indices : [],
  } 
 
  constructor(props) {
    super(props)
    this.handleBoutonclick = this.handleBoutonclick.bind(this)
    this.trouvePasTrouve = this.trouvePasTrouve.bind(this)
  }

  render() {
    var lettres = this.state.lettres
    var mot_a_trouver = this.state.mot_a_trouver
    var indices = this.state.indices
    console.log(typeof indices)
    return (
      // <Header/>
      <Interface
      lettres = {lettres}
      handleBoutonclick = {this.handleBoutonclick}
      mot_a_afficher = {this.trouvePasTrouve(mot_a_trouver, indices)}
      /> 
    )
  }
  
  trouvePasTrouve(mot_a_trouver, indices) {
    var mot_a_afficher = [];
    mot_a_trouver.split("").map((character, index) => {
      console.log(character + "_" + index);
      console.log(indices.includes(index));
      console.log(indices);
    })
  }

  handleBoutonclick(bouton) {
    var indices = this.state.indices
    var mot_a_trouver = this.state.mot_a_trouver
    var mot_local = mot_a_trouver.toLowerCase()
    console.log(typeof indices)

    bouton = bouton.toLowerCase()
    for (var i = 0; i < mot_local.length; i++) {
        if (mot_local[i] === bouton) { 
            indices.push(i);
        }
    }
    this.setState({ indices: indices})
  }
}

export default App