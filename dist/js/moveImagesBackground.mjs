export const moveImagesBackground = () => {
  const movingImages = gsap.utils.toArray(".foreground__image");
  const tl = gsap.timeline();
  movingImages.forEach(image => {
    const duration = gsap.utils.random(3, 7);
    const delay = gsap.utils.random(0, 1);
    const x = gsap.utils.random(-500, 1000);
    const y = gsap.utils.random(-500, 1000);
    const scale = gsap.utils.random(0.6, 1.9);
    const rotation = gsap.utils.random(-45, 45);
    const opacity = 0.3;
    const repeat = -1;
    const yoyo = true;
    const ease = "power1.out";
    tl.to(image, {
      duration,
      delay,
      x,
      y,
      scale,
      rotation,
      opacity,
      repeat,
      yoyo,
      ease,
    });
  });
  return tl;
};
