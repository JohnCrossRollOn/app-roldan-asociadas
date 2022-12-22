import { useState } from 'react'

import elements from '../elements'

const Service = ([title, subtitle, img]) => (
  <div className="card h-[40vh] bg-white image-full" key={title}>
    <figure>
      <img src={img} alt={title} loading="lazy" crossOrigin="anonymous" />
    </figure>
    <div className="card-body text-white border-2 border-neutral hover:border-orange-500 rounded-xl">
      <h2 className="card-title text-white text-2xl">{title}</h2>
      <p className="h-20 overflow-hidden">{subtitle}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Saber Más</button>
      </div>
    </div>
  </div>
)

export default function () {
  const [selected, setSelected] = useState(null)
  return (
    <div className="min-h-screen snap-start py-32 constrain-on-growth grid gap-4">
      <p className="text-[2rem] text-slate-200 font-semibold">
        Nos especializamos en:
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {elements.services.map(Service)}

        <div className="grid place-items-center md:col-span-2">
          <div className="chat chat-start">
            <p className="chat-bubble bg-slate-200 text-[2rem] text-slate-800 font-semibold p-4">
              No dudes en consultarnos!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
