import { useTranslation } from "react-i18next"
import { ReactSVG } from 'react-svg'



export default function Projectos(props) {

    const {t} = useTranslation()
    return (
        <div className="w-full max-w-7xl mt-20" name={props.name}>
            <h1 className="text-center text-4xl" >Projectos</h1>
            {t('projects', {returnObjects: true}).map((projecto, index) => {
                return (
                    <Project key={index} projecto={projecto} index={index}></Project>
                )
            })}
        </div>
    )
}

function Project(props) {
    return (
        <div className="w-full justify-center items-center flex flex-wrap md:grid md:grid-cols-2 md:flex-nowrap my-20">

            <Imagen projecto={props.projecto}></Imagen>
            <ProjectInfo projecto={props.projecto}></ProjectInfo>

        </div>
    )
}


function Imagen(props) {
    return (
        <div className="m-2 flex justify-center items-center max-w-2xl">
            <div className="relative">
                <ReactSVG src={props.projecto.image} className="relative has-[svg]:w-fit h-fit" afterInjection={(svg)=>{
                    console.log("After injection")
                    svg.classList.add("h-fit")
                    svg.classList.add("w-fit")
                }}/>
            </div>

        </div>
    )
}

function ProjectInfo(props) {
    return (
        <div className="h-80 m-4 max-w-xl">
            <h1 className="my-6 text-3xl">{props.projecto.name}</h1>

            <div className="mt-6 mb-5 text-lg">
                {props.projecto.description}
            </div>
            {
                props.projecto.link === "" ? 
                <>
                
                </> 
                :
                <>
                <a className="bg-primary rounded-md text-col_text p-2 hover:bg-accent ease-in duration-200" href={props.projecto.link} target="_blank">{props.projecto.btn}</a>
                </>
            }
            

        </div>
    )
}