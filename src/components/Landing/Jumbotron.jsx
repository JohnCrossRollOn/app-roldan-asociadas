import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

import elements from '../elements'

const TextLoop = ({ texts }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1
      setIndex(next % texts.length)
    }, 2 * 1000)
  }, [index, setIndex, texts])

  return (
    <div>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          layout
          className="w-fit transition-all flex"
          variants={{
            enter: {
              translateY: 20,
              opacity: 0,
              height: 0,
            },
            center: {
              translateY: 0,
              opacity: 1,
            },
            exit: {
              translateY: -20,
              opacity: 0,
              height: 0,
            },
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            translateY: { type: 'spring', stiffness: 1000, damping: 200 },
            opacity: { duration: 0.5 },
          }}>
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export default () => {
  return (
    <div
      className="hero h-screen snap-start"
      style={{ backgroundImage: `url(${elements.jumbotron.image})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-left text-neutral-content w-full flex justify-start p-4">
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-semibold text-orange-500 bg-black px-4 w-fit">
            {elements.jumbotron.subtitle}
          </div>
          <h2 className="text-4xl md:text-[4rem] text-white font-semibold ">
            {elements.jumbotron.title}
          </h2>
          <h2 className="text-4xl md:text-[4rem] text-white font-semibold ">
            <TextLoop texts={elements.services.map(i => i[0])} />
          </h2>
        </div>
      </div>
    </div>
  )
}
