function initHamburger() {
  var hcoll = null;
  var hmodal = null;
  var hbtn = null;
  var hworkbtn = null;
  hcoll = document.getElementsByClassName("hamburger");
  hmodal = document.getElementById("modal-content");
  hbtn = document.getElementById("hamburger");
  hworkbtn = document.getElementById("hamwork");

  for (var i = 0; i < hcoll.length; i++) {
    hcoll[i].removeEventListener("click", function () {
      this.classList.toggle("hamactive");
    });
    hcoll[i].addEventListener("click", function () {
      this.classList.toggle("hamactive");
    });
  }

  if (hbtn && hmodal) {
    hbtn.removeEventListener("click", function () {
      hmodal.style.display = hmodal.style.display === "flex" ? "none" : "flex";
    });
    hbtn.addEventListener("click", function () {
      hmodal.style.display = hmodal.style.display === "flex" ? "none" : "flex";
    });
  }

  if (hworkbtn && hmodal && hbtn) {
    hworkbtn.removeEventListener("click", function () {
      if (hmodal.style.display === "flex") {
        hmodal.style.display = "none";
        hbtn.classList.toggle("hamactive");
      } else {
        hmodal.style.display = "flex";
      }
    });
    hworkbtn.addEventListener("click", function () {
      if (hmodal.style.display === "flex") {
        hmodal.style.display = "none";
        hbtn.classList.toggle("hamactive");
      } else {
        hmodal.style.display = "flex";
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", initHamburger);

document.addEventListener("swup:contentReplaced", initHamburger);
