function initHamburgerDelegated() {
  if (initHamburgerDelegated.attached) return;
  initHamburgerDelegated.attached = true;

  document.body.addEventListener("click", function(e) {
    if (e.target.classList.contains("hamburger")) {
      e.target.classList.toggle("hamactive");
    }

    if (e.target.id === "hamburger") {
      var modal = document.getElementById("modal-content");
      if (!modal) return;
      modal.style.display = modal.style.display === "flex" ? "none" : "flex";
    }

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

document.addEventListener("DOMContentLoaded", initHamburgerDelegated);

document.addEventListener("swup:contentReplaced", initHamburgerDelegated);
