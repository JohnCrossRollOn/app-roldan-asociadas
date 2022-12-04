import { Link } from 'react-router-dom';
import Logo from './Logo';

export default () => (
  <nav className="flex bg-white gap-4 text-lg py-2 px-4 md:px-16 shadow-md sticky top-0 items-center select-none rounded-b-xl z-50 justify-between">
    <Link to="/">
      <div className="flex flex-row gap-4 text-xl font-semibold items-center">
        <Logo className="h-8" />
        <span className="">
          Roldan <span className="font-light text-xl">y</span> asociadas
        </span>
      </div>
    </Link>
    <ul className="flex-row gap-4 hidden sm:flex">
      <li>
        <a href="#servicios">Servicios</a>
      </li>
      <li>
        <a href="#Nosotros">Nosotros</a>
      </li>
    </ul>
    <a
      href="#contacto"
      className="bg-primario font-bold bg-primary p-2 px-3 rounded-full shadow-md"
    >
      Contacto
    </a>
  </nav>
);
