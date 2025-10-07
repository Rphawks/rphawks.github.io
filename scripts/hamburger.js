document.addEventListener("DOMContentLoaded", () => {
  const hcoll = document.getElementsByClassName("hamburger");
  const hmodal = document.getElementById("modal-content");
  const hbtn = document.getElementById("hamburger");
  const hworkbtn = document.getElementById("hamwork");

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
});
