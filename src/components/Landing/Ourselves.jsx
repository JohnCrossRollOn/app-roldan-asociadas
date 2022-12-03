import Hr from './Hr';

export default () => {
  return (
    <>
      <Hr>Nosotros</Hr>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-extrabold">Un equipo mas que calificado</p>
        <p className="leading-tight bg-white rounded-lg text-primary p-2 italic font-light shadow-md">
          <div className="drop-shadow-md">
            <strong className="font-black">"</strong> Los pilares de nuestra
            comunidad son algo que dijo Quique (Dr. Roldan Penayo) pero Gabriela
            Fernanda Dominguez no le tomo fotografia.
            <strong className="font-black">"</strong>
          </div>
        </p>
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
