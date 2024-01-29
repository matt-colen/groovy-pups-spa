import { services } from "./services.js";

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
  document.querySelector(
    "#copyright"
  ).innerHTML = `<p>&copy; Groovy Pups Spa LLC. All rights reserved | ${new Date().getFullYear()}</p>`;
});

const getServicesLists = (servicesArr) => {
  let bathingList = "";
  let addOnList = "";

  servicesArr.forEach((service) => {
    if (service.type === "bathing") {
      bathingList += `<li>${service.name} - $${service.price}</li>`;
    } else {
      addOnList += `<li>${service.name} - $${service.price}</li>`;
    }
  });

  renderServicesLists(bathingList, addOnList);
};

const renderServicesLists = (bathingHTML, addOnHTML) => {
  document.querySelector("#bathing-prices-list").innerHTML = bathingHTML;
  document.querySelector("#add-on-prices-list").innerHTML = addOnHTML;
};

getServicesLists(services);
