function initHamburger() {
  var hcoll = document.getElementsByClassName("hamburger");
  var hmodal = document.getElementById("modal-content");
  var hbtn = document.getElementById("hamburger");
  var hworkbtn = document.getElementById("hamwork");

  for (let i = 0; i < hcoll.length; i++) {
    hcoll[i].addEventListener("click", function () {
      this.classList.toggle("hamactive");
    });
  }

  if (hbtn && hmodal) {
    hbtn.onclick = function () {
      hmodal.style.display = hmodal.style.display === "flex" ? "none" : "flex";
    };
  }

  if (hworkbtn && hmodal && hbtn) {
    hworkbtn.onclick = function () {
      if (hmodal.style.display === "flex") {
        hmodal.style.display = "none";
        hbtn.classList.toggle("hamactive");
      } else {
        hmodal.style.display = "flex";
      }
    };
  }
}

document.addEventListener("DOMContentLoaded", initHamburger);

document.addEventListener("swup:contentReplaced", initHamburger);
