import './App.css';
import { useContext, useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import { Product } from './types/product';
import API from './api/api-variables';
import About from './views/About';
import { FiltersContext } from './context/filterContext'
import { CartContextProvider } from './context/cartContext';
import { TFilters } from './types/filters';
import { filterInitialState } from './model/filtersInitialState';

function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<TFilters>(useContext(FiltersContext));

  const handleResetFilters = (): void => {
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
          <Route path='/' element={<Home allProducts={allProducts} products={products} loading={loading} handleResetFilters={handleResetFilters} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </FiltersContext.Provider>
    </CartContextProvider>
  )
}

export default App
