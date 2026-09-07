import React from 'react'
import { useProducts } from '../../hooks/useFetch'
import { useProductsStore } from '../../store/useProductsStore'
import ProductHOmeCard from '../productHomeCard/ProductHOmeCard'
import "./ProductList.css"


export default function ProductList() {

    const products = useProductsStore(s => s.products)

    const searched = useProductsStore(s=>s.searched)

    const displayedProducts = searched.length === 0 ? products : searched;

    return (
        
        <div className='listGrid'>
            {displayedProducts.map((p)=>(

                <ProductHOmeCard key={p.id} product={p}/>
            ))}
        </div>
    )
}
