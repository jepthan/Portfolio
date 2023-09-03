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
        new projecto("Projecto 1", "Este es el primer projecto", "https://www.google.com","logo.png"),
        new projecto("Projecto 2", "Este es el primer projecto", "https://www.google.com", "logo.png"),
        new projecto("Projecto 2", "Este es el primer projecto", "https://www.google.com", "logo.png")
    ]
    return (
        <div className="w-full max-w-7xl" name={props.name}>
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

            {renderOrder(props.index, props.projecto)}

        </div>
    )
}

function renderOrder(index, projecto) {
    if (index % 2 == 0) {
        return (
            <>
                <Imagen projecto={projecto}></Imagen>
                <ProjectInfo projecto={projecto}></ProjectInfo>
            </>
        )
    } else {
        return (
            <>
                <ProjectInfo projecto={projecto}></ProjectInfo>
                <Imagen projecto={projecto}></Imagen>
            </>
        )
    }
}

function Imagen(props) {
    return (
        <div className="m-2 flex justify-center items-center">
            <div className="relative">
                <img className="relative" src="mac.png"/>
                <img className="absolute bottom-1/2 right-[40%]" src={props.projecto.imagen}/>
            </div>
            
        </div>
    )
}

function ProjectInfo(props) {
    return (
        <div className="grow h-80 m-2">
            <h1 className="my-6 text-3xl">{props.projecto.name}</h1>
            
            <div className="my-3 text-lg">
            texto que explica algo del proyecto aqui sigueria escribiendo para ver que tal se ve en la parte visual de la apliacacion
            </div>
            
        </div>  
    )
}