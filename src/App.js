import './App.css';

// import pdf from './assets/DOHRNII - Whitepaper.pdf'
import pdf from './assets/sample.pdf';

function App() {
  return (
    <div className="App">
      <a
        className="nav_whitepaper"
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhitePaper
      </a>
    </div>
  );
}

export default App;
