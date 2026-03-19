let currentIndex = 0;
const items = document.querySelectorAll(".item");

prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  }

  updateSlider();
});
prevBtn.addEventListener("click", () => {
  alert("clicked");
});
function updateSlider() {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}