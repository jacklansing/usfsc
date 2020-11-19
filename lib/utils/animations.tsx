export const formSpring = {
  type: 'spring',
  damping: 20,
  stiffness: 120,
};

export const formAnimate = {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 },
};

export const fadeInUpEasing = [0.6, -0.05, 0.01, 0.99];

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: fadeInUpEasing,
    },
  },
};
