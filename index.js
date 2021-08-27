const toggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const bars = document.querySelector(".bars");
const times = document.querySelector(".times");

window.onload = () => {
	times.style.display = "none";
	showcase.classList.remove("active");
	toggle.classList.remove("active");
};

bars.addEventListener("click", () => {
	showcase.classList.add("active");
	toggle.classList.add("active");
	bars.style.display = "none";
	times.style.display = "inline-block";
});

times.addEventListener("click", () => {
	showcase.classList.remove("active");
	toggle.classList.remove("active");
	bars.style.display = "inline-block";
	times.style.display = "none";
});
