import { useRef } from "react"

export default function Home(props) {

    function changegrowin(e){
        console.log("AAAAAAAAAAAAA")
        e.target.style.flexGrow = "5"; 
    }
    function changegrowout(e){
        console.log("AAAAAAAAAAAAA")
        e.target.style.flexGrow = "1"; 
    }

    
    return (
        <div className="flex h-screen" name={props.name}>
            <div className="flex-grow hover:bg-red transition-all" onMouseEnter={changegrowin} onMouseLeave={changegrowout}>
                
            </div>
            <div className="flex-grow  hover:bg-red transition-all duration-1000" onMouseEnter={changegrowin} onMouseLeave={changegrowout}>
                
            </div>
        </div>
    )
}