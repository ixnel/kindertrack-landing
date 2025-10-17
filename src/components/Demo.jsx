import { useState } from "react";
import { motion } from "framer-motion";

import P1 from "../assets/p1.png";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import P4 from "../assets/p4.png";
import P5 from "../assets/p5.png";

export default function Demo() {
  const screenshots = [
    { label: "Login Screen", img: P1 },
    { label: "Dashboard", img: P2 },
    { label: "Student Progress", img: P3 },
    { label: "Messaging", img: P4 },
    { label: "Analytics", img: P5 },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const slideWidth = 200;
  const centerWidth = 300;
  const slideHeight = 450;
  const centerHeight = 600;
  const spacing = 40;

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % screenshots.length);
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  const getOffset = (index) => {
    let offset = index - activeSlide;
    const half = Math.floor(screenshots.length / 2);
    if (offset > half) offset -= screenshots.length;
    if (offset < -half) offset += screenshots.length;
    return offset;
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-medium font-dmsans text-gray-700 inline-block">
            Demo
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center overflow-hidden">
          <motion.div
            className="flex justify-center items-center w-full h-[650px]"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.x < -50) handleNext();
              if (info.offset.x > 50) handlePrev();
            }}
          >
            {screenshots.map((item, index) => {
              const offset = getOffset(index);
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={index}
                  className="absolute cursor-grab flex items-center justify-center"
                  animate={{
                    x: offset * (slideWidth + spacing),
                    width: isCenter ? centerWidth : slideWidth,
                    height: isCenter ? centerHeight : slideHeight,
                    scale: isCenter ? 1 : 0.9,
                    opacity: Math.abs(offset) > 2 ? 0 : 1,
                  }}
                  transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                  style={{ zIndex: isCenter ? 10 : 5 }}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-contain rounded-3xl"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Pagination with prev/next */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-lg">
            {/* Previous button (desktop only) */}
            <button
              onClick={handlePrev}
              className="hidden md:flex px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              &lt;
            </button>

            {/* Pagination dots */}
            {screenshots.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className="px-4 py-1 rounded-full"
                animate={{
                  backgroundColor: index === activeSlide ? "#27418C" : "#F3F4F6",
                  color: index === activeSlide ? "#fff" : "#000",
                  scale: index === activeSlide ? 1.2 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                layout
              >
                {index + 1}
              </motion.button>
            ))}

            {/* Next button (desktop only) */}
            <button
              onClick={handleNext}
              className="hidden md:flex px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
