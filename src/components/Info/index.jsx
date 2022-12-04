import { useParams } from 'react-router-dom';

import elements from '../elements';
import Collapsable from '../Utils/Collapsable';

export default () => {
  const { area } = useParams();
  const [title, description, img, questions] = elements.find(
    (item) => item[0] === area
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          loading="lazy"
          crossOrigin="anonymous"
          src={img || ''}
          alt="A service illustration"
          className="h-full w-full object-contain"
        />
        <div>
          <p className="text-[3rem] font-semibold leading-10">{title}</p>
          <br />
          <p className="">{description}</p>
        </div>
        {questions?.map(([question, answer]) => (
          <Collapsable>
            <span>{question}</span>
            <span>{answer}</span>
          </Collapsable>
        ))}
      </div>
    </>
  );
};
