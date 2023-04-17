export const contentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
      //   staggerChildren : 0.3
      delayChildren: 2,
    },
  },
};

export const animatedBgVariants:any = {
  initialll: {
    // height: 10,
    width: "90%",
    backgroundColor: "#25adff",
    opacity: 0,
    scale:0
  },
  animatee : {
    opacity : 1,
    scale : 1,
    transition : {
      delay : 0.3,
      duration : 0.6,
    }
  },
  animateeTwo : {
    opacity : 1,
    scale : 1,
    transition : {
      delay : 0.7,
      duration : 0.6,
    }
  },
  hover: {
    opacity:1,
    height: "46px",
    transition: {
      type: "spring",
    },
  },
};
