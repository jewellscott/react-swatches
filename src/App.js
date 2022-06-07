import './App.css';
import { paints } from './paints';
import watercolor from './assets/watercolor.png'

function App() {

  const paintSwatches = paints.map(paint => (
    <li className="swatch">
      <div className="gradient-swatch" style={{
        background:`linear-gradient(175deg, #fff, ${paint.hex})`
      }}></div>
      <h2 className="paint-name">{paint.name}</h2>
      <p className="pigment">{paint.pigment}</p>
      <p className="brand">{paint.brand}</p>
      <button className="delete">Delete</button>
    </li>
  ));

  return (
    <div className="App">
      <header className="header-container">
        <h1>Swatchery</h1>
        <img className="watercolor" src={watercolor} alt=""></img>
      </header>
      <main>
        <ul className="swatches">
          {paintSwatches}
        </ul>
      </main>
    </div>
  );
}

export default App;
