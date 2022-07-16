import './App.scss';

import TariffJson from './components/Tariff/Tariff.json';
import Tariff from './components/Tariff/Tariff.jsx';

function App() {
  return (
    <div className="App">
      <div className='tariffContent'>
        {
          TariffJson.map((tariff) =>
            <Tariff tariff={tariff} key={tariff.title}></Tariff>
          )
        }
      </div>
    </div >

  );
}

export default App;
