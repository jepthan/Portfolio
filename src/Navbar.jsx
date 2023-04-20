import { Link } from "react-scroll";




export default function Navbar() {

    return (
      <nav className='w-full flex h-16 sticky top-0  z-40 align-middle backdrop-blur-md  bg-transparent shadow-lg'>
        <div className="mt-auto mb-auto flex grow">
            <img src="/icono.svg" className="px-4"></img>
            <div className="text-lg text-black mb-auto mt-auto pl-2">JPH dev</div>
        </div>
        <ul className="flex mt-auto mb-auto">
          <Link offset={-85} duration={400} smooth to="home" className="text-lg text-black px-6">Home</Link>
          <Link offset={-85} duration={400} smooth to="about" className="text-lg text-black px-6 active:bg-red-800">About</Link>
          <Link offset={-85} duration={400} smooth to="contacts" className="text-lg text-black px-6">Contact</Link>
          
        </ul>
      </nav>
    )
  }
  