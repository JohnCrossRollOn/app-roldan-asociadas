import { Link } from 'react-router-dom';
import Slider from '../Utils/Slider';

import Hr from '../Utils/Hr';

const elements = [
  [
    'Gestoria del Automotor',
    'Nuestros profesionales realizan diferentes trámites en los Registros de la Propiedad Automotor, Dirección de Rentas, Dependencias Policiales, Oficinas Municipales y Compañias de Seguros.',
    'https://ouch-cdn2.icons8.com/Bnmlrx6cZDArE-XS1CnD_GDwRbQnmeqtPc7q8fFXPNc/rs:fit:608:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDg1/L2UwOGY0NmY5LTNh/ZTEtNDQwOC04ZDE3/LTBhZGQ1N2RlMTRk/MC5zdmc.png',
  ],
  [
    'Accidentes de Transito',
    'Abogados con sólida experiencia en reclamos y daños materiales contra las compañias de seguros. Auto, Moto, bicicleta, Transportados y Peatón.',
    'https://ouch-cdn2.icons8.com/SyZqggsp27ro3KjKyMY0Z6EuC1kmjCIpFSPt3l9m1l8/rs:fit:1201:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDcy/L2Y1NTExNDYxLTcw/MzUtNGRmNS04MTY2/LWNlZTgwOWNhMTI3/Zi5zdmc.png',
  ],
  [
    'Infracciones de Transito',
    'Somos abogados especialistas en Derecho de Faltas de Tránsito. Brindamos un Servicio Legal para que no pagues de más, resolvemos tus multas de tránsito de forma on-line.',
    'https://ouch-cdn2.icons8.com/GrhMqPqiLgvZnDP-w1lk9sa0Io7ALchYrHC9BaovCbQ/rs:fit:608:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTY2/LzI0N2QyOWNlLTVi/ZDctNDNjZi1iZDI0/LTI4ZmYxNTc3YzNj/NS5zdmc.png',
  ],
  [
    'Jubilaciones y Pensiones',
    'Consultoria Previsional, Jubilación Planificada, Pension Directa y Derivada por fallecimiento del trabajador en actividad o jubilado, Jubilacion para Autonomos.',
    'https://ouch-cdn2.icons8.com/jRHIsyUjOBImDOe5SRKWsAfqco0vWYC7k8mX3hX3FIc/rs:fit:456:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTYy/LzQzYTZhZjdjLWZh/OGEtNGQzOS1iYWRk/LTU0NDdmNWYyYjE2/NC5zdmc.png',
  ],
  [
    'Accidentes Laborales ART',
    'Abogados especialistas en Accidentes de Trabajo y Enfermedades Profesionales.',
    'https://ouch-cdn2.icons8.com/RyvNV1cEw8CcOq7TnzeRd1vsG2N2mLXCIJA1VdXumEA/rs:fit:608:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODky/LzEzZjUyOWM3LWY1/NWUtNDE1ZC1hNWRj/LTQyOThhMGY3ZWVh/Mi5zdmc.png',
  ],
  [
    'Escrituracion y Usucapion',
    'descripcion',
    'https://ouch-cdn2.icons8.com/sSGTFBu18yzsbWJemIqQvvGflTLrpKNR2GaLCUIPi_0/rs:fit:321:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODMv/ZWE3YjI2MmItYTgy/My00NDUwLWI5ZDct/YjFmNGQ2MWE4MzYw/LnN2Zw.png',
  ],
  [
    'Divorcios, Familia y Sucesiones',
    'Profesionales calificados para asesorar y resolver todos los asuntos de familia. Alimentos y Cese de alimentos, Responsabilidad Parental, Cuidado personal, Regimen de Comunicación.',
    'https://ouch-cdn2.icons8.com/MivVWzG8zuSAd1ynjeh5LN6EVnB-AAzSzp9W-BnTIP0/rs:fit:608:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzY5/L2ZhOTA5ZjFmLTMw/NDAtNDBjYy1iZjA5/LWU1MTI2NDY0MzQ5/Yy5zdmc.png',
  ],
];

const Card = (props) => {
  const [title, description, img] = props.content;
  return (
    <div className="grid grid-rows-6 gap-4 bg-white rounded-lg shadow-md p-4 w-[70vw] h-[50vh]">
      <img
        loading="lazy"
        crossOrigin="anonymous"
        src={img || ''}
        alt="A service illustration"
        className="h-full object-contain w-full h-full row-span-4 grid place-items-center"
      />
      <div>
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-xs bg-gradient-to-b from-slate-600 text-transparent bg-clip-text">
          {description}
        </p>
      </div>
      <Link className="row-start-7 font-bold bg-primary w-fit p-2 px-3 rounded-full shadow-md">
        Saber mas
      </Link>
    </div>
  );
};

export default () => {
  return (
    <>
      <Hr>SERVICIOS</Hr>
      <Slider>
        {elements.map((item, index) => (
          <Card key={index} content={item} />
        ))}
      </Slider>
    </>
  );
};
