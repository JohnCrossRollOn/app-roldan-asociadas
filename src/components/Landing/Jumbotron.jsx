import { motion } from 'framer-motion';

export default () => {
  return (
    <div className="p-4 rounded-lg flex flex-col md:flex-row-reverse gap-4">
      <img
        src="https://res.cloudinary.com/dse7tzeho/image/upload/v1670084291/app-roldan-asociadas/Sin_t%C3%ADtulo-modified_rsyv8u.png"
        alt="Nosotros con un juez"
        className="my-8"
      />
      <p className="text-[2rem] font-extrabold">
        Nosotros somos tu estudio de abogacia!
      </p>
      <p className="leading-relaxed tracking-wide">
        Tu lugar de <strong>confianza</strong>, ya lo tenes. <br />
        Consulta a nuestros profesionales, <strong>sin cargo</strong>.
      </p>
    </div>
  );
};
