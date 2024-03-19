import logo from './logo.svg';
import icon from './icon.svg';
import cover from './cover.png';

import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className="App-logo">
          <img src={logo}/>
        </div>
        <div>
          <div className="App-user">
            <span>
              {"hello@catalog.ac"}
              <img src={icon} className="Icon-user"/>
            </span>
          </div>
        </div>
      </header>

      <div className="App-content">
        <div>
          <h2>The future of music licensing</h2>
        </div>
        <div className="App-cover">
          <img src={cover}/>
        </div>
      </div>

      <footer className="App-footer">
        <div>
        <span className="App-text-footer">
            {"The members-only top-tier music supervision platform"}
        </span>
        <span className="App-text-footer">
            {"Coming soon"}
        </span> 
        <span className="App-text-footer">
            {"A hyper-curated sync marketplace with the best labels"}
        </span> 
        </div>
      </footer>

    </div>
  );
}

export default App;
