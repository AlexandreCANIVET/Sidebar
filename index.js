// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

const body = document.querySelector(".content");
const sideBar = document.getElementById("side-bar");
const btnStyle = document.getElementById("btn");
let toOpen = true;

function toggleBtnStyle() {
  btnStyle.classList.toggle("toggle-btn");
  btnStyle.classList.toggle("open-btn");
}

btn.addEventListener("click", () => {
  if (toOpen === true) {
    sideBar.style.left = 0;
    toOpen = false;
    toggleBtnStyle();
  } else {
    sideBar.style.left = "-230px";
    toOpen = true;
    toggleBtnStyle();
  }
});

body.addEventListener("click", () => {
  if (toOpen === false) {
    sideBar.style.left = "-230px";
    toOpen = true;
    toggleBtnStyle();
  }
});
