import gsap from "gsap";

var tl = gsap.timeline({ defaults: { duration: 0.5, delay: 0.5 } });
tl.fromTo(
  ".TL-move-top",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
  }
);

tl.fromTo(
  ".TL-move-right",
  {
    x: -50,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    stagger: 0.2,
  }
);

tl.fromTo(
  ".TL-move-left",
  {
    x: 50,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
  }
);
tl.fromTo(
  ".TL-move-bottom",
  {
    y: -50,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
  }
);

export default tl;
