import './App.css';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './components/Dashboard';
import Editor2 from './components/Editor2';
import Terminal2 from './components/Terminal2';


const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App({store}) {
  const script = store((state) => state.script);
  const setScript = store((state) => state.setScript);
  const page = store((state) => state.page);
  const setPage = store((state) => state.setPage);

  const cowScript  = {
    sleep: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
      <Grid container spacing={2} style={{height: '100%'}}>
        <Grid item xs={2}>
          <Button onClick={() => setPage('dashboard')} width="100%">Dashboard</Button><br />
          <Button onClick={() => setPage('editor')} width="100%">Editor</Button><br />
          <Button onClick={() => setPage('terminal')} width="100%">Terminal</Button><br />
        </Grid>
        <Grid item xs={10}>
          {page === 'dashboard' && <Dashboard store={store}/>}
          {page === 'editor' && <Editor2 store={store} />}
          {page === 'terminal' && <Terminal2 store={store} />}
        </Grid>
      </Grid>
      

      {/* <div>
        bears: {bears}
        <Button onClick={increasePopulation}>increasePopulation</Button>
        <Button onClick={() => eval(script)(cowScript)}>eval</Button>
        
      </div>
      <Editor value={script} onChange={setScript} theme="vs-dark" height={'50vh'} defaultLanguage="javascript" />
      <div style={{display: 'inline-block', height: '300px', width: '100%'}}>
        <Terminal prefix="" theme={Terminal.Themes.DARK} />
      </div> */}
      
      
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
    </div></ThemeProvider>
  );
}

export default App;
