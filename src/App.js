import React from 'react';
import Jsona from 'jsona';
import './App.css';

const dataFormatter = new Jsona();

function App() {
  const [value, setValue] = React.useState('');
  const [convert, setConvert] = React.useState('');

  return (
    <div className="App">
      <div className="App-header">
        <textarea onChange={e => setValue(e.target.value)} value={value} className="App-input" />
        <button onClick={() => setConvert(dataFormatter.deserialize(value))}> Normalize </button>
        <div className="App-convert">
          {JSON.stringify(convert, null, 2)}
        </div>
      </div>
    </div>
  );
}

export default App;
