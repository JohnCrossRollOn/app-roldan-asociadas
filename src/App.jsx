import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import Info from './components/Info';
import Contact from './components/Contact';

export default () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 ">
      <Nav />
      <div className="py-8 grid grid-auto-cols gap-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:area" element={<Info />} />
        </Routes>
        <Contact />
      </div>
    </div>
  );
};
