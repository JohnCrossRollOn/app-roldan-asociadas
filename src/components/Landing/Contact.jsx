import Hr from './Hr';

const Card = ({ children }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 w-[70vw] h-[50vh]">
      {children}
    </div>
  );
};

export default () => {
  return (
    <>
      <div id="contacto" />
      <Hr>Contactenos</Hr>
      <div className="gap-4 overflow-hidden overflow-x-scroll -mx-4 scrollbar-hide">
        <div className="p-4 pt-0 pb-6 flex w-max gap-4">
          <Card>
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">Horarios de Atencion</p>
              <p className="text-xs">Hs: 6 a 8</p>
            </div>
          </Card>
          <div className="relative bg-white rounded-lg shadow-md w-[70vw] h-[50vh]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.101925606311!2d-58.66534508047211!3d-34.47493850492866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca3690eb57bc3%3A0x2c340646770f9291!2sColombia%201076%2C%20B1618EMD%20El%20Talar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1667701409545!5m2!1ses-419!2sar"
              className="w-full h-full rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
