import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandsBar from "./components/BrandsBar";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/suscribe";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandsBar />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;