import './App.scss';
import { useState } from 'react';

import TariffJson from './components/Tariff/Tariff.json';
import Tariff from './components/Tariff/Tariff.jsx';

function App() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleClick = (selectedTariff) => {
    setSelectedTariff(selectedTariff);
  }

  return (
    <div className="App">
      <div className='tariffContent'>
        {
          TariffJson.map((tariff) =>
            <Tariff
              {...tariff}
              onClick={handleClick}
              tariff={tariff}
              key={tariff.title}
              isSelected={tariff.title === selectedTariff}>
            </Tariff>
          )
        }
      </div>
    </div >

  );
}

export default App;
