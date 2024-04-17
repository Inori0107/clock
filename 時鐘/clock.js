const elDate = document.getElementById("date");
const textTime = document.getElementById("text-time");
const textSecond = document.getElementById("text-second");

const clock = () => {
	// 讀取今日
	const date = new Date();

	//日期
	const days = date.getDay();
	const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const dayName = weeks[days];
	elDate.innerText = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${dayName}`;
	// 時 & 分
	const hour = date.getHours();
	const minute = date.getMinutes();
	textTime.innerText = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;

	const second = date.getSeconds();
	textSecond.innerText = `${second.toString().padStart(2, "0")}`;
};

setInterval(clock, 1000);

// 番茄鐘
const tomato = document.getElementById("tomato");
const btn = document.getElementsByClassName("btn");
setTimeout(() => {}, 1000);
