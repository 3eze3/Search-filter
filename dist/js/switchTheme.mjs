import { moveImagesBackground } from "./moveImagesBackground.mjs";

export function switchTheme() {
  const $icon = document.querySelector(".main__icon");
  const $body = document.body;
  let isDark = false;
  let animationOn = false;

  function toggleIcon() {
    $icon.classList.toggle("main__icon--active");
    isDark = !isDark;
  }

  function toggleBackgroundImage() {
    const backgroundImage = isDark
      ? "linear-gradient(#506cd1,rgb(12, 81, 81),rgb(58, 108, 126))"
      : "linear-gradient(#63c0ae, rgb(0, 255, 255), rgb(24, 112, 109)";
    gsap.to($body, {
      backgroundImage,
      duration: 0.5,
    });
  }

  function toggleAnimation() {
    const animation = moveImagesBackground();
    if (animationOn) {
      animation.pause();
      animationOn = false;
    } else {
      animation.restart();
      animationOn = true;
    }
  }

  $icon.addEventListener("click", () => {
    toggleIcon();
    toggleBackgroundImage();
    toggleAnimation();
  });
}
