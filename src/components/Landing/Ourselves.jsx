import Hr from '../Utils/Hr'

export default () => {
  return (
    <div className="min-h-screen snap-start pt-16 constrain-on-growth bg-slate-200 grid place-items-center">
      <div className="">
        <p className="text-[3rem] font-extrabold">
          Somos un equipo de abogados que brinda un asesoramiento integral
        </p>
        <div className="card-body">
          <div className="leading-relaxed bg-white shadow-xl p-4 rounded-md text-xl border-8 border-double border-orange-500">
            El estudio juridico{' '}
            <span className="font-semibold">Roldan & Asociadas</span> está
            integrado por profesionales de excelencia, orientados a responder
            eficientemente todas las necesidades jurídicas de nuestros clientes,
            acompañandolos en el proceso de manera personalizada y directa,
            generando comodidad y confianza.
          </div>
        </div>
      </div>
    </div>
  )
}
