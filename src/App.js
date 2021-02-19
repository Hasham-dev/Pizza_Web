import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { GloablStyles } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { ProductData } from "./components/Products/data";
function App() {
  return (
    <Router>
      <GloablStyles />
      <Hero />
      <Products heading="Choose your favourites" data={ProductData} />
    </Router>
  );
}

export default App;
