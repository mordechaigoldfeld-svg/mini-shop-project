import React, { useEffect } from 'react'
import { useProductsStore } from '../../store/useProductsStore'
import { useFetch, useProducts } from '../../hooks/useFetch'
import ProductList from '../../components/productsList/ProductList'
import TopHome from '../../components/topHome/TopHome'
import "./Home.css"


export default function Home() {


  return (
    <div className='mainGrid'>
        <TopHome/>
        <div className='productOverflow'>
        <ProductList/>
        </div>
    </div>
  )
}








// export default function Home() {

//     const products = useProductsStore(s=>s.products)

//     const setProducts = useProductsStore(s=>s.setProducts)

//     const shouldFetch = products.length ===0
    
    
//     const {data,error,loading} = useFetch(
//         shouldFetch? "https://fakestoreapi.com/products":""
//     );

//     useEffect(()=>{
//         if(data && products.length===0){
//             setProducts(data);
//         }
//     },[data,setProducts])


//     if(loading && products.length===0) return <p>loading....</p>
//     if(error && products.length===0) return <p>error{error}</p>
//     console.log(data);
//   return (
//     <div>
//         {products.map((products)=>(
            
//             <p>{products.id}</p>
//         ))}
//     </div>
//   )
// }
