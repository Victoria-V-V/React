import './App.css';

import SuperheroesJson from './assets/components/Superheroes/Superheroes.json'
import Superheroes from './assets/components/Superheroes/Superheroes.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">Топ-10 супергероев</header>
      <div className='superheroesContent'>
        {
          SuperheroesJson.map((superhero) =>
            <Superheroes superhero={superhero} key={superhero.name}></Superheroes>
          )
        }
      </div>
    </div>
  );
}

export default App;
