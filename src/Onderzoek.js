import './App.css';
import TrainAnimation from './components/TrainAnimation';
import Footer from './components/Footer';
import Gif from './components/Gif';
import Conclusie from './components/conclusie';
import Bronnen from './components/Bronnen';

function test() {
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

export default test;
