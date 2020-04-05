import React from 'react'

import './Bouton.css'

const Bouton = ({ bouton, onClick }) => (
    <div className="lettre" onClick={() => onClick(bouton)} >
    
        {bouton}
        
    </div>
  )
export default Bouton