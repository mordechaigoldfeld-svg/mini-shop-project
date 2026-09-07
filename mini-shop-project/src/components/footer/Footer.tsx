import { Link } from "react-router"
import "./Footer.css"


export default function Footer() {
  return (
    <div className='footerClass'>
      <div className="linksf">
      <Link className="linkf" to={'/favorites'}>favorites</Link>
      <Link className="linkf" to={'/'}>home</Link>
      </div>  
    </div>
  )
}
