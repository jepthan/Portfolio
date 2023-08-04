import { Link } from "react-scroll";
import "./Navbar.css"
import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react";
import { document } from "postcss";

import i18next from 'i18next'


export default function Navbar() {

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenLang, setIsOpenLang] = useState(false);
  const [currentlang, setcurrentLang] = useState(i18next.language)

  function isOpenMenufun() {
    setIsOpenMenu(!isOpenMenu);
    if (isOpenLang) {
      setIsOpenLang(false)
    }

  }
  function isOpenLangfun(){
    setIsOpenLang(!isOpenLang);
    if(isOpenMenu){
      setIsOpenMenu(false)
    }
  }
  function changeLanguage(lang){
    i18next.changeLanguage(lang)
    setcurrentLang(i18next.language)
  }

  const {t} = useTranslation()

  return (
    <nav className='w-full flex h-16 sticky top-0  z-40 align-middle backdrop-blur-lg  bg-secondary/90 shadow-lg'>
      <div className="mt-auto mb-auto flex grow">
        <img src="/logo.png" alt="Logo" className="p-1 w-16 h-16"></img>
        <div className="text-lg text-white mb-auto mt-auto pl-2">JPH dev</div>
      </div>
      <ul className="hidden md:flex mt-auto mb-auto">
        <NavItem itemname={"Home"} itemtext= {t('nav_home')} offset={-65} />
        <NavItem itemname={"About"} itemtext= {t('nav_about')} offset={-65} />
        <NavItem itemname={"Projects"} itemtext= {t('nav_Projects')} offset={-65} />
        <NavItem itemname={"Contact"} itemtext= {t('nav_contact')} offset={-63} />
      </ul>

      <div className="flex mt-auto mb-auto" onClick={isOpenLangfun}>
        <div className="TranslateBtn icon"></div>
      </div>

      <div className="flex mt-auto mb-auto md:hidden" onClick={isOpenMenufun}>
        <div className="MenuBtn icon">

        </div>
      </div>


      <ul className={`absolute top-16 backdrop-blur-lg z-40 bg-secondary/90 shadow-lg w-64 right-0 ${isOpenLang ? "block" : "hidden"}`}>
        <li className={`NavItem ${currentlang == "es"? "active" : ""}`}>
          <button onClick={() =>changeLanguage("es")}>Español</button>
        </li>
        <li className={`NavItem ${currentlang == "en"? "active" : ""}`}>
          <button onClick={() =>changeLanguage("en")}>English</button>
        </li>
      </ul>

      <ul className={`absolute top-16 backdrop-blur-lg z-40 bg-secondary/90 shadow-lg w-3/5 right-0 ${isOpenMenu ? "block" : "hidden"} md:hidden `}>
        <NavItem itemname={"Home"} itemtext= {t('nav_home')} offset={-65} />
        <NavItem itemname={"About"} itemtext= {t('nav_about')} offset={-63} />
        <NavItem itemname={"Projects"} itemtext= {t('nav_Projects')} offset={-65} />
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