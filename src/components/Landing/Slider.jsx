import { useState, useRef, useEffect } from 'react';
import { current } from 'tailwindcss/colors';

const Carousel = ({ children }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  console.log(currentIndex);
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="overflow-hidden -m-4">
      <div
        ref={carousel}
        className="flex flex-row gap-4 scrollbar-hide overflow-x-scroll p-4 scroll-smooth snap-x snap-mandatory touch-pan-x"
      >
        {[...children].map((item, index) => (
          <div key={index} className="snap-center snap-normal">
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-end text-[3rem] leading-none gap-4 px-4">
        <button
          onClick={movePrev}
          className="text-slate-800 disabled:opacity-25 disabled:cursor-not-allowed z-10 font-icon"
          disabled={isDisabled('prev')}
        >
          navigate_before
        </button>
        <button
          onClick={moveNext}
          className="text-slate-800 disabled:opacity-25 disabled:cursor-not-allowed z-10 font-icon"
          disabled={isDisabled('next')}
        >
          navigate_next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
