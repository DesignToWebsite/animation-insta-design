export const page = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: .2,
    },
  },
  
};


export const bottoleAnim = {
    hidden : {
        y : '-16em',
    },
    show : {
        y : 0,
        transition:{
            duration:1,
            transition:'easeOut',
            when:"beforeChildren",
        }
    },
}

export const capAnim =  {
    hidden : {
        y : '100px',
    },
    show : {
        y : 0,
        transition:{
            duration:1,
            transition:'easeOut',
            when:"beforeChildren",
        }
    },
}

export const description = {
    hidden : {
        opacity : 0,
        // height : 0,
        scale : 0,
    },
    show : {
        opacity: 1,
        // height : 'auto',
        scale : 1,
        transition:{
            duration:1.5,
            // delayChildren: 1,
            transition:'easeIn',
        }
    }
}

export const show = {
    // hidden : {
    //     opacity : 0,
    //     // height : 0,
    // },
    // show : {
    //     opacity: 1,
    //     // height : 'auto',
    //     transition:{
    //         duration:5,
    //         transition:'easeOut',
    //     }
    // }
}

export const down = {
   hidden : {
        // opacity : 0,
        // height : 0,
        y : 0,
    },
    show : {
        y : 10,
        // opacity: 1,
        // height : 'auto',
        transition:{
            duration:5,
            transition:'easeOut',
        }
    }
}