const stella1 = document.getElementById("stella1");
const stella2 = document.getElementById("stella2");
const sky = document.getElementsByClassName("sky");
// 設定範圍
const star = () => {
	stella1.style.top = Math.round(Math.random() * 80) + "%";
	stella1.style.left = Math.round(Math.random() * 80) + "%";
	stella1.style.opacity = 1;
};
setInterval(star, 2000);

const star2 = () => {
	stella2.style.top = Math.round(Math.random() * 80) + "%";
	stella2.style.left = Math.round(Math.random() * 80) + "%";
	stella2.style.opacity = 1;
};
setInterval(star2, 3000);
