const handleHamBtnClick = () => {
  document.querySelector("#mobile-nav").classList.toggle("hidden");
  document.querySelector("#ham-btn").classList.toggle("hidden");
};

document.body.addEventListener("click", (e) => {
  if (e.target.id === "ham-btn" || e.target.id === "nav-close-btn") {
    handleHamBtnClick();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#copyright").innerHTML = `<p>&copy; Groovy Pups Spa LLC. All rights reserved | ${new Date().getFullYear()}</p>`;
});
