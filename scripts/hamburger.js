// function initHamburger() {
//   var hcoll = document.getElementsByClassName("hamburger");
//   var hmodal = document.getElementById("modal-content");
//   var hbtn = document.getElementById("hamburger");
//   var hworkbtn = document.getElementById("hamwork");

//   for (var i = 0; i < hcoll.length; i++) {
//     hcoll[i].addEventListener("click", function () {
//       this.classList.toggle("hamactive");
//     });
//   }

//   if (hbtn && hmodal) {
//     hbtn.addEventListener("click", function () {
//       hmodal.style.display = hmodal.style.display === "flex" ? "none" : "flex";
//     });
//   }

//   if (hworkbtn && hmodal && hbtn) {
//     hworkbtn.addEventListener("click", function () {
//       if (hmodal.style.display === "flex") {
//         hmodal.style.display = "none";
//         hbtn.classList.toggle("hamactive");
//       } else {
//         hmodal.style.display = "flex";
//       }
//     });
//   }
// }

// document.addEventListener("DOMContentLoaded", initHamburger);

// document.addEventListener("swup:contentReplaced", initHamburger);

function initHamburgerDelegated() {
  // Only attach once
  if (initHamburgerDelegated.attached) return;
  initHamburgerDelegated.attached = true;

  document.body.addEventListener("click", function(e) {
    // Toggle hamburger active class
    if (e.target.classList.contains("hamburger")) {
      e.target.classList.toggle("hamactive");
    }

    // Toggle modal via main hamburger button
    if (e.target.id === "hamburger") {
      var modal = document.getElementById("modal-content");
      if (!modal) return;
      modal.style.display = modal.style.display === "flex" ? "none" : "flex";
    }

    // Toggle modal via work button
    if (e.target.id === "hamwork") {
      var modal = document.getElementById("modal-content");
      var btn = document.getElementById("hamburger");
      if (!modal || !btn) return;
      if (modal.style.display === "flex") {
        modal.style.display = "none";
        btn.classList.toggle("hamactive");
      } else {
        modal.style.display = "flex";
      }
    }
  });
}

// Run once on page load
document.addEventListener("DOMContentLoaded", initHamburgerDelegated);

// Run after Swup page replacement (safe, but delegated listeners are persistent)
document.addEventListener("swup:contentReplaced", initHamburgerDelegated);
