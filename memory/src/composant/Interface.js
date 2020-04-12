import React from 'react'
import './Interface.css'
import Bouton from './Bouton'

const mot_a_trouver = "roger"

const lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const Interface = () => (
    lettres.split("").map((character, index) =>
        (
            <Bouton
                bouton={character}
                key={index}
                onClick={handleBoutonclick}
            />
        )
    ))

    function handleBoutonclick(bouton) {
        var indices = []
        var mot_local = mot_a_trouver.toLowerCase()
    
        bouton = bouton.toLowerCase()
        for (var i = 0; i < mot_local.length; i++) {
            if (mot_local[i] === bouton) { 
                indices.push(i);
    
            }
        }
        console.log(indices)
    }    

// Compter le nombre de "true" donner par indexOf, si ce nombre est égale au nombre de caractère de 
//mot_a_trouver alors on considère le jeu comme gagner.
//pour éviter que une lettre "true" soit comptée deux fois alors il faut bloquer le bouton correspondant.


export default Interface