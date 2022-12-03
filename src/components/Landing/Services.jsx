import { Link } from 'react-router-dom';

const Card = ({ content }) => {
  const [title, description, img] = content;
  return (
    <div className="relative grid grid-rows-6 gap-4 bg-white rounded-lg shadow-md p-4 w-[70vw] h-[50vh] overflow-hidden">
      <div className="w-full row-span-4 flex items-center justify-center object-contain">
        <img
          loading="lazy"
          src={img || ''}
          alt="A service illustration"
          className="h-full object-contain"
        />
      </div>
      <div>
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-xs">{description}</p>
      </div>
      <div className="absolute z-10 grid grid-rows-1 place-items-center h-full w-full">
        <Link className="row-start-2 font-bold bg-primary border-8 w-fit border-white p-2 px-3 rounded-full">
          Saber mas
        </Link>
      </div>
    </div>
  );
};

export default () => {
  return (
    <>
      <div className="relative flex flex-row items-center justify-center">
        <p className="absolute bg-slate-100 px-2 text-sm tracking-widest font-bold">
          SERVICIOS
        </p>
        <hr className="bg-slate-800 w-full" />
      </div>
      <div className="gap-4 overflow-hidden overflow-x-scroll -mx-4 scrollbar-hide">
        <div className="p-4 pt-0 pb-6 flex w-max gap-4">
          <Card
            content={[
              'Gestoria del Automotor',
              'Nuestros profesionales realizan diferentes trámites en los Registros de la Propiedad Automotor, Dirección de Rentas, Dependencias Policiales, Oficinas Municipales y Compañias de Seguros.',
              'https://ouch-cdn2.icons8.com/Bnmlrx6cZDArE-XS1CnD_GDwRbQnmeqtPc7q8fFXPNc/rs:fit:608:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDg1/L2UwOGY0NmY5LTNh/ZTEtNDQwOC04ZDE3/LTBhZGQ1N2RlMTRk/MC5zdmc.png',
            ]}
          />
          <Card
            content={[
              'Accidentes de Transito',
              <p>
                Abogados con sólida experiencia en reclamos y daños materiales
                contra las compañias de seguros.
                <ul className="mx-6 list-disc">
                  <li>Auto</li>
                  <li>Moto</li>
                  <li>bicicleta</li>
                  <li>Transportados</li>
                  <li>Peatón</li>
                </ul>
              </p>,
              'https://ouch-cdn2.icons8.com/SyZqggsp27ro3KjKyMY0Z6EuC1kmjCIpFSPt3l9m1l8/rs:fit:1201:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDcy/L2Y1NTExNDYxLTcw/MzUtNGRmNS04MTY2/LWNlZTgwOWNhMTI3/Zi5zdmc.png',
            ]}
          />
          <Card
            content={[
              'Infracciones de Transito',
              'Somos abogados especialistas en Derecho de Faltas de Tránsito. Brindamos un Servicio Legal para que no pagues de más, resolvemos tus multas de tránsito de forma on-line.',
              'https://ouch-cdn2.icons8.com/GrhMqPqiLgvZnDP-w1lk9sa0Io7ALchYrHC9BaovCbQ/rs:fit:608:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTY2/LzI0N2QyOWNlLTVi/ZDctNDNjZi1iZDI0/LTI4ZmYxNTc3YzNj/NS5zdmc.png',
            ]}
          />
          <Card
            content={[
              'Jubilaciones y Pensiones',
              'Consultoria Previsional, Jubilación Planificada, Pensión por Fallecimiento, Jubilación para Autónomos.',
              'https://ouch-cdn2.icons8.com/jRHIsyUjOBImDOe5SRKWsAfqco0vWYC7k8mX3hX3FIc/rs:fit:456:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTYy/LzQzYTZhZjdjLWZh/OGEtNGQzOS1iYWRk/LTU0NDdmNWYyYjE2/NC5zdmc.png',
            ]}
          />
          <Card
            content={[
              'Accidentes Laborales ART',
              'Abogados especialistas en Accidentes de Trabajo y Enfermedades Profesionales.',
              'https://ouch-cdn2.icons8.com/RyvNV1cEw8CcOq7TnzeRd1vsG2N2mLXCIJA1VdXumEA/rs:fit:608:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODky/LzEzZjUyOWM3LWY1/NWUtNDE1ZC1hNWRj/LTQyOThhMGY3ZWVh/Mi5zdmc.png',
            ]}
          />
          <Card
            content={[
              'Escrituracion y Usucapion',
              'descripcion',
              'https://ouch-cdn2.icons8.com/sSGTFBu18yzsbWJemIqQvvGflTLrpKNR2GaLCUIPi_0/rs:fit:321:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODMv/ZWE3YjI2MmItYTgy/My00NDUwLWI5ZDct/YjFmNGQ2MWE4MzYw/LnN2Zw.png',
            ]}
          />
          <Card
            content={[
              'Divorcios, Familia y Sucesiones',
              'Profesionales calificados para asesorar y resolver todos los asuntos de familia. Respondabilidad Parental, Cuidado Personal, Régimen de Comunicación.',
              'https://ouch-cdn2.icons8.com/MivVWzG8zuSAd1ynjeh5LN6EVnB-AAzSzp9W-BnTIP0/rs:fit:608:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzY5/L2ZhOTA5ZjFmLTMw/NDAtNDBjYy1iZjA5/LWU1MTI2NDY0MzQ5/Yy5zdmc.png',
            ]}
          />
        </div>
      </div>
    </>
  );
};
