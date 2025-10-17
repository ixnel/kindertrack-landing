import { useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

export default function Features() {
  const features = [
    { icon: 'bi-person-workspace', title: 'Teacher Dashboard', description: 'Track student progress, add milestones, and communicate with parents in real-time' },
    { icon: 'bi-people-fill', title: 'Parent Portal', description: "Monitor your child's development and stay connected with teachers" },
    { icon: 'bi-bar-chart-line-fill', title: 'Progress Analytics', description: 'Visual charts and reports showing developmental progress across all areas' },
    { icon: 'bi-chat-dots-fill', title: 'Real-time Messaging', description: 'Direct communication between teachers and parents with instant notifications' },
  ];

  // Duplicate multiple times for seamless infinite loop
  const loopedFeatures = [...features, ...features, ...features];

  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const SPEED = 0.5; // pixels per frame, adjust sliding speed

  // Smooth infinite loop animation
  useAnimationFrame(() => {
    const containerWidth = containerRef.current?.scrollWidth / 3 || 1000; // width of one set
    let current = x.get();
    current -= SPEED; // move left
    if (current <= -containerWidth) current += containerWidth; // wrap around seamlessly
    x.set(current);
  });

  return (
    <section id="features" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium font-dmsans text-gray-700 inline-block">
            Features
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden flex justify-center">
          <motion.div
            ref={containerRef}
            className="flex gap-8 cursor-grab"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -9999, right: 9999 }}
            dragElastic={0.2}
            whileTap={{ cursor: "grabbing" }}
            onDrag={(event, info) => {
              x.set(x.get() + info.delta.x); // smooth drag
            }}
          >
            {loopedFeatures.map((feature, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white border-2 border-gray-200 rounded-3xl p-6 flex flex-col items-center text-center shadow-md"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`bi ${feature.icon} text-3xl text-blue-900`}></i>
                </div>
                <h3 className="text-lg font-dmsans font-semibold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-700 font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
