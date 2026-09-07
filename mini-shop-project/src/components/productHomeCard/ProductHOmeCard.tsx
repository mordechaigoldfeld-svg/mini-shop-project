import React, { useContext } from 'react'
import { type product } from '../../store/useProductsStore'
import { useNavigate } from 'react-router'
import useFavoriteSelected from '../../favoriteProducts/FavoriteSelected'
import "./productHomeCard.css"
import { ThemeContext } from '../../context/ThemeContext'



type productProps = {

    product: product
}



export default function ProductHOmeCard(props: productProps) {

    const { product } = props
    const navigate = useNavigate()
    const {handleClick,isFavorite} = useFavoriteSelected(product.id)
    const {theme} =useContext(ThemeContext)

    return (
        <div className={`card ${theme}`}>
            <div onClick={() => navigate(`/productDetails/${product.id}`)}>
                <img className='productImg' src={product.image} alt="" />
                <div className='content'>
                <h3 className={`title ${theme}`}>{product.title}</h3>
                <p className='price'>${product.price}</p>
                </div>
            </div>
            <button className='favorite' onClick={handleClick}>{isFavorite?"❤️":"🤍"}</button>
        </div>
    )
}
