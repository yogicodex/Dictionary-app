import read from "./images/read.svg";
import Dictionary from "./Dictionary";
import DarkMode from "./DarkMode";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">

        <header className="App-header">
          <DarkMode />
          <img src={read} alt="Reading woman drawing" className="img-fluid logo" />
          <h1>Dictionary</h1>
        </header>

        <main>
          <Dictionary />
        </main>

        <footer className="mt-4 footer">
         
        </footer>
      </div>
    </div>
  );
}
