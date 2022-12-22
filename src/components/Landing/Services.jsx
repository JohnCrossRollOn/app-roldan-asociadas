import { Link } from "react-router-dom";
import Slider from "../Utils/Slider";

import Hr from "../Utils/Hr";
import Card from "../Utils/Card";
import elements from "../elements";

const CardContents = (props) => {
  const [title, description, img] = props.content;
  return (
    <div>
      <img
        loading="lazy"
        crossOrigin="anonymous"
        src={img || ""}
        alt="A service illustration"
        className="h-[10rem] object-contain w-full"
      />
      <div>
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-xs bg-gradient-to-b from-slate-600 text-transparent bg-clip-text">
          {description}
        </p>
      </div>
      <Link
        to={title}
        className="absolute bottom-[1rem] flex justify-center font-bold bg-primary w-fit p-2 px-3 rounded-full shadow-md"
      >
        Saber mas
      </Link>
    </div>
  );
};

export default () => {
  return (
    <>
      <div />
      <Hr>SERVICIOS</Hr>
      <div id="servicios" />
      <Slider>
        {elements.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden h-[50vh] sm:h-[40vh] md:w-[30vw]"
          >
            <CardContents content={item} />
          </Card>
        ))}
      </Slider>
    </>
  );
};
