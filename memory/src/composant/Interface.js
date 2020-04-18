import React from 'react'
import './Interface.css'
import Bouton from './Bouton'

const Interface = ({lettres}) => (
    lettres.split("").map((character, index) =>
        (
            <Bouton
                bouton={character}
                key={index}
                onClick={handleBoutonclick}
            />
        )
    ))

  

// Compter le nombre de "true" donner par indexOf, si ce nombre est égale au nombre de caractère de 
//mot_a_trouver alors on considère le jeu comme gagner.
//pour éviter que une lettre "true" soit comptée deux fois alors il faut bloquer le bouton correspondant.

export default Interface