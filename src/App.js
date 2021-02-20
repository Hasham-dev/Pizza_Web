import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { GloablStyles } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { Loader } from "./components/Products/ProductsElement";
import { ProductData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
function App() {
  const updateLoader = () => {
    setTimeout(() => {
      SetLoading(!isLoading);
    }, 2000);
  };

  useEffect(() => {
    updateLoader();
  }, []);
  const [isLoading, SetLoading] = useState(true);

  if (isLoading) {
    return (
      <Loader
        gradientColors={["#e31837", "#ffc598"]}
        shadowColor={"#150f0f"}
        desktopSize={"50px"}
        mobileSize={"80px"}
      />
    );
  }

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
