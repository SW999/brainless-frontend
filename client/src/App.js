import { EditableContent } from "./components/editable-content";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <EditableContent id='first-content-block'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <EditableContent id='second-content-block' wrapperClass='test' wrapperTag='section' />
      </header>
    </div>
  );
}

export default App;
