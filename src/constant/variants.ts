export const popUp = {
  initial: {
    scale: 0,
  },
  pop: {
    scale: [0, 0.5, 1, 1.25, 0.85, 1],
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 1,
    },
  },
};

export const cellPopUp = {
  initial: {
    scale: 0,
  },
  pop: {
    scale: 1,
    rotate: [-30, 30, -15, 15, 0],
    transition: {
      type: "spring",
      damp: 3,
      stiffness: 100,
      duration: 0.3,
    },
  },
};

export const backDrop = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 3,
    y: -700,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "linear",
      ease: "easeIn",
    },
  },
};
