const whiteBeam = document.querySelector('.white-beam');
const rainbowBeam = document.querySelector('.rainbow-beam');

function animateWhiteBeam() {
  gsap.fromTo(
    whiteBeam,
    { xPercent: -100, opacity: 0 },
    {
      duration: 1,
      xPercent: 0,
      opacity: 1,
      onComplete: () => {
        animateRainbowBeam();
      },
    }
  );
}

function animateRainbowBeam() {
  gsap.fromTo(
    rainbowBeam,
    { scaleX: 0, opacity: 0 },
    {
      duration: 2,
      scaleX: 1,
      opacity: 1,
      ease: 'power1.in',
      onComplete: () => {
        gsap.to(rainbowBeam, { duration: 1, opacity: 0 });
        animateWhiteBeam();
      },
    }
  );
}

animateWhiteBeam();
