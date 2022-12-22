import { useParams, useNavigate } from 'react-router-dom'

import elements from '../elements'
import Collapsable from '../Utils/Collapsable'

export default () => {
  const { area } = useParams()
  const navigate = useNavigate()
  const [title, description, img, questions] = elements.find(
    item => item[0] === area
  )

  return (
    <>
      <div className="flex flex-row justify-start">
        <button
          className="text-sm font-extrabold"
          onClick={() => navigate('/')}>
          Volver&#9166;
        </button>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 items-center">
        <img
          loading="lazy"
          crossOrigin="anonymous"
          src={img}
          alt="A service illustration"
          className="h-[50vh] w-full object-contain"
        />
        <div>
          <p className="text-[3rem] font-semibold leading-10">{title}</p>
          <br />
          <p className="">{description}</p>
        </div>
      </div>
      <div className="grid gap-2">
        {questions?.map(([question, answer], index) => (
          <Collapsable key={index}>
            <span className="font-semibold">{question}</span>
            <span className="text-sm">{answer}</span>
          </Collapsable>
        ))}
      </div>
    </>
  )
}
