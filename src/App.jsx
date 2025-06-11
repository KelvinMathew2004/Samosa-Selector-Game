import './App.css';
import { useState } from 'react';
import samosa from './assets/samosa.png';

const App = () => {

  const [count, setCount] = useState(0);
  const [multiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src={samosa} onClick={updateCount} />
      </div>
    </div>
  )
}

export default App