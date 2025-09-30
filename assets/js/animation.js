let tl = gsap.timeline();
gsap.registerPlugin(SplitText);

const navbarAnimation = () => {
  tl.to("#desktop-hero .navbar", {
    backgroundColor: "#255751",
    scrollTrigger: {
      top: "+=50",
      end: "+=200",
      scrub: 1,
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".navbar", {
    y: -250,
    delay: 1,
  });
};

const heroAnimation = () => {
  tl.from(".right-container", {
    xPercent: 100,
    opacity: 0,
  });

  tl.from(".left-content", {
    xPercent: -100,
    duration: 1,
    opacity: 0,
  });

  gsap.from(".right-content", {
    opacity: 0,
    y: 300,
    delay: 1,
  });
};

const aboutAnimation = () => {
  tl.from("#about .about-img-wrapper", {
    x: -1000,
    scrollTrigger: {
      top: "+=200",
      end: "+=700",
      scrub: 1,
      toggleActions: "play none none reverse",
    },
  });

  tl.from("#about .about-content-wrapper", {
    x: 1500,
    scrollTrigger: {
      top: "+=200",
      end: "+=700",
      scrub: 1,
      toggleActions: "play none none reverse",
    },
  });
};

const serviceAnimation = () => {
  document.fonts.ready.then(() => {
    let serviceHeading = SplitText.create(".service-heading", {
      type: "chars",
      autoSplit: true,
      charsClass: "animate-heading",
      // tag: "span",
      onSplit: (self) => {
        gsap.from(self.chars, {
          y: 200,
          duration: 0.7,
          autoAlpha: 0,
          stagger: 0.2,
          ease: "back",
          scrollTrigger: {
            trigger: "#service",
            start: "top center",
            scroller: "body",
            // scrub: 5,
            toggleActions: "play none none reverse",
          },
        });
      },
    });

    let serviceText = SplitText.create(".service-text", {
      type: "words",
      autoSplit: true,
      wordsClass: "animate-text",
      onSplit: (self) => {
        gsap.from(self.words, {
          y: 200,
          duration: 0.7,
          autoAlpha: 0,
          stagger: 0.2,
          ease: "back",
          scrollTrigger: {
            trigger: "#service",
            start: "top center",
            scroller: "body",
            // scrub: 5,
            toggleActions: "play none none reverse",
          },
        });
      },
    });
  });
};

heroAnimation();
navbarAnimation();
aboutAnimation();
serviceAnimation();
