import Logo from './Logo';

export default () => (
  <nav className="flex bg-slate-50 gap-4 text-lg py-2 px-4 md:px-16 shadow-md z-50 sticky top-0 items-center select-none">
    <div className="flex flex-row gap-4 text-2xl font-semibold items-center">
      <Logo className="h-8" />
      <span className="">
        Roldan <span className="font-light text-xl">y</span> asociadas
      </span>
    </div>
    <div className="flex-1" />
    <ul className="flex-row gap-4 hidden sm:flex">
      <li>Servicios</li>
      <li>Nosotros</li>
    </ul>
    <div className="bg-primario font-bold bg-primary p-2 px-3 rounded-full">
      Contacto
    </div>
  </nav>
);
