import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Logo animado */}
        <img src={logo} className="App-logo" alt="React Logo" />

        {/* Texto principal */}
        <p>
          Edite o arquivo <code>src/App.js</code> e salve para recarregar a página.
        </p>

        {/* Link para documentação do React */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          title="Acesse a documentação oficial do React"
        >
          Aprenda React
        </a>
      </header>
    </div>
  );
}

export default App;
