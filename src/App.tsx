import './App.css';
import Home from './views/Home';
import { useEffect, useState } from "react";
import { Product } from './types/product';
import API from './api/api-variables';
import { useContext } from 'react';
import { QueryContext } from './model/filterContext'
import Header from './components/common/Header';

function App() {
  const [query, setQuery] = useState(useContext(QueryContext));
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`${API.URL}/${API.PRODUCTS}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setProducts(json)
      })
  }, [])

  return (
    <QueryContext.Provider value={query}>
      <Header setQuery={setQuery} />
      <Home products={products} query={query} setQuery={setQuery} />
    </QueryContext.Provider>
  )
}

export default App
