const handleHamBtnClick = () => {
  document.querySelector("#mobile-nav").classList.toggle("hidden");
  document.querySelector("#ham-btn").classList.toggle("hidden");
};

document.body.addEventListener("click", (e) => {
  if (e.target.id === "ham-btn" || e.target.id === "nav-close-btn") {
    handleHamBtnClick();
  }
});
