gsap.from(".header__logo, .header__author", {
  duration: 1.2,
  y: () => Math.random() * 350 - 220,
  opacity: 0,
  ease: "bounce",
  stagger: 0.55,
});
// Animación de las imágenes
const movingImages = gsap.utils.toArray(".foreground__image");

const animation = () => {
  movingImages.forEach(image => {
    gsap.set(image, {
      x: gsap.utils.random(-500, 1000),
      y: gsap.utils.random(-500, 1000),
      rotation: gsap.utils.random(-45, 45),
      opacity: 0.8,
      scale: gsap.utils.random(0.7, 2),
    });

    gsap.to(image, {
      x: gsap.utils.random(-300, 1000),
      y: gsap.utils.random(-300, 1000),
      rotation: gsap.utils.random(-45, 45),
      opacity: 0.3,
      scale: gsap.utils.random(0.6, 1.9),
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: gsap.utils.random(3, 7),
      delay: gsap.utils.random(0, 2),
    });
  });
};
// animation()
