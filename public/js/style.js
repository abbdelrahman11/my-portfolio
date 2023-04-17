window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidePreloader")
);
//check if there local storage color option

let maincolor = localStorage.getItem("color-option");

if (maincolor !== null) {
  

  document.documentElement.style.setProperty("--main-color", maincolor);

  // remove active class

  document.querySelectorAll(".color-list li").forEach((element) => {
    element.classList.remove("active");

    if (element.dataset.color === maincolor) {
      element.classList.add("active");
    }
  });
}
//setting box

document.querySelector(".navbtn").onclick = function () {
  
  document.querySelector(".nav-bar").classList.toggle("open-nav");
};

//setting box

document.querySelector(".toggle-setting").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
};
// switch colors

const colorLi = document.querySelectorAll(".color-list li ");

colorLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    //set local storage

    localStorage.setItem("color-option", e.target.dataset.color);

    //Remove active class

    handele(e);
  });
});

function handele(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  ev.target.classList.add("active");
}

const DARKMODE = document.querySelectorAll(".Dark-Mode span");

DARKMODE.forEach((span) => {
  span.addEventListener("click", (e) => {
    handele(e);

    if (e.target.dataset.background === "yes") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
});
