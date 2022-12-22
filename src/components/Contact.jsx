import { useState } from 'react'

const ContactForm = () => {
  const [subject, setSubject] = useState('Gestoria del Automotor')
  const changeSubject = ({ target }) => setSubject(target.value)
  return (
    <form
      className="card bg-white rounded-xl row-span-2"
      action="https://formsubmit.co/1350b51c7002345b2c33a9198df1669c"
      method="POST">
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_captcha" value="false" />
      <div className="card-body">
        <p className="text-2xl font-semibold">Evienos su consulta</p>
        <label
          htmlFor="nombre"
          className="text-[10px] tracking-widest font-semibold uppercase">
          Nombre
        </label>
        <input
          className="input text-white"
          name="nombre"
          id="nombre"
          type="text"
          placeholder="Como dirijirnos hacia usted"
          required
        />
        <hr />
        <label
          htmlFor="email"
          className="text-[10px] tracking-widest font-semibold uppercase">
          Correo electronico
        </label>
        <input
          className="input text-white"
          name="email"
          id="email"
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
          className="input text-white"
          name="tel"
          id="tel"
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
          name="area"
          id="area"
          value={subject}
          onChange={changeSubject}
          className="select text-white"
          required>
          <option>Gestoria del Automotor</option>
          <option>Accidentes de Transito</option>
          <option>Infracciones de Transito</option>
          <option>Jubilaciones y Pensiones</option>
          <option>Accidentes Laborales (ART)</option>
          <option>Escrituracion y Usucapion</option>
          <option>Divorcios, Familia y Sucesiones</option>
          <option>Otro</option>
        </select>
        <hr />
        <label
          htmlFor="consulta"
          className="text-[10px] tracking-widest font-semibold uppercase">
          Consulta
        </label>
        <textarea
          id="consulta"
          name="consulta"
          placeholder="Sea conciso, asi lo podremos ayudar."
          className="textarea text-white"
          required
        />
        <input
          className="input text-white"
          type="hidden"
          name="_template"
          value="table"
        />
      </div>
      <div className="card-actions justify-end p-4">
        <input type="submit" value="Enviar" className="btn btn-primary " />
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
          <p className="text-2xl font-semibold">Horarios de Atencion</p>
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
