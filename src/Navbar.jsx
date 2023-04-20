



export default function Navbar() {

    return (
      <nav className='w-full flex h-16 sticky top-0  z-40 align-middle backdrop-blur-md  bg-transparent shadow-lg'>
        <div className="mt-auto mb-auto flex grow">
            <img src="/icono.svg" className="px-4"></img>
            <div className="text-lg text-black mb-auto mt-auto pl-2">JPH dev</div>
        </div>
        <ul className="flex mt-auto mb-auto">
          <li className="text-lg text-black px-6">1 element</li>
          <li className="text-lg text-black px-6">2 element</li>
          <li className="text-lg text-black px-6">3 element</li>
          <li className="text-lg text-black px-6">4 element</li>
        </ul>
      </nav>
    )
  }
  