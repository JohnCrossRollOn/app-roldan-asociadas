import elements from '../elements'

export default () => {
  const { ourselves } = elements
  return (
    <div className="min-h-screen snap-start pt-16 constrain-on-growth bg-slate-200 grid place-items-center">
      <div className="">
        <p className="text-[3rem] font-extrabold">{ourselves.title}</p>
        <div className="card-body">
          <div className="leading-relaxed bg-white shadow-xl p-4 rounded-md text-xl border-8 border-double border-orange-500">
            {ourselves.subtitle}
          </div>
        </div>
      </div>
    </div>
  )
}
