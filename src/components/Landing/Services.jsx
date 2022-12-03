const Card = ({ children }) => (
  <div className="bg-white rounded-lg shadow-md p-2 w-fit">{children}</div>
);

export default () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm tracking-widest font-bold">SERVICIOS</p>
      <Card>
        <img src="" />
        <p className="text-xl">Gestoria del Automotor</p>
      </Card>
      <Card>
        <img src="" />
        <p className="text-xl">Accidentes de Transito</p>
      </Card>
      <Card>
        <img src="" />
        <p className="text-xl">Infracciones de Transito</p>
      </Card>
      <Card>
        <img src="" />
        <p className="text-xl">Jubilaciones y Pensiones</p>
      </Card>
      <Card>
        <img src="" />
        <p className="text-xl">Accidentes Laborales ART</p>
      </Card>
      <Card>
        <img src="" />
        <p className="text-xl">Escrituracion y Usucapion</p>
      </Card>
      <Card>
        <img src="" />
        <p className="text-xl">Divorcios, Familia y Sucesiones</p>
      </Card>
    </div>
  );
};
