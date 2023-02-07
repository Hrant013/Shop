import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
// import Product from './components/main/Product';
import Products from './components/main/Products';


function App() {
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Header cart={cart} setCart={setCart} />
      <Products setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;
