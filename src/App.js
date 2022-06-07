import './App.css';
import { paints } from './paints';
import watercolor from './assets/watercolor.png'
import { useState } from 'react';

function App() {

  const [swatches, setSwatches] = useState(paints);

  const paintSwatchesList = swatches.map((swatch, name) => (
    <li className="swatch" key={name}>
      <div className="gradient-swatch" style={{
        background:`linear-gradient(175deg, #fff, ${swatch.hex})`
      }}></div>
      <h2 className="paint-name">{swatch.name}</h2>
      <p className="pigment">{swatch.pigment}</p>
      <p className="brand">{swatch.brand}</p>
      <button className="delete" onClick={() => deleteSwatch(swatch)}>Delete</button>
    </li>
  ));

  const deleteSwatch = (swatchKey) => {
    const newSwatches = swatches.filter(swatch => swatch !== swatchKey)
    setSwatches(newSwatches);
  }

  // const addSwatch = () => {
  // }

  return (
    <div className="App">
      <header className="header-container">
        <h1>Swatchery</h1>
        <img className="watercolor" src={watercolor} alt=""></img>
      </header>
      <main>
        <ul className="swatches">
          {paintSwatchesList}
        </ul>
      </main>
    </div>
  );
}

export default App;
