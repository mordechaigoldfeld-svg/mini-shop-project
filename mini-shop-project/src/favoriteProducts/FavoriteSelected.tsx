import { useParams } from "react-router"
import { useProductsStore } from "../store/useProductsStore"



export default function useFavoriteSelected(id:string | number) {
    const products = useProductsStore(s=>s.products)
    // const {id} = useParams
    const product = products.find((p)=> {return p.id===Number(id)})
    const addFavorite = useProductsStore(s=>s.addfavorite)
    const removeFavorite = useProductsStore(s=>s.removeFavorite)
    const isFavorite = useProductsStore((s)=>
    s.favorites.some((fav)=>fav.id === Number(id)))
    
    
    
    const handleClick = ()=>{
        if(isFavorite){
            removeFavorite(id)
        }else{
            if(product){
            addFavorite(product)}
        }
    }
    
  return {
    handleClick,
    isFavorite
  }
}
