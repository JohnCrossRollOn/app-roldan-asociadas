import Jumbotron from './Jumbotron';
import Services from './Services';

export default () => {
  return (
    <div className="grid grid-auto-cols gap-8 p-4 ">
      <Jumbotron />
      <Services />
    </div>
  );
};
