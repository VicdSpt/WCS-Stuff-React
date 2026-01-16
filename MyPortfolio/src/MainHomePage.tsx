import Hero from "./components/Hero";
import About from "./components/About";
import Quotes from "./components/Quotes";
import Services from "./components/Services";

function MainHomePage() {


  return (
    <div className="container mx-auto py-20">
      <Hero />
      <About />
      <Quotes />
      <Services />
    </div>
  );
}

export default MainHomePage;
