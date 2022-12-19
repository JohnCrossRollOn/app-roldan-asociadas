import Hr from "../Utils/Hr";

export default () => {
  return (
    <>
      <div />
      <Hr>Nosotros</Hr>
      <div id="nosotros" />
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-extrabold">
          Somos un equipo altamente calificado
        </p>
        <div className=" bg-white rounded-lg p-2 italic shadow-md">
          <p className="drop-shadow-md text-primary font-semibold leading-tight tracking-wider">
            <strong className="font-black">"</strong> Esto es una frase que nos
            caracterize y represente.
            <strong className="font-black">"</strong>
          </p>
        </div>
        <p className="text-xs leading-relaxed">
          Esto es un texto mas descriptivo sobre quienes somos, que hacemos y
          hacia donde vamos. Esto es un texto mas descriptivo sobre quienes
          somos, que hacemos y hacia donde vamos.
        </p>
        <p className="text-xs leading-relaxed">
          Esto es un texto mas descriptivo sobre quienes somos, que hacemos y
          hacia donde vamos. Esto es un texto mas descriptivo sobre quienes
          somos, que hacemos y hacia donde vamos.
        </p>
        <p className="text-xs leading-relaxed">
          Esto es un texto mas descriptivo sobre quienes somos, que hacemos y
          hacia donde vamos. Esto es un texto mas descriptivo sobre quienes
          somos, que hacemos y hacia donde vamos.
        </p>
      </div>
    </>
  );
};
