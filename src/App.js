import { useState } from 'react';
import './App.css';
import { Editor } from '@monaco-editor/react';

function App({store}) {
  const [value, setValue] = useState('// some comment 2');
  const bears = store((state) => state.bears);
  const increasePopulation = store((state) => state.increasePopulation);
  return (
    <div className="App">
      <div>
        bears: {bears}
        <button onClick={increasePopulation}>increasePopulation</button>
        <button onClick={() => eval(value)}>eval</button>
      </div>
      <Editor value={value} onChange={setValue} theme="vs-dark" height={'100vh'} defaultLanguage="javascript" defaultValue="// some comment" />
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bla
        </a>
      </header> */}
    </div>
  );
}

export default App;
