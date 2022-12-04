export default () => {
  return (
    <div className="w-full select-none rounded-lg flex flex-col gap-4 md:gap-16 md:grid md:grid-cols-2">
      <img
        crossOrigin="anonymous"
        loading="lazy"
        src="https://res.cloudinary.com/dse7tzeho/image/upload/v1670084291/app-roldan-asociadas/Sin_t%C3%ADtulo-modified_rsyv8u.png"
        alt="Nosotros con un juez"
        className=""
      />
      <div className="flex flex-col gap-4">
        <p className="text-[2rem] leading-8 font-extrabold">
          Nosotros somos tu estudio de abogacia!
        </p>
        <p className="leading-relaxed tracking-wide">
          Tu lugar de <strong>confianza</strong>, ya lo tenes. <br />
          Consulta a nuestros profesionales, <strong>sin cargo</strong>.
        </p>
      </div>
    </div>
  );
};
