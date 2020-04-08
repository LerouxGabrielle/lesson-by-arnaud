import React from 'react'

import './Bouton.css'

const Bouton = ({ bouton, onClick }) => (
    <div className="lettre" onClick={() => onClick(bouton)} >
      <p>
          {bouton}
      </p>
        
    </div>
  )
export default Bouton