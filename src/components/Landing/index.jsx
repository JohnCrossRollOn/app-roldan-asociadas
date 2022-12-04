import Jumbotron from './Jumbotron';
import Services from './Services';
import Ourselves from './Ourselves';
import Contact from './Contact';

export default () => {
  return (
    <div className="grid grid-auto-cols gap-8 p-4 sm:p-8 md:p-16 lg:p-32 xl:p-64">
      <Jumbotron />
      <Services />
      <Ourselves />
      <Contact />
    </div>
  );
};
