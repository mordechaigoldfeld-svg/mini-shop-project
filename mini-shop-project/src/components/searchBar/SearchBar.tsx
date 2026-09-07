import { useEffect, useRef } from "react"
import { useProductsStore, type product } from "../../store/useProductsStore"
import "./SearchBar.css"

export default function SearchBar() {

    
    const inputFocus = useRef<HTMLInputElement>(null)

    const products = useProductsStore(s=>s.products)

    const setSearched = useProductsStore(s=>s.setSearch)

    const serach = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const value:string = event.target.value;
        const fondProduct = products.filter((p:product)=>p.title.toLocaleLowerCase().includes(value))
        
        setSearched(fondProduct)
    }

    useEffect(()=>{
        inputFocus.current?.focus()
    },[])


  return (
    <div >
        <input className="searchStyle" type="text" placeholder="🔍search..." onChange={serach} ref={inputFocus} />
    </div>
  )
}


