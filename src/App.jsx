import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Landing from './components/Landing'
import Info from './components/Info'
import Contact from './components/Contact'

export default () => {
  return (
    <div
      data-theme="roldanTheme"
      className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden text-slate-800 scroll-smooth">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:area" element={<Info />} />
      </Routes>
      <Contact />
    </div>
  )
}
