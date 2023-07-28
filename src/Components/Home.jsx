import { useTranslation } from "react-i18next"
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
    // This reference will give us direct access to the mesh
    const meshRef = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        meshRef.current.rotation.y += delta;
        meshRef.current.rotation.x += delta;
    })

    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <pointsMaterial color={'#519ee8'}  />
        </mesh>
    )
}


export default function Home(props) {


    const { t } = useTranslation()

    return (
        <div className="flex flex-wrap-reverse justify-center ">
            <div className=" flex-1 justify-center items-center max-h-[30rem] max-w-none md:max-h-[90rem] h-[85vh] md:max-w-[50%]" name={props.name}>
                <h1 className="text-center text-5xl mt-36 mb-10 px-10">{t("home_title")}</h1>
                <p className="text-center text-2xl mt-10 px-10">{t("home_description")}</p>
            </div>
            <div className="flex-1 text-center">
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Box position={[0, 0, 0]} />
                </Canvas>
            </div>

        </div>




    )
}