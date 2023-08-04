import { useTranslation } from "react-i18next"
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, events, useFrame } from '@react-three/fiber'
import { DirectionalLightHelper, IcosahedronGeometry, SpotLight } from "three"
import { use } from "i18next";
import { useHelper } from "@react-three/drei";



function Particle(props) {

    const p = useRef();
    //calcular la posicion aleatoria

    useEffect(() => {
        p.current.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
        p.current.position.multiplyScalar(2 + Math.random() * 15);
        p.current.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    });

    //size of particle
    const size = 0.06;

    return (
        <mesh
            {...props}

            scale={[size, size, size]}
            ref={p}
        >
            <tetrahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={'#ffffff'} />
        </mesh>
    )
}

function OuterShape(props) {
    // This reference will give us direct access to the mesh
    const meshRef = useRef()
    // Set up state for the hovered and active state
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
        meshRef.current.rotation.y += delta * props.rotationspeed;
        meshRef.current.rotation.x += delta * props.rotationspeed;
    })
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={1.2}
            onClick={(event) => setActive(!active)}
            rotation={[1, 1, 1]}
        >
            <icosahedronGeometry args={[2, 1]} />
            <meshStandardMaterial color={'#808080'} wireframe={true} flatShading={true} emissive={'#808080'} />
        </mesh>
    )
}

function InnerShape(props) {
    // This reference will give us direct access to the mesh
    const meshRef = useRef()
    // Set up state for the hovered and active state
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
        meshRef.current.rotation.y += delta * props.rotationspeed;
        meshRef.current.rotation.x += delta * props.rotationspeed;
    })
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={1.5}
            onClick={(event) => setActive(!active)}
            rotation={[1, 1, 1]}
        >
            <icosahedronGeometry args={[1, 1]} />
            <meshPhongMaterial color={'#FFFFFF'} wireframe={false} size={0.1} flatShading={true} />
        </mesh>
    )
}

function ParticleContainer(props) {
    const meshRef = useRef()

    useFrame((state, delta) => {
        meshRef.current.rotation.y += delta * props.rotationspeed;
        //meshRef.current.rotation.x += delta;
    })

    return (
        <group
            {...props}
            position={[0, 0, 0]}
            ref={meshRef}
        >
            {Array(150).fill().map((_, i) => (<Particle />))}
        </group>
    )
}
function Scene(props) {

    const light1 = useRef();
    const light2 = useRef();
    const light3 = useRef();
    //useHelper(light1, DirectionalLightHelper, 1, 'red');
    //useHelper(light2, DirectionalLightHelper, 1, 'blue');
    //useHelper(light3, DirectionalLightHelper, 1, 'white');


    return (
        <scene>

            <directionalLight lookAt={[0, 0, 0]} position={[2, -1, 2]} color={'#FF3367'} intensity={1} ref={light1} />
            <directionalLight lookAt={[0, 0, 0]} position={[2, 2, -2]} color={'#8200C9'} intensity={2} ref={light2} />
            <directionalLight lookAt={[0, 0, 0]} position={[3, -5, -5]} color={'#FFFFFF'} intensity={2} ref={light3} />
            <InnerShape position={[0, 0, 0]} rotationspeed={0.2} />
            <OuterShape position={[0, 0, 0]} rotationspeed={0.15} />
            <ParticleContainer position={[0, 0, 0]} rotationspeed={0.1} />
        </scene>

    )
}

export default function Home(props) {

    const { t } = useTranslation()

    return (
        <div className="static justify-center ">

            <div className="md:absolute bottom-0 left-0 justify-center items-center max-h-[30rem] max-w-none md:max-h-[90rem] h-[85vh] md:max-w-[50%]" name={props.name}>
                <h1 className="text-center text-5xl mt-36 mb-10 px-10">{t("home_title")}</h1>
                <p className="text-center text-2xl mt-10 px-10">{t("home_description")}</p>
            </div>
            <div className="text-center h-[90vh]">
                <Canvas
                    camera={{ position: [8, 0, 0], fov: 80, filmOffset: -20}}
                    shadows
                >

                    <Scene />


                </Canvas>
            </div>

        </div>




    )
}