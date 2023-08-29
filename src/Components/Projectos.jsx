class projecto {
    constructor(name, description, link, imagen) {
        this.name = name
        this.description = description
        this.link = link
        this.imagen = imagen
    }
}


export default function Projectos() {

    const projectos = [
        new projecto("Projecto 1", "Este es el primer projecto", "https://www.google.com","logo.png"),
        new projecto("Projecto 2", "Este es el primer projecto", "https://www.google.com", "logo.png"),
        new projecto("Projecto 2", "Este es el primer projecto", "https://www.google.com", "logo.png")
    ]
    return (
        <div className="w-full max-w-7xl">
            <h1 className="text-center text-4xl">Projectos</h1>
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
        <div className="w-full flex justify-center items-center my-4">

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
        <div className="w-96 h-96 bg-secondary rounded-lg mx-4">
            <img className="w-full h-full" src={props.projecto.imagen}></img>
        </div>
    )
}

function ProjectInfo(props) {
    return (
        <div className="grow h-96 bg-secondary rounded-lg mx-4">
            {props.projecto.name}
        </div>
    )
}