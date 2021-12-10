import './App.css';
import TrainAnimation from './components/TrainAnimation';
import Footer from './components/Footer';
import Gif from './components/Gif';
import Conclusie from './components/Conclusie';
import Bronnen from './components/Bronnen';

function Onderzoek() {
  return (
    <div className="App">
      <Gif />
      <TrainAnimation />
      <Conclusie />
      <Bronnen />
      <Footer />
    </div>
  );
}

export default Onderzoek;
