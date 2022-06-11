import React from 'react'

const Form = ({ formData, setFormData, handleSubmit}) => {
  return (
    <form className="addSwatch" onSubmit={handleSubmit}>
    <div className="inputs">
      <label htmlFor="name">Name</label>
    <input 
      value={formData.name} 
      onChange={(e) => setFormData({...formData, name: e.target.value})} 
      type="text" name="name" id="name"/>

    <label htmlFor="pigment">Pigment</label>
    <input 
      value={formData.pigment}
      onChange={(e) => setFormData({...formData, pigment: e.target.value})}  
      type="text" name="pigment" id="pigment"/>

    <label htmlFor="brand">Brand</label>
    <input 
      value={formData.brand} 
      onChange={(e) => setFormData({...formData, brand: e.target.value})} 
      type="text" name="brand" id="brand"/>

    <label htmlFor="hex">Hex</label>
    <input 
      value={formData.hex}
      onChange={(e) => setFormData({...formData, hex: e.target.value})} 
      type="text" name="hex" id="hex"/>
    </div>
    <input type="submit" value="Add new swatch" className="btn"/>
  </form>
  )
}

export default Form