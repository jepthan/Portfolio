import { Link } from "react-scroll";
import "./Navbar.css"



export default function Navbar() {

  return (
    <nav className='w-full flex h-16 sticky top-0  z-40 align-middle backdrop-blur-lg  bg-zinc-800/60 shadow-lg'>
      <div className="mt-auto mb-auto flex grow">
        <img src="/logo.png" className="p-1 w-16 h-16"></img>
        <div className="text-lg text-white mb-auto mt-auto pl-2">JPH dev</div>
      </div>
      <ul className="hidden md:flex mt-auto mb-auto">
        <NavItem itemname={"Home"}/>
        <li className="NavItem">
          <Link spy={true} offset={-85} duration={400} smooth={true} to="about" >About</Link>
        </li>
        <NavItem itemname={"Contact"}/>

      </ul>
    </nav>
  )
}

function NavItem({itemname}){
  return(
    <>
    <li className="NavItem">
          <Link spy={true} offset={-85} duration={400} smooth={true} to={itemname} >{itemname}</Link>
    </li>
    </>
  )
}