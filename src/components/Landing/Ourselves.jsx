import Hr from "../Utils/Hr";

export default () => {
  return (
    <>
      <div />
      <Hr>Nosotros</Hr>
      <div id="nosotros" />
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-extrabold">
          Somos un equipo de abogados que brindamos un asesoramiento integral
        </p>
        <p className="leading-relaxed">
         El estudio juridico <span className="font-semibold">Roldan & Asociadas</span> está integrado por profesionales de excelencia, orientados a responder eficientemente todas las necesidades jurídicas de nuestros clientes, acompañandolos en el proceso de manera personalizada y directa, generando comodidad y confianza. 
        </p>
      </div>
    </>
  );
};
