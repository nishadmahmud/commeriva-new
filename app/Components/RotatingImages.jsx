"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RotatingImages = forwardRef((props, ref) => {
  const {
    images, // Array of image imports
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2000,
    loop = true,
    auto = true,
    mainClassName,
    imgClassName,
    onNext,
    ...rest
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChange = useCallback(
    (newIndex) => {
      setCurrentIndex(newIndex);
      if (onNext) onNext(newIndex);
    },
    [onNext]
  );

  const next = useCallback(() => {
    const nextIndex =
      currentIndex === images.length - 1
        ? loop
          ? 0
          : currentIndex
        : currentIndex + 1;
    if (nextIndex !== currentIndex) {
      handleIndexChange(nextIndex);
    }
  }, [currentIndex, images.length, loop, handleIndexChange]);

  useImperativeHandle(ref, () => ({ next }), [next]);

  useEffect(() => {
    if (!auto) return;
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto]);

  return (
    <motion.div
      className={cn("flex justify-center items-center relative", mainClassName)}
      {...rest}
    >
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.div
          key={currentIndex}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          className="absolute"
        >
          <Image
          fill
            src={images[currentIndex]}
            alt={`Rotating logo ${currentIndex}`}
            className={cn("w-32 h-32 object-contain", imgClassName)}
           unoptimized/>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
});

RotatingImages.displayName = "RotatingImages";
export default RotatingImages;
