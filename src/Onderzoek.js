import './App.css';
import TrainAnimation from './components/TrainAnimation';
import Footer from './components/Footer';
import Gif from './components/Gif';
import Conclusie from './components/Conclusie';
import Piechart from './components/piechart';
import Waffle from './components/Waffle'

function test() {
  return (
    <div className="App">
      <Gif />
      <TrainAnimation />
      <Piechart />
      <Footer />
    </div>
  );
}

export default test;
