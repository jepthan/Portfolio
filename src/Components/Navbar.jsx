import { Link } from "react-scroll";
import "./Navbar.css"
import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react";



export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  

  const isOpenReff = useRef(isOpen);

  const setIsOpenState = data => {
    isOpenReff.current = data;
    setIsOpen(data);
  };

  const menuref = useRef()

  function handleClickOutside(event){
    if (menuref.current && !menuref.current.contains(event.target)) {
      if(isOpenReff.current == true){
        document.removeEventListener("click", handleClickOutside);
      }
      setIsOpenState(!isOpenReff.current)
    }
  }


  function isOpenfun() {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

  }

  const {t} = useTranslation()
  


  return (
    <nav className='w-full flex h-16 sticky top-0  z-40 align-middle backdrop-blur-lg  bg-zinc-800/60 shadow-lg'>
      <div className="mt-auto mb-auto flex grow">
        <img src="/logo.png" className="p-1 w-16 h-16"></img>
        <div className="text-lg text-white mb-auto mt-auto pl-2">JPH dev</div>
      </div>
      <ul className="hidden md:flex mt-auto mb-auto">
        <NavItem itemname={"Home"} itemtext= {t('nav_home')} offset={-65} />
        <NavItem itemname={"About"} itemtext= {t('nav_about')} offset={-65} />
        <NavItem itemname={"Contact"} itemtext= {t('nav_contact')} offset={-63} />
      </ul>

      <div className="flex mt-auto mb-auto md:hidden" onClick={isOpenfun}>
        <div className="colored icon">

        </div>
      </div>

      <ul ref={menuref} className={`absolute top-16 backdrop-blur-lg  bg-zinc-800/60 shadow-lg w-3/5 right-0 ${isOpen ? "block" : "hidden"} md:hidden `}>
        <NavItem itemname={"Home"} itemtext= {t('nav_home')} offset={-65} />
        <NavItem itemname={"About"} itemtext= {t('nav_about')} offset={-63} />
        <NavItem itemname={"Contact"} itemtext= {t('nav_contact')} offset={-63} />
      </ul>
    </nav>

  )
}

function NavItem({ itemname, offset, itemtext }) {
  return (
    <>
      <li className="NavItem">
        <Link spy={true} offset={offset} duration={400} smooth={true} to={itemname} >{itemtext}</Link>
      </li>
    </>
  )
}