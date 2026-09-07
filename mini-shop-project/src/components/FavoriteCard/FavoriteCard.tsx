import { useNavigate } from "react-router"
import { useProductsStore } from "../../store/useProductsStore"
import { type product } from "../../store/useProductsStore"
import useFavoriteSelected from "../../favoriteProducts/FavoriteSelected"
import "./favoriteCard.css"

type productProps = {

    favorite: product
}


export default function FavoriteCard(props: productProps) {

    const { favorite } = props
    const navigate = useNavigate()
    const { handleClick, isFavorite } = useFavoriteSelected(favorite.id)
    console.log(favorite);


    return (
        <div className="favoriteCard">
            <div onClick={() => navigate(`/productDetails/${favorite.id}`)}>
                <img className="favoriteImg" src={favorite.image} alt="" />
                <div className="contentf">
                <h3 className="titlef">{favorite.title}</h3>
                <p className="pricef">{favorite.price}</p>
                </div>
            </div>
            <button className="remove" onClick={handleClick}>{isFavorite ? "remove" : "like"}</button>
        </div>
    )
}
