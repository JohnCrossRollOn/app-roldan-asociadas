import { Link } from 'react-router-dom';

const Card = ({ content }) => {
  const [title, description, img] = content;
  return (
    <div className="grid grid-rows-6 gap-4 bg-white rounded-lg shadow-md p-2 w-[70vw] h-[50vh]">
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
        <p>{description}</p>
      </div>
      <div className="flex ">
        <Link className="">Saber mas</Link>
      </div>
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
              '',
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
              'https://ouch-cdn2.icons8.com/GrhMqPqiLgvZnDP-w1lk9sa0Io7ALchYrHC9BaovCbQ/rs:fit:608:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTY2/LzI0N2QyOWNlLTVi/ZDctNDNjZi1iZDI0/LTI4ZmYxNTc3YzNj/NS5zdmc.png',
            ]}
          />
          <Card
            content={[
              'Jubilaciones y Pensiones',
              'descripcion',
              'https://ouch-cdn2.icons8.com/jRHIsyUjOBImDOe5SRKWsAfqco0vWYC7k8mX3hX3FIc/rs:fit:456:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTYy/LzQzYTZhZjdjLWZh/OGEtNGQzOS1iYWRk/LTU0NDdmNWYyYjE2/NC5zdmc.png',
            ]}
          />
          <Card
            content={[
              'Accidentes Laborales ART',
              'descripcion',
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
              'descripcion',
              'https://ouch-cdn2.icons8.com/MivVWzG8zuSAd1ynjeh5LN6EVnB-AAzSzp9W-BnTIP0/rs:fit:608:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzY5/L2ZhOTA5ZjFmLTMw/NDAtNDBjYy1iZjA5/LWU1MTI2NDY0MzQ5/Yy5zdmc.png',
            ]}
          />
        </div>
      </div>
    </>
  );
};
