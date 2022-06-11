import './App.css';
import { paints } from './paints';
// import watercolor from './assets/watercolor.png'
import { useState } from 'react';
import Swatch from './components/Swatch';
import Form from './components/Form';

function App() {

  const [swatches, setSwatches] = useState(paints);


  const deleteSwatch = (swatchKey) => {
    const newSwatches = swatches.filter(swatch => swatch !== swatchKey)
    setSwatches(newSwatches);
  }

  const paintSwatchesList = swatches.map((swatch, index) => (
   <Swatch 
    key={index}
    swatch={swatch}
    deleteSwatch={deleteSwatch}
  />
  ));


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
      </header>
      <main>
       <Form 
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
       />
        <ul className="swatches">
          {paintSwatchesList}
        </ul>
      </main>
    </div>
  );
}

export default App;
