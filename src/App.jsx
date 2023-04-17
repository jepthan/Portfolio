import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'

function Navbar() {

  return (
    <nav>
      <ul>
        <li>1 element</li>
        <li>2 element</li>
        <li>3 element</li>
      </ul>
    </nav>
  )
}

export default function App() {

  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.x += delta))

  return (
    <div className="App">
      <Navbar />
      <h1 className='text-3xl font-bold underline'>
        Hello word
      </h1>

      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh
          ref={ref}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'orange'} />
        </mesh>
      </Canvas>
    </div>
  )
}

