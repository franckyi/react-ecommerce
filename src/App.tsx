import './App.css';
import Home from './views/Home';
import { useEffect, useState, useContext } from "react";
import { Product } from './types/product';
import API from './api/api-variables';
import { FiltersContext, initialState } from './model/filterContext'
import Header from './components/common/Header';
import { CartContext } from './model/cartContext';

function App() {
  const [filters, setFilters] = useState(useContext(FiltersContext));
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(useContext(CartContext));

  const handleResetFilters = () => {
    setFilters(initialState)
  }

  useEffect(() => {
    fetch(`${API.URL}/${API.PRODUCTS}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setProducts(json)
        setLoading(false)
      });
  }, [filters])

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <h5>{JSON.stringify(filters)}</h5>
        <h5>{JSON.stringify(cart)}</h5>
        <Home products={products} handleResetFilters={handleResetFilters} loading={loading} setLoading={setLoading} />
      </CartContext.Provider>
    </FiltersContext.Provider>
  )
}

export default App
