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
