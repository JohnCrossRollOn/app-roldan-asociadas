import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';

export default () => {
  return (
    <div className="min-h-screen w-screen bg-slate-100 text-slate-800">
      <Nav />
      <div className="my-8">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </div>
  );
};
