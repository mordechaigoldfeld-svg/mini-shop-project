import { Link, useNavigate } from "react-router"
import "./Header.css"
import { useProductsStore } from "../../store/useProductsStore"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export default function Header() {
  const navigate = useNavigate()
  const favorites =useProductsStore(s=>s.favorites)
  const {theme,themeToogle} = useContext(ThemeContext)
  return (
    <div className='HeaderClass'>
      <img className="imgl" src="https://thumbs.dreamstime.com/b/shopping-logo-design-template-bag-icon-designs-134743586.jpg" alt="logo" />
      <div className="links">
      <Link className="link" to={'/favorites'}>favorites <span>({favorites.length})</span></Link>
      <Link className="link" to={'/'}>home</Link>   
      <button className={`ligthButton ${theme}`} onClick={themeToogle}>{theme === 'ligth'?"🔅":"🌙"}</button>
      </div>
    </div>
  )
}
