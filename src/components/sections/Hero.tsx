import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  // Transform values for layered scroll-driven reveal
  // Image 1: starts at 0%, moves to -100% (disappears upward)
  const image1Y = useTransform(scrollYProgress, [0, 0.33], ["0%", "-100%"]);
  
  // Image 2: starts at 0% (hidden beneath image 1), stays at 0%, then moves to -100%
  const image2Y = useTransform(scrollYProgress, [0, 0.33, 0.66], ["0%", "0%", "-100%"]);
  
  // Image 3: starts at 0% (hidden beneath), revealed as image 2 moves up
  const image3Y = useTransform(scrollYProgress, [0, 0.66], ["0%", "0%"]);

  const heroImages = [
    'https://images.unsplash.com/photo-1601926299866-6a5c9bfa6be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZmFzaGlvbiUyMG1pbmltYWwlMjBlZGl0b3JpYWwlMjBtb2RlbCUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzY4MzkxMzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1761555687814-15a0cea591ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwbWluaW1hbGlzdCUyMHN0cmVldCUyMHN0eWxlfGVufDF8fHx8MTc2ODM5MTQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1763935723999-870c0e2857b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsJTIwc3R1ZGlvJTIwc2hvdCUyMGJ3fGVufDF8fHx8MTc2ODM5MTQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];

  return (
    <div ref={containerRef} className="relative" style={{ height: '300vh', position: 'relative' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Image 3 - Bottom layer */}
        <motion.div
          className="absolute inset-0 w-full h-screen"
          style={{ y: image3Y }}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroImages[2]}')` }}
          />
        </motion.div>

        {/* Image 2 - Middle layer */}
        <motion.div
          className="absolute inset-0 w-full h-screen"
          style={{ y: image2Y }}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroImages[1]}')` }}
          />
        </motion.div>

        {/* Image 1 - Top layer */}
        <motion.div
          className="absolute inset-0 w-full h-screen"
          style={{ y: image1Y }}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroImages[0]}')` }}
          />
        </motion.div>

      </div>
    </div>
  );
};