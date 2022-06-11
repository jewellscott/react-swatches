import React from 'react'

const Swatch = ({ swatch, deleteSwatch }) => {
  return (
    <li className="swatch">
    <div className="gradient-swatch" style={{
      background:`linear-gradient(355deg, #fff, ${swatch.hex})`
    }}></div>
    <h2 className="paint-name">{swatch.name}</h2>
    <p className="pigment">{swatch.pigment}</p>
    <p className="brand">{swatch.brand}</p>
    <button className="btn" onClick={() => deleteSwatch(swatch)}>Delete</button>
  </li>
  )
}

export default Swatch