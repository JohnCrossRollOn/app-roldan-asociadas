import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import MoreInfo from './components/MoreInfo';
import Contact from './components/Contact';

export default () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 ">
      <Nav />
      <div className="py-8 grid grid-auto-cols gap-8 p-4 sm:p-8 md:p-16 lg:p-32 xl:p-64">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/masInfo/:area" element={<MoreInfo />} />
        </Routes>
        <Contact />
      </div>
    </div>
  );
};
