import { motion } from 'framer-motion'

import elements from '../elements'

export default () => {
  return (
    <div
      className="hero h-screen snap-start"
      style={{ backgroundImage: `url(${elements.jumbotron.image})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-left text-neutral-content">
        <motion.div>
          <h2 className="mb-5 text-[4rem] text-white font-semibold">
            {elements.jumbotron.title}
          </h2>
          <div className="text-2xl font-semibold text-orange-500">
            {elements.jumbotron.subtitle}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
