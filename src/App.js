import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main1 from './Components/Main1/Main1';
import Main2 from './Components/Main1/Main2';
import Main3 from './Components/Main1/Main3';
import Main4 from './Components/Main1/Main4';
import Imagegrid from './Components/ImageGrid/Imagegrid';
import Carousel from './Components/Slide/Carousel';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Main1 />
      <Main2/>
      <Main3/>
      <Main4/>
      <Imagegrid/>
      <Carousel/> 
    <Footer/>
    </>
  );
}

export default App;
