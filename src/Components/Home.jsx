import { useRef } from "react"
import { useTranslation } from "react-i18next"

export default function Home(props) {

    function changegrowin(e){
        //console.log("AAAAAAAAAAAAA")
        e.target.style.flexGrow = "5"; 
    }
    function changegrowout(e){
        //console.log("AAAAAAAAAAAAA")
        e.target.style.flexGrow = "1"; 
    }
    const {t} = useTranslation()
    
    return (
        <div className="flex h-96 " name={props.name}>
            <div className="flex-grow hover:bg-primary transition-all" onMouseEnter={changegrowin} onMouseLeave={changegrowout}>
                
            </div>
            <div className="flex-grow  hover:bg-primary transition-all duration-1000" onMouseEnter={changegrowin} onMouseLeave={changegrowout}>
                
            </div>
        </div>
    )
}