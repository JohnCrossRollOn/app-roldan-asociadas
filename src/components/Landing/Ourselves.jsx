import Hr from './Hr';

export default () => {
  return (
    <>
      <Hr>Nosotros</Hr>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-extrabold">Un equipo mas que calificado</p>
        <div className=" bg-white rounded-lg p-2 italic shadow-md">
          <p className="drop-shadow-md text-primary font-light leading-tight tracking-wider">
            <strong className="font-black">"</strong> Los pilares de nuestra
            comunidad son algo que dijo Quique (Dr. Roldan Penayo) pero Gabriela
            Fernanda Dominguez no le tomo fotografia.
            <strong className="font-black">"</strong>
          </p>
        </div>
        <br />
        <p className="text-xs leading-relaxed">
          Los pilares de nuestra comunidad son algo que dijo Quique (Dr. Roldan
          Penayo) pero Gabriela Fernanda Dominguez no le tomo fotografia.
        </p>
        <p className="text-xs leading-relaxed">
          Los pilares de nuestra comunidad son algo que dijo Quique (Dr. Roldan
          Penayo) pero Gabriela Fernanda Dominguez no le tomo fotografia.
        </p>
        <p className="text-xs leading-relaxed">
          Los pilares de nuestra comunidad son algo que dijo Quique (Dr. Roldan
          Penayo) pero Gabriela Fernanda Dominguez no le tomo fotografia.
        </p>
      </div>
    </>
  );
};
