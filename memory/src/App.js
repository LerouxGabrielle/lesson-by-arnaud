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
  }

  render() {
    var lettres = this.state.lettres
    return (
        // <Header/>
        <Interface
        lettres = {lettres} 
        />
      
    )
  }
  

   handleBoutonclick(bouton) {
    var indices = this.state.indices
    var mot_a_trouver = this.state.mot_a_trouver
    var mot_local = mot_a_trouver.toLowerCase()

    bouton = bouton.toLowerCase()
    for (var i = 0; i < mot_local.length; i++) {
        if (mot_local[i] === bouton) { 
            indices.push(i);

        }
    }
    console.log(indices)
  }
  

}

export default App