import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { GloablStyles } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { ProductData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <GloablStyles />
      <Hero />
      <Products heading="Choose your favourites" data={ProductData} />
      <Feature />
      <Products
        heading="Choose your favourites sweet dish"
        data={productDataTwo}
      />
      <Footer />
    </Router>
  );
}

export default App;
