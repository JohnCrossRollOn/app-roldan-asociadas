import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import elements from '../elements'

const Faq = ({ faq }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  const [q, a] = faq
  return (
    <div
      className="border-2 border-slate-400 rounded-md px-4 py-2 flex flex-col gap-4"
      onClick={toggle}>
      <div className="font-bold">{q}</div>
      {open && <p>{a}</p>}
    </div>
  )
}

function Service({ service, selectedGroup }) {
  const [title, subtitle, img, faq] = service
  const [selected, setSelected] = selectedGroup

  return selected === title ? (
    <motion.div
      layoutId={title}
      id={title}
      className="card min-h-[40vh] h-fit bg-white md:card-side md:col-span-2 lg:col-span-3 border-2 border-orange-500"
      key={title}>
      <figure className="w-full md:max-w-[30vw] md:min-w-[30vw] self-start md:py-8 md:pl-8">
        <img
          src={img}
          alt={title}
          loading="lazy"
          crossOrigin="anonymous"
          className="h-full md:h-[40vh] rounded-xl"
        />
      </figure>
      <div className="card-body text-slate-800 rounded-xl">
        <h2 className="card-title text-slate-800 text-2xl">{title}</h2>
        <p className="">{subtitle}</p>
        {faq.map(faq => (
          <Faq faq={faq} />
        ))}

        <div className="card-actions justify-end mt-4">
          <button className="btn btn-ghost" onClick={() => setSelected('')}>
            volver
          </button>
          <a href="#contacto" className="btn btn-primary">
            Contacto
          </a>
        </div>
      </div>
    </motion.div>
  ) : (
    <motion.div
      layoutId={title}
      className="card h-[40vh] bg-white image-full"
      id={title}
      key={title}>
      <figure>
        <img
          src={img}
          alt={title}
          loading="lazy"
          crossOrigin="anonymous"
          className="h-full"
        />
      </figure>
      <div className="card-body text-white border-2 border-neutral hover:border-orange-500 rounded-xl">
        <h2 className="card-title text-white text-2xl">{title}</h2>
        <p className="h-20 overflow-hidden">{subtitle}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={e => {
              setSelected(title)
            }}>
            Saber Más
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function Services() {
  const [selected, setSelected] = useState('')

  return (
    <>
      {elements.services.map(service => (
        <Service
          key={service[0]}
          service={service}
          selectedGroup={[selected, setSelected]}
        />
      ))}
    </>
  )
}

export default function () {
  return (
    <div className="min-h-screen py-32 constrain-on-growth grid gap-4">
      <p className="text-[2rem] text-slate-200 font-semibold">
        Nos especializamos en:
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Services />
        <div className="grid place-items-center md:col-span-2">
          <motion.div
            layoutId="no_dudes_en_consultarnos"
            className="chat chat-start">
            <p className="chat-bubble bg-slate-200 text-[2rem] text-slate-800 font-semibold p-4">
              No dudes en consultarnos!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
