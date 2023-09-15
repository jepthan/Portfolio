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
        new projecto("Portfolio", "Este es el primer projecto", "https://www.google.com", "Portfolio_Mac.svg"),
        new projecto("Projecto 2", "Este es el primer projecto", "https://www.google.com", "mac.png"),
        new projecto("Projecto 2", "Este es el primer projecto", "https://www.google.com", "mac.png")
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
        <div className="w-full flex justify-center items-center  flex-wrap md:flex-nowrap my-20">

            <Imagen projecto={props.projecto}></Imagen>
            <ProjectInfo projecto={props.projecto}></ProjectInfo>

        </div>
    )
}


function Imagen(props) {
    return (
        <div className="m-2 flex justify-center items-center max-w-2xl">
            <div className="relative ">
                <img className="relative" src={props.projecto.imagen} />

            </div>

        </div>
    )
}

function ProjectInfo(props) {
    return (
        <div className="grow h-80 m-4">
            <h1 className="my-6 text-3xl">{props.projecto.name}</h1>

            <div className="my-3 text-lg">
                {props.projecto.description}
            </div>

            <a href={props.projecto.link} target="_blank">Ver en Github</a>

        </div>
    )
}