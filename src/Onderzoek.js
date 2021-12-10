import './App.css';
import TrainAnimation from './components/TrainAnimation';
import Footer from './components/Footer';
import Gif from './components/Gif';
import Conclusie from './components/Conclusie';
import Piechart from './components/piechart';
import Pie from './components/Pie';

function test() {
  return (
    <div className="App">
      <Gif />
      <TrainAnimation />
      <Piechart />
      <Pie />
      <Footer />
    </div>
  );
}

export default test;
