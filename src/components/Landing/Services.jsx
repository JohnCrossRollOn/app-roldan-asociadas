const Card = ({ children }) => (
  <div className="bg-white rounded-lg shadow-md p-2 w-fit">{children}</div>
);

export default () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm tracking-widest font-bold">SERVICIOS</p>
      <Card>
        <img src="" />
        <p className="">Gestoria del Automotor</p>
      </Card>
      <Card>
        <img src="" />
        <p className="">Accidentes de Transito</p>
      </Card>
      <Card>
        <img src="" />
        <p className="">Infracciones de Transito</p>
      </Card>
      <Card>
        <img src="" />
        <p className="">Jubilaciones y Pensiones</p>
      </Card>
      <Card>
        <img src="" />
        <p className="">Accidentes Laborales ART</p>
      </Card>
      <Card>
        <img src="" />
        <p className="">Escrituracion y Usucapion</p>
      </Card>
      <Card>
        <img src="" />
        <p className="">Divorcios, Familia y Sucesiones</p>
      </Card>
    </div>
  );
};
