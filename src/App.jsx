import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';

export default () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </div>
  );
};
