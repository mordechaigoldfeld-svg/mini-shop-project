import React from 'react'
import { useProductsStore } from '../store/useProductsStore'
import FavoriteCard from '../components/FavoriteCard/FavoriteCard'
import "./favoriteList.css"
export default function FavoriteList() {

    const favorites = useProductsStore(s=>s.favorites)
        
    if(favorites.length===0)return <h1>not favories products</h1>
    

  return (
    <div className='favoritegrid'>
      {favorites.map((p)=>(        
        <FavoriteCard key={p.id} favorite={p}/>
      ))}

    </div>
  )
}
