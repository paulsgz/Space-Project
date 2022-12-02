import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { NavBar } from './components/Navbar';
import {Projects} from './components/Pictures'
import {HeroSection} from './components/HeroSection';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
function App() {
  window.onbeforeunload = function() {    
    localStorage.clear();
 }
    return (
      <div className='projectBody'>
          <NavBar />
          <HeroSection />
          <Projects />
          <Contact />
        </div>
    );
}
export default App;
