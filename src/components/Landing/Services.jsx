const Card = ({ children, content }) => {
  const [title, description, img] = content;
  return (
    <div className="bg-white rounded-lg shadow-md p-2 w-[70vw] h-[40vh]">
      <div className="w-full h-3/4 grid place-items-center">
        <img
          loading="lazy"
          src={img || ''}
          alt="A service illustration"
          className=""
        />
      </div>
      <p className="text-xl font-semibold">{title}</p>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default () => {
  return (
    <>
      <p className="text-sm tracking-widest font-bold ">SERVICIOS</p>
      <div className="gap-4 overflow-hidden overflow-x-scroll -mx-4 scrollbar-hide">
        <div className="p-4 pt-0 pb-6 grid grid-cols-7 grid w-max gap-4">
          <Card
            content={[
              'Gestoria del Automotor',
              'descripcion',
              'https://ouch-cdn2.icons8.com/Bnmlrx6cZDArE-XS1CnD_GDwRbQnmeqtPc7q8fFXPNc/rs:fit:608:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDg1/L2UwOGY0NmY5LTNh/ZTEtNDQwOC04ZDE3/LTBhZGQ1N2RlMTRk/MC5zdmc.png',
            ]}
          />
          <Card
            content={[
              'Accidentes de Transito',
              'descripcion',
              'https://ouch-cdn2.icons8.com/SyZqggsp27ro3KjKyMY0Z6EuC1kmjCIpFSPt3l9m1l8/rs:fit:1201:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDcy/L2Y1NTExNDYxLTcw/MzUtNGRmNS04MTY2/LWNlZTgwOWNhMTI3/Zi5zdmc.png',
            ]}
          />
          <Card
            content={[
              'Infracciones de Transito',
              'descripcion',
              'https://ouch-cdn2.icons8.com/pF8qS3slldwAq-Us3f5bivFuDl2kLbz-sMPU64vYduw/rs:fit:1201:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTUx/LzY2OTc2NDE5LWQx/MzgtNDYwNi1hM2Zi/LTA5ZWYwMDBhZjlh/Zi5zdmc.png',
            ]}
          />
          <Card content={['Jubilaciones y Pensiones', 'descripcion']} />
          <Card content={['Accidentes Laborales ART', 'descripcion']} />
          <Card content={['Escrituracion y Usucapion', 'descripcion']} />
          <Card content={['Divorcios, Familia y Sucesiones', 'descripcion']} />
        </div>
      </div>
    </>
  );
};
