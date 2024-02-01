class projecto {
    constructor(name, description, link, imagen) {
        this.name = name
        this.description = description
        this.link = link
        this.imagen = imagen
    }
}


export default function Projectos(props) {

    const projectos = [
        new projecto("Portfolio", "The aim of this project is to design and develop a personal portfolio website that serves as a digital representation of my skills and personality. I want it to be aesthetically pleasing, user-friendly, and responsive across various devices and screen sizes.", "https://github.com/jepthan/Portfolio", "Portfolio_Mac.svg"),
        new projecto("System de Reserva de salas", "Un proyecto creado para el MOPT como parte del proceso educatiovo de la Universidad Nacional de Costa Rica(UNA)", "", "SRS_MAC.svg")
    ]
    return (
        <div className="w-full max-w-7xl mt-20" name={props.name}>
            <h1 className="text-center text-4xl" >Projectos</h1>
            {projectos.map((projecto, index) => {
                return (
                    <Project key={index} projecto={projecto} index={index}></Project>
                )
            }
            )}

        </div>
    )
}

function Project(props) {

    console.log(props.projecto)
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
            <div className="relative ">
                <img loading="lazy" className="relative" src={props.projecto.imagen} />

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
                props.projecto.link == "" ? 
                <>
                
                </> 
                :
                <>
                <a className="bg-primary rounded-md text-col_text p-2 hover:bg-accent ease-in duration-200" href={props.projecto.link} target="_blank">Ver en Github</a>
                </>
            }
            

        </div>
    )
}