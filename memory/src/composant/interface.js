import React from 'react'
import './Interface.css'
import Bouton from './Bouton'

const lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const Interface =  () => (
    lettres.split("").map((character, index) => 
    (
        <Bouton
        bouton={character}
        key={index}
        onClick={null}
        />
    )
))


export default Interface