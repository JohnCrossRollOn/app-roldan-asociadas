import { motion } from 'framer-motion';

export default () => {
  return (
    <div className="p-4 rounded-lg flex flex-col lg:flex-row">
      <img src="https://res.cloudinary.com/dse7tzeho/image/upload/v1670081623/app-roldan-asociadas/urban-line-female-judge-and-two-lawyers-in-courtroom_r5rnkl.png" />
      <p className="text-[2rem] font-bold">
        Nosotros somos tu estudio de abogacia!
      </p>
      <p>
        El estudio que necesitabas, ya lo tenes. Consulta a nuestros
        profesionales, <strong>sin cargo</strong>.
      </p>
    </div>
  );
};
