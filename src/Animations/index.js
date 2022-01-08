import gsap from "gsap";

var tl = gsap.timeline({ defaults: { duration: 0.5 } });
tl.to(".stagger-500", {
  stagger: 0.5,
});
tl.fromTo(
  ".TL-move-top",
  {
    y: -100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
  }
);

tl.fromTo(
  ".TL-move-right",
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
  }
);

tl.fromTo(
  ".TL-move-left",
  {
    x: 101,
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
    y: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
  }
);

export default tl;
