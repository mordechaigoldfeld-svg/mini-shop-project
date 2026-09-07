import { useNavigate, useParams } from "react-router"
import { useFetch } from "../../hooks/useFetch"
import FavoriteSelected from "../../favoriteProducts/FavoriteSelected"
import Spinner from "../spiner/Spiner"
import useFavoriteSelected from "../../favoriteProducts/FavoriteSelected"
import "./ProductDetails.card.css"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export default function ProductDetailsCard() {

  const {theme,} = useContext(ThemeContext)

  const { id } = useParams()

  const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`)

  const navigate = useNavigate()

  const { handleClick, isFavorite } = useFavoriteSelected(Number(id))

  if (loading) return <Spinner />

  if (error) return <p>error{error}</p>

  if (!data) return <p>product not found</p>

  console.log(data);

  // const {isFavorite,handleClick} = FavoriteSelected(id)



  return (


    <div className={`detailsCard ${theme}`}>
      <img src={data.image} alt="image" />
      <div className="text">
        <h1>{data.title}</h1>
        <p>{data.category}</p>
        <h3>$ {data.price}</h3>
        <p>{data.description}</p>
        <div className="buttons">
          <button className="but" onClick={handleClick}>{isFavorite ? "❤️remove favorite" : "🤍add to favorite"}</button>
          <button className="but" onClick={() => navigate('/')}>← back to products</button>
        </div>
      </div>



    </div>
  )
}
