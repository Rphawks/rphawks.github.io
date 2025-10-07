let cursor = document.querySelector(".ballcursor");

if (!cursor) {
cursor = document.createElement("div");
cursor.className = "ballcursor";

document.body.appendChild(cursor);

const svgData = `
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFA599"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        >
        <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" />
    </svg>
`;
cursor.innerHTML = svgData;
}

const hoverables = document.querySelectorAll("a, button, .stackflex-container, .collapsible, .vmodalclose");

let hasMoved = false;

document.body.addEventListener("mousemove", (e) => {
if (!hasMoved) {
    hasMoved = true;
    gsap.to(cursor, {
    x: e.clientX - 10,
    y: e.clientY - 10,
    duration: 0,
});
gsap.to(cursor, {
    opacity: 1,
    duration: 0.4,
    ease: "power2.out"
});
} else {
    gsap.to(cursor, {
    x: e.clientX - 10,
    y: e.clientY - 10,
    duration: 0.2,
    });
}
});

hoverables.forEach((el) => {
el.addEventListener("mouseenter", () =>
    gsap.to(cursor, { scale: 1.25, duration: 0.3 })
);
el.addEventListener("mouseleave", () =>
    gsap.to(cursor, { scale: 1, duration: 0.3 })
);
});