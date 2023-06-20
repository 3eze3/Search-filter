// ----------------------- Animación de las imágenes -----------------------

const moveImagesBackground = () => {
  const movingImages = gsap.utils.toArray(".foreground__image");
  movingImages.forEach(image => {
    gsap.set(image, {
      x: gsap.utils.random(-500, 1000),
      y: gsap.utils.random(-500, 1000),
      rotation: gsap.utils.random(-45, 45),
      opacity: 0,
      scale: gsap.utils.random(0.7, 2),
    });

    gsap.to(image, {
      x: gsap.utils.random(-500, 1000),
      y: gsap.utils.random(-500, 1000),
      rotation: gsap.utils.random(-45, 45),
      opacity: 0.3,
      scale: gsap.utils.random(0.6, 1.9),
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: gsap.utils.random(3, 7),
      delay: gsap.utils.random(0, 1),
    });
  });
};
document.addEventListener("DOMContentLoaded", () => {
  animationHeader();
  switchTheme();
});

// ----------------------- Animacion del header -----------------------
function animationHeader() {
  let tl = gsap.timeline();
  tl.from(".header", {
    duration: 1.2,
    y: () => Math.random() * -350 - 220,
    opacity: 0,
    ease: "circ.out",
  }).from(".header__logo", {
    duration: 0.75,
    y: -150,
    opacity: 0.5,
    ease: "bounce",
  });
}

// ----------------------- Animation Button theme dark/light -----------------------
function switchTheme() {
  const $icon_header = document.querySelector(".header__icon");
  const $links_social = document.querySelectorAll(".footer__link");
  const $body = document.body;
  let isDark = false;
  $icon_header.addEventListener("click", () => {
    $icon_header.classList.toggle("header__icon--active");
    isDark = !isDark;
    const backgroundImage = isDark
      ? "linear-gradient(#506cd1,rgb(12, 81, 81),rgb(58, 108, 126))"
      : "linear-gradient(#000, rgb(0, 255, 255), rgb(24, 112, 109)";
    gsap.to($body, {
      backgroundImage,
      duration: 0.3,
    });
    $links_social.forEach(link => link.classList.toggle("footer__active"));
    moveImagesBackground();
  });
}
