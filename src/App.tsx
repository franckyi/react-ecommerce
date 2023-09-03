import './App.css';
import Home from './views/Home';
import { useEffect, useState, useContext } from "react";
import { Product } from './types/product';
import API from './api/api-variables';
import { FiltersContext, initialState } from './model/filterContext'
import Header from './components/common/Header';
import { OrderContext } from './model/orderContext';

function App() {
  const [filters, setFilters] = useState(useContext(FiltersContext));
  const [products, setProducts] = useState<Product[]>([]);
  // const [initialFiltersState, setInitialFiltersState] = useState(initialState);

  const handleResetFilters = () => {
    setFilters(initialState)
  }

  useEffect(() => {
    fetch(`${API.URL}/${API.PRODUCTS}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setProducts(json)
      })
  }, [filters])

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      <Header />
      <h5>{JSON.stringify(filters)}</h5>
      {/* <OrderContext.Provider value={{ order, setOrder }}> */}
      <Home products={products} handleResetFilters={handleResetFilters} />
      {/* </OrderContext.Provider> */}
    </FiltersContext.Provider>
  )
}

export default App
