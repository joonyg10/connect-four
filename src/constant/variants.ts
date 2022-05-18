export const swirlFadeOut = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: [0, 0.5, 1, 1.25, 0.85, 1],
    transition: {
      type: "tween",
      duration: 0.3,
      staggerChildren: 1,
    },
  },

  exit: {
    originX: 0.5,
    originY: 1.5,
    scale: [1.25, 0.85, 1, 0.75, 0.5, 0.25, 0],
    rotate: [0, -60, -120, -180, -240, -300, -360],
    transition: {
      type: "linear",
      ease: "easeInOut",
      duration: 0.5,
      when: "afterChildren",
    },
  },
};

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
