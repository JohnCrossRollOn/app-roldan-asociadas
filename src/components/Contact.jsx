import elements from './elements'

import { useState, useRef } from 'react'
import { sendForm } from '@emailjs/browser'

const areas = elements.services.map(service => service[0])

const ContactForm = () => {
  const [subject, setSubject] = useState(areas[0])
  const [isDisabled, setDisabled] = useState(false)
  const [isSubmitted, setSubmitted] = useState(false)
  const form = useRef()

  const changeSubject = ({ target }) => setSubject(target.value)

  const onSubmit = e => {
    e.preventDefault()
    if (!isDisabled) {
      setDisabled(true)
      console.log('sending...')
      sendForm(
        'service_0xgn9yc',
        'template_qqemzbo',
        form.current,
        'NfX36qsCnNkzd9UpG'
      ).then(() => {
        setSubmitted(true)
        console.log('submitted')
      })
    }
  }
  return isSubmitted ? (
    <div className="card bg-white rounded-xl row-span-2">
      <div className="card-body grid place-items-center">
        <div className="text-center">
          <span className="font-icon text-green-500 text-[10rem]">check</span>
          <h2 className="font-semibold text-xl">Enviado!</h2>
          <h6 className="font-light">
            Gracias por su consulta,
            <br /> estaremos respondiendo a la brevedad.
          </h6>
        </div>
      </div>
    </div>
  ) : (
    <form
      ref={form}
      className="card bg-white rounded-xl row-span-2"
      onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value={subject} />
      <div className="card-body">
        <p className="text-2xl font-semibold">Envíenos su consulta</p>
        <label
          htmlFor="nombre"
          className="text-[10px] tracking-widest font-semibold uppercase">
          Nombre
        </label>
        <input
          disabled={isDisabled}
          className="input text-white"
          name="nombre"
          type="text"
          placeholder="nombre"
          required
        />
        <hr />
        <label
          htmlFor="email"
          className="text-[10px] tracking-widest font-semibold uppercase">
          Correo electronico
        </label>
        <input
          disabled={isDisabled}
          className="input text-white"
          name="email"
          type="email"
          placeholder="Le enviaremos un mensaje"
          required
        />
        <hr />
        <label
          htmlFor="tel"
          className="text-[10px] tracking-widest font-semibold uppercase">
          Telefono ó celular
        </label>
        <input
          disabled={isDisabled}
          className="input text-white"
          name="tel"
          type="tel"
          placeholder="En caso de urgencia"
          required
        />
        <hr />
        <label
          htmlFor="tel"
          className="text-[10px] tracking-widest font-semibold uppercase">
          Area
        </label>
        <select
          disabled={isDisabled}
          name="area"
          value={subject}
          onChange={changeSubject}
          className="select text-white"
          required>
          {areas.map(area => (
            <option key={area}>{area}</option>
          ))}
          <option>Otro</option>
        </select>
        <hr />
        <label
          htmlFor="consulta"
          className="text-[10px] tracking-widest font-semibold uppercase">
          Consulta
        </label>
        <textarea
          disabled={isDisabled}
          name="consulta"
          placeholder="Sea conciso, asi lo podremos ayudar."
          className="textarea text-white"
          required
        />
      </div>
      <div className="card-actions justify-end p-4">
        <input
          disabled={isDisabled}
          type="submit"
          value="Enviar"
          className="btn btn-primary"
        />
      </div>
    </form>
  )
}

export default () => {
  return (
    <div
      className="min-h-screen snap-start constrain-on-growth py-20 grid grid-cols-1 md:grid-cols-2 gap-4"
      id="contacto">
      <ContactForm
        onSubmit={e => {
          console.log(e)
        }}
      />

      <div className="card-body rounded-xl bg-white">
        <div className="flex flex-col gap-8">
          <p className="text-2xl font-semibold">Horarios de Atención</p>
          <div>
            <p className="text-xs">Lunes a Viernes</p>
            <hr />
            <p className="text-xl font-semibold text-right">
              9 <span className="font-normal">a</span> 19hs
            </p>
            <p className="text-xs">Sabados</p>
            <hr />
            <p className="text-xl font-semibold text-right">
              10 <span className="font-normal">a</span> 16hs
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-2xl font-semibold">Datos de contacto</p>
            <div className="flex flex-col">
              <p className="text-xs">Telefono</p>
              <hr />
              <span className="text-xl font-semibold gap-1 text-right">
                5253<span className="text-xs font-light">-</span>2789
                <span className="text-xl font-semibold font-icon">call</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.101925606311!2d-58.66534508047211!3d-34.47493850492866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca3690eb57bc3%3A0x2c340646770f9291!2sColombia%201076%2C%20B1618EMD%20El%20Talar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1667701409545!5m2!1ses-419!2sar"
        className="rounded-xl row-span h-full w-full"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
