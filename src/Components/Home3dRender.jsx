import { useHelper } from "@react-three/drei";
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, events, useFrame } from '@react-three/fiber'
import { DirectionalLightHelper, IcosahedronGeometry, SpotLight } from "three"

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
    const [targetScale, setTargetScale] = useState(1.4);
    // Set up state for the hovered and active state
    const lerp = (start, end, alpha) => {
        return start * (1 - alpha) + end * alpha
    }

    useFrame((state, delta) => {
        //make mesh rotate towards the state.mouse.x
        meshRef.current.rotation.y += delta * props.rotationspeed;
        meshRef.current.rotation.x += delta * props.rotationspeed;
        let alpha = 0.04;
        meshRef.current.scale.set(lerp(meshRef.current.scale.x, targetScale, alpha), lerp(meshRef.current.scale.y, targetScale, alpha), lerp(meshRef.current.scale.z, targetScale, alpha));
    })
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={1.2}
            onPointerEnter={(e) => {
                setTargetScale(3.5);
            }}
            onPointerLeave={(e) => {
                setTargetScale(1.4);
            }}

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
            <OuterShape position={[0, 0, 0]} rotationspeed={0.13} />
            <ParticleContainer position={[0, 0, 0]} rotationspeed={0.1} />
        </scene>

    )
}
export default function Home3dRender(props) {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className="text-center h-[90vh]">

            <Canvas
                camera={{ position: [8, 0, 0], fov: 80, filmOffset: isDesktop ? -20 : 0 }}
            >
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>


            </Canvas>


        </div>
    )
}