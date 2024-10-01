import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import OurJob from './components/OurJob';
import Scroll from './components/Scroll';
import Us from './components/Us';
import Vision from './components/Vision';
import Waitlist from './components/Waitlist';

function App() {
  return (
    <>
      <Header />
      <div className="gradiant">
        <Hero />
        <Scroll />
        <Us />
      </div>

      <Features />
      <Vision />
      <OurJob />
      <Waitlist />
      <Footer />
    </>
  );
}

export default App;
