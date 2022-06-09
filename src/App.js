import './App.css';
import { paints } from './paints';
// import watercolor from './assets/watercolor.png'
import { useState } from 'react';

function App() {

  const [swatches, setSwatches] = useState(paints);

  const paintSwatchesList = swatches.map((swatch, name) => (
    <li className="swatch" key={name}>
      <div className="gradient-swatch" style={{
        background:`linear-gradient(355deg, #fff, ${swatch.hex})`
      }}></div>
      <h2 className="paint-name">{swatch.name}</h2>
      <p className="pigment">{swatch.pigment}</p>
      <p className="brand">{swatch.brand}</p>
      <button className="btn" onClick={() => deleteSwatch(swatch)}>Delete</button>
    </li>
  ));

  const deleteSwatch = (swatchKey) => {
    const newSwatches = swatches.filter(swatch => swatch !== swatchKey)
    setSwatches(newSwatches);
  }

  // Add Swatch Form

  const [formData, setFormData] = useState({
    name: "",
    pigment: "",
    brand: "",
    hex: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateSwatches = [
      formData,
      ...swatches
    ]

    setSwatches(updateSwatches);
  }
 
  return (
    <div className="App">
      <header className="header-container">
        <h1>watercolors.</h1>
        {/* <img className="watercolor" src={watercolor} alt=""></img> */}
      </header>
      <main>
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
        <ul className="swatches">
          {paintSwatchesList}
        </ul>
      </main>
    </div>
  );
}

export default App;
