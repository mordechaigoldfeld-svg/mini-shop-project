import React from 'react'
import FavoriteList from '../../favoriteProducts/FavoriteList'
import { useProductsStore } from '../../store/useProductsStore'
import "./Favorites.css"
export default function Favorites() {



    return (
        <div className='fgrid'>
            <FavoriteList />
        </div>
    )
}
