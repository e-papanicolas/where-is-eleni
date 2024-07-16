import anime from "animejs/lib/anime.js";

const textWrapper = document.querySelector(".animate") as HTMLElement;
if (textWrapper.textContent) {
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>",
  );
}

anime
  .timeline({ loop: true })
  .add({
    targets: ".animate .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".animate",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
