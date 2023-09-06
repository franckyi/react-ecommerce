import './App.css';
import { useContext, useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import { Product } from './types/product';
import API from './api/api-variables';
import About from './views/About';
import { FiltersContext, filterInitialState } from './context/filterContext'
import { CartContextProvider } from './context/cartContext';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(useContext(FiltersContext));

  const handleResetFilters = () => {
    setFilters(filterInitialState)
  }

  useEffect(() => {
    fetch(`${API.URL}/${API.PRODUCTS}`)
      .then(response => response.json())
      .then(json => {
        setAllProducts(json)
      });
  }, [])

  useEffect(() => {
    const URL = filters.category === 'All' ?
      `${API.URL}/${API.PRODUCTS}` : `${API.URL}/${API.CATEGORY}/${filters.category}`

    fetch(URL)
      .then(response => response.json())
      .then(json => {
        setProducts(json)
        setLoading(false)
      });
  }, [filters])

  return (
    <CartContextProvider>
      <FiltersContext.Provider value={{ filters, setFilters }}>
        <Routes>
          <Route path='/' element={<Home filters={filters} allProducts={allProducts} products={products} loading={loading} setLoading={setLoading} handleResetFilters={handleResetFilters} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </FiltersContext.Provider>
    </CartContextProvider>
  )
}

export default App
