import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Tour from './components/Tour';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <About />
      <Tour />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
