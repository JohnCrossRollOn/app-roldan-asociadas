import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'

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

  const open = title => e => setTimeout(() => setSelected(title), 0)
  const close = e => setTimeout(() => setSelected(''), 0)
  const closeOnClickOutside = id => e => e.target.id === id && close()

  return (
    <div>
      {selected !== title ? (
        <motion.div
          layoutId={'service_layout_' + title}
          className="bg-white rounded-xl image-full w-fit"
          id={title}
          key={title}>
          <motion.figure layoutId={'service_layout_figure' + title}>
            <img
              src={img}
              alt={title}
              loading="lazy"
              crossOrigin="anonymous"
              className="h-full rounded-xl shadow-lg"
            />
          </motion.figure>
          <div className="text-slate-800 p-4 h-32 overflow-hidden">
            <motion.h2
              layoutId={'service_layout_h2_' + title}
              className="text-2xl font-semibold">
              {title}
            </motion.h2>
            <motion.p
              layoutId={'service_layout_p' + title}
              className="h-20 overflow-hidden">
              {subtitle}
            </motion.p>
          </div>
          <div className="flex flex-col justify-end p-4">
            <motion.button
              layoutId={'service_layout_button' + title}
              className="btn btn-primary shadow-xl"
              onClick={open(title)}>
              Saber Más
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <div
          id="outside"
          className="fixed z-50 w-screen h-screen top-0 left-0 overflow-hidden grid place-items-center bg-opacity-50 bg-black"
          onClick={closeOnClickOutside('outside')}>
          <motion.div
            layoutId={'service_layout_' + title}
            className="card bg-white md:card-side md:col-span-2 lg:col-span-3 shadow-xl w-screen h-[80vh] md:w-[80vw]"
            key={title}>
            <motion.figure
              layout="position"
              layoutId={'service_layout_figure' + title}
              className="w-full md:max-w-[30vw] md:min-w-[30vw] self-start md:py-8 md:pl-8">
              <img
                src={img}
                alt={title}
                loading="lazy"
                crossOrigin="anonymous"
                className="h-full md:h-[40vh] rounded-xl"
              />
            </motion.figure>
            <div className="card-body text-slate-800 rounded-xl">
              <motion.h2
                layoutId={'service_layout_h2_' + title}
                className="card-title text-slate-800 text-2xl">
                {title}
              </motion.h2>
              <motion.p layoutId={'service_layout_p' + title} className="">
                {subtitle}
              </motion.p>
              {faq.map(faq => (
                <Faq faq={faq} />
              ))}

              <div className="card-actions justify-end mt-4">
                <button className="btn btn-ghost" onClick={close}>
                  volver
                </button>
                <motion.a
                  layoutId={'service_layout_button' + title}
                  layout="position"
                  href="#contacto"
                  className="btn btn-primary"
                  onClick={close}>
                  Contacto
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
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
