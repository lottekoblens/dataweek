import './App.css';
import TekstTop from './components/CTAOnderzoek'
import TrainAnimation from './components/TrainAnimation';
import Inleiding from './components/Inleiding'
import Footer from './components/Footer'

function Home() {
  return (
    <div className="App">
      <Inleiding />
      <Footer />
    </div>
  );
}

export default Home;
