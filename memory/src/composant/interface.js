import React from 'react'
import './interface.css'

const lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const Interface =  ({ bouton, feedback, onClick }) => (
    lettres.split("").map((character, index) => (console.log(character + " | " + index))
))


export default Interface