'use client'

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const AnimatedComponent = () => {
  const controls = useAnimation();

  const animationVariants = {
    initial: { translateX: 0, translateY: 0, translateZ: 0 },
    animate1: { translateX: 0, translateY: 60, translateZ: 0 },
    animate2: { translateX: 50, translateY: -50, translateZ: 0 },
    animate3: { translateX: -100, translateY: 20, translateZ: 0 },
    animate4: { translateX: -30, translateY: 110, translateZ: 0 },
    animate5: { translateX: 100, translateY: -60, translateZ: 0 },
    animate6: { translateX: -140, translateY: -70, translateZ: 0 },
  };

  useEffect( () => {

      const sequence = async () => {
        await controls.start(animationVariants.animate1);
        await controls.start(animationVariants.animate2);
        await controls.start(animationVariants.animate3);
        await new Promise((resolve) => setTimeout(resolve, 4000)); // Wait for 4 seconds
        await controls.start(animationVariants.animate4);
        await controls.start(animationVariants.animate5);
        await controls.start(animationVariants.animate6);
      };

      sequence();

  })

  // Start the animation sequence when the component mounts

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none blur-3xl backdrop-blur-3xl -z-[1]">
      <motion.div
        className="w-full max-w-[1200px] min-w-[600px] absolute -top-[50%] -left-[50%] lg:-top-[120%] lg:-left-[30%]"
        animate={controls}
      >
        <motion.svg xmlns="http://www.w3.org/2000/svg" className="w-full" fill="none" viewBox="0 0 1699 1666">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full" fill="none" viewBox="0 0 1699 1666"><ellipse cx="849.5" cy="833" fill="url(#paint0_radial_1_19)" fill-opacity="0.22" rx="849.5" ry="833"></ellipse><defs><radialGradient id="paint0_radial_1_19" cx="0" cy="0" r="1" gradientTransform="matrix(0 833 -849.5 0 849.5 833)" gradientUnits="userSpaceOnUse"><stop stop-color="#D9D9D9" stop-opacity="0.69"></stop><stop offset="0.177" stop-color="#D9D9D9" stop-opacity="0.563"></stop><stop offset="1" stop-color="#D9D9D9" stop-opacity="0"></stop></radialGradient></defs></svg>{/* SVG content */}
        </motion.svg>
      </motion.div>

      <motion.div
        className="w-full max-w-[1200px] min-w-[600px] absolute top-[10%] left-0 lg:top-0 lg:left-0"
        animate={controls}
      >
        <motion.svg xmlns="http://www.w3.org/2000/svg" className="w-full" fill="none" viewBox="0 0 1699 1666">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full" fill="none" viewBox="0 0 1699 1666"><ellipse cx="849.5" cy="833" fill="url(#paint0_radial_1_19)" fill-opacity="0.22" rx="849.5" ry="833"></ellipse><defs><radialGradient id="paint0_radial_1_19" cx="0" cy="0" r="1" gradientTransform="matrix(0 833 -849.5 0 849.5 833)" gradientUnits="userSpaceOnUse"><stop stop-color="#D9D9D9" stop-opacity="0.69"></stop><stop offset="0.177" stop-color="#D9D9D9" stop-opacity="0.563"></stop><stop offset="1" stop-color="#D9D9D9" stop-opacity="0"></stop></radialGradient></defs></svg>{/* SVG content */}
        </motion.svg>
      </motion.div>

      <motion.div
        className="w-full max-w-[1200px] min-w-[600px] absolute -bottom-[70%] -right-[40%]"
        animate={controls}
      >
        <motion.svg xmlns="http://www.w3.org/2000/svg" className="w-full" fill="none" viewBox="0 0 1699 1666">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full" fill="none" viewBox="0 0 1699 1666"><ellipse cx="849.5" cy="833" fill="url(#paint0_radial_1_19)" fill-opacity="0.22" rx="849.5" ry="833"></ellipse><defs><radialGradient id="paint0_radial_1_19" cx="0" cy="0" r="1" gradientTransform="matrix(0 833 -849.5 0 849.5 833)" gradientUnits="userSpaceOnUse"><stop stop-color="#D9D9D9" stop-opacity="0.69"></stop><stop offset="0.177" stop-color="#D9D9D9" stop-opacity="0.563"></stop><stop offset="1" stop-color="#D9D9D9" stop-opacity="0"></stop></radialGradient></defs></svg>{/* SVG content */}
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default AnimatedComponent;
