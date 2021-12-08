import './App.css';
import TrainAnimation from './components/TrainAnimation';
import TopOnderzoek from './components/TopOnderzoek';
import Footer from './components/Footer';
import Gif from './components/Gif';
import Conclusie from './components/Conclusie';

function test() {
  return (
    <div className="App">
      <Gif />
      <TrainAnimation />
      <Conclusie />
      <Footer />
    </div>
  );
}

export default test;
