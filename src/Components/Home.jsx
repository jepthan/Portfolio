import { useRef } from "react"
import { useTranslation } from "react-i18next"

export default function Home(props) {

    
    const {t} = useTranslation()
    
    return (
        <div className=" max-h-96 flex md:max-h-[90rem] h-screen" name={props.name}>
            <div className="grow " >
            
            </div>
            <div className="grow " >
            
            </div>
        </div>
    )
}