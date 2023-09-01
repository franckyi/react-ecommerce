import './App.css';
import Home from './views/Home';
import { useEffect, useState } from "react";
import { Product } from './types/product';
import API from './api/api-variables';

function App() {
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
    <>
      <Home products={products} />
    </>
  )
}

export default App
