import { useState } from 'react';
import './App.css';
import { Editor } from '@monaco-editor/react';
import Terminal from 'react-bash';


function App({store}) {
  const bears = store((state) => state.bears);
  const increasePopulation = store((state) => state.increasePopulation);
  const script = store((state) => state.script);
  const setScript = store((state) => state.setScript);

  const cowScript  = {
    sleep: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
  };

  return (
    <div className="App">
      <div>
        bears: {bears}
        <button onClick={increasePopulation}>increasePopulation</button>
        <button onClick={() => eval(script)(cowScript)}>eval</button>
        
      </div>
      <Editor value={script} onChange={setScript} theme="vs-dark" height={'50vh'} defaultLanguage="javascript" />
      <div style={{display: 'inline-block', height: '300px', width: '100%'}}>
        <Terminal prefix="" theme={Terminal.Themes.DARK} />
      </div>
      
      
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
