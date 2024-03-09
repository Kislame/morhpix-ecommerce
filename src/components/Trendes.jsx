/* eslint-disable no-nested-ternary */
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState, useCallback } from 'react';

function Trendes() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleIndex = useCallback(
    (direction) => {
      if (direction === 'left') {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    },
    // eslint-disable-next-line comma-dangle
    [slideIndex]
  );

  return (
    <div className="w-full h-screen flex  relative overflow-hidden  ">
      <LeftArrow direction="left" handleIndex={handleIndex} />
      <Wrapper slideIndex={slideIndex} />
      <RightArrow direction="right" handleIndex={handleIndex} />
    </div>
  );
}

function Wrapper({ slideIndex }) {
  return (
    <div
      className={`h-full flex  ${slideIndex === 0 ? 'translate-x-0' : ''}
      ${slideIndex === 1 ? 'translate-x-[-100vw]' : ''}  ${
        slideIndex === 2 ? 'translate-x-[-200vw]' : ''
      }   transition-all duration-500 `}
    >
      <div className="md:flex block    items-center  w-screen h-screen bg-brand-light">
        <div className="flex-1 flex items-center justify-evenly  h-[480px]  md:h-full">
          <img
            className="md:h-[70%]  max-h-[80%] "
            src="../src/assets/images/item-6.jpg"
            alt="1"
          />
        </div>
        <div className="flex-1  md:text-start text-center md:p-12 p-8 ">
          <h2
            className="text-4xl font-open font-semibold text-brand-dark
            "
          >
            white dress shirt
          </h2>
          <p className="text-lg lg:my-12 my-8 tracking-wider text-brand">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit..
          </p>
          <button
            type="button"
            className="bg-brand text-white py-4 px-8 tracking-widest font-open font-semibold"
          >
            BUY NOW
          </button>
        </div>
      </div>
      <div className="md:flex  block items-center  w-screen h-screen bg-violet-200 ">
        <div className="flex-1 flex items-center justify-evenly   h-[480px]  md:h-full ">
          <img
            className="md:h-[70%] max-h-[80%] "
            src="../src/assets/images/brand-1.jpg"
            alt="1"
          />
        </div>
        <div className="flex-1 md:p-12 p-8 md:text-start text-center">
          <h2
            className="text-4xl font-open font-semibold text-neutral-900
            "
          >
            white dress shirt
          </h2>
          <p className="text-lg my-12 tracking-wider text-neutral-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit..
          </p>
          <button
            type="button"
            className="bg-violet-500 text-white py-4 px-8 tracking-widest font-open font-semibold"
          >
            BUY NOW
          </button>
        </div>
      </div>
      <div className="md:flex  block items-center  w-screen h-screen bg-white">
        <div className="flex-1 flex items-center justify-evenly   h-[480px]  md:h-full">
          <img
            className="md:h-[70%] max-h-[80%] "
            src="../src/assets/images/fav.jpg"
            alt="1"
          />
        </div>
        <div className="flex-1 md:p-12 p-8 md:text-start text-center ">
          <h2
            className="text-4xl font-open font-semibold text-black
            "
          >
            white dress shirt
          </h2>
          <p className="text-lg my-12 tracking-wider text-neutral-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit..
          </p>
          <button
            type="button"
            className="bg-orange-600 text-white py-4 px-8 tracking-widest font-open font-semibold"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

function LeftArrow({ direction, handleIndex }) {
  return (
    <button
      type="button"
      onClick={() => handleIndex(direction)}
      className="bg-white rounded-full w-12 h-12 flex items-center justify-center absolute  top-0 bottom-0 m-auto  z-[2] left-4  cursor-pointer opacity-70"
    >
      <ArrowLeftIcon />
    </button>
  );
}

function RightArrow({ direction, handleIndex }) {
  return (
    <button
      type="button"
      onClick={() => handleIndex(direction)}
      onFocus={() => handleIndex(direction)}
      className="bg-white rounded-full w-12 h-12  flex items-center justify-center absolute top-0 bottom-0 m-auto z-2 right-4 cursor-pointer opacity-70"
    >
      <ArrowRightIcon />
    </button>
  );
}

export default Trendes;
