import { Route, Routes } from 'react-router'
import './App.css'
import Favorites from './pages/favorites/Favorites'
import Home from './pages/home/Home'
import ProductDetails from './pages/productDetails/ProductDetails'
import Layout from './components/layout/Layout'
import { useProducts } from './hooks/useFetch'
import Spinner from './components/spiner/Spiner'




function App() {

  const { loading, error, products } = useProducts()

  if (loading) return <Spinner/>
  if (error) return <p>error{error}</p>
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/productDetails/:id' element={<ProductDetails />} />
        </Route>
        <Route path='*' element={"page not found"} />
      </Routes>

    </>
  )
}

export default App
