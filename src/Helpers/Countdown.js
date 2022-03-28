const countDown = (date) => {
	const dateSelected = new Date(date);
	let currentDate = new Date();

	const totalTimeMiliseconds = dateSelected - currentDate;
	const totalTime = totalTimeMiliseconds / 1000;

	const days = Math.floor(totalTime / 3600 / 24);
	const hours = Math.floor(totalTime / 3600) % 24;
	const minutes = Math.floor(totalTime / 60) % 60;
	const seconds = Math.floor(totalTime % 60);

	let time = {
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
	};
	return time;
};

export const countDownTimer = () => {
	let d = 21;
	let m = "nov";
	let y = 2022;

	let date = `${d} ${m} ${y}`;
	return countDown(date);
};
