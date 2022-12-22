import { Link } from 'react-router-dom'
import Logo from './Utils/Logo'

export default () => (
  <nav className="flex bg-white gap-4 text-lg py-2 shadow-md sticky top-0 items-center select-none rounded-b-xl z-50 justify-between constrain-on-growth">
    <Link to="/">
      <div className="flex flex-row gap-4 text-xl font-semibold items-center">
        <Logo className="h-8" />
        <span className="">
          Roldan <span className="font-light text-xl">y</span> asociadas
        </span>
      </div>
    </Link>
    <a href="#contacto" className="btn btn-primary">
      Contacto
    </a>
  </nav>
)
