import logo from '../logo.svg';
import '../static/styles/App.css';
import Button from './Button';
import ProfileInput from './ProfileInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
          Hello, Blazing Storm here!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button/>
        <ProfileInput name="Blazing Storm"/>
      </header>
    </div>
  );
}

export default App;
