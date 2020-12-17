import './App.css';
import { datadogLogs } from '@datadog/browser-logs';

datadogLogs.init({
  clientToken: process.env.REACT_APP_SECRET, // Datadog client token
  site: 'datadoghq.com',
  env: 'logs_test',
  forwardErrorsToLogs: false,
  sampleRate: 100,
  silentMultipleInit: true,
})



const logOne=()=>{
  datadogLogs.logger.info('Log #1', { name: 'log 1 sent'});
  console.log('sent log one')
}

const logTwo=()=>{
  datadogLogs.logger.info('Log #2', { name: 'log 2 sent'});
  console.log('sent log two')
}

function App() {
  return (
      <div className="App-header">
      <button onClick={logOne}>send log Numbr one</button>
      <br></br>
      <button onClick={logTwo}>send log Numbr two</button>
      </div>
  );
}

export default App;