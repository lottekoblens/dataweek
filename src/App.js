import './App.css';
import Navbar from './components/Navbar';
import TekstTop from './components/TekstTop'
import TrainAnimation from './components/TrainAnimation';
import Dataset from './components/DataSet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <TekstTop />
      <TrainAnimation />
      <Dataset />
    </div>
  );
}

export default App;
