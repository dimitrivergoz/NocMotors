import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Carousel  from './components/Carousel';
import InfoContact from './components/InfoContact';
import Gallery from './components/Gallery';
function App() {
  return (
    <>
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <Navbar/>
        <Hero />
        <Services />
        <Carousel />
        <Gallery/>
        <InfoContact />


        <div className="border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between text-center px-5 py-2 text-sm text-gray-100">
            <div className="mb-4 space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
                <a href="#" className="mx-2.5">Mentions légales</a>
                <a href="#" className="mx-2.5">Credits</a>
            </div>
            <p>&copy; Noc Motors 2022</p>
        </div>


    </>
  );
}

export default App;
