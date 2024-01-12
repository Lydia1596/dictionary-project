import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <Dictionary />
        <footer>
          This project was coded by Lydia Prentice and is{" "}
          <a
            href="https://github.com/Lydia1596/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-Sourced On GitHub
          </a>
          .
          <br />
        </footer>
      </div>
    </div>
  );
}

export default App;
