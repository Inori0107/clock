const elDate = document.getElementById("date");
const Time = document.getElementById("time");

const clock = () => {
	const date = new Date();
	//日期
	const days = date.getDay();
	const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const dayName = weeks[days];
	elDate.innerText = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${dayName}`;
	// 時 & 分
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	Time.innerText = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
};

setInterval(clock, 1000);
