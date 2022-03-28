import { useEffect, useState } from "react";
import styled from "styled-components";
import { countDownTimer } from "../../Helpers/Countdown";

function Countdown() {
	const [days, setDays] = useState();
	const [hours, setHours] = useState();
	const [min, setMin] = useState();
	const [segs, setSegs] = useState();

	useEffect(() => {
		setInterval(() => {
			let date = countDownTimer();
			setDays(date.days);
			setHours(date.hours);
			setMin(date.minutes);
			setSegs(date.seconds);
		}, 1000);
	}, []);

	return (
		<Container>
			<TimeCountdown>
				<TimeNumber id='daysNumber'>{days}</TimeNumber>
				<TimeText>Dias</TimeText>
			</TimeCountdown>
			<TimeCountdown>
				<TimeNumber id='hoursNumber'>{hours}</TimeNumber>
				<TimeText>Horas</TimeText>
			</TimeCountdown>
			<TimeCountdown>
				<TimeNumber id='minutesNumber'>{min}</TimeNumber>
				<TimeText>Minutos</TimeText>
			</TimeCountdown>
			<TimeCountdown>
				<TimeNumber id='secondsNumber'>{segs}</TimeNumber>
				<TimeText>Segundos</TimeText>
			</TimeCountdown>
		</Container>
	);
}

export default Countdown;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

const TimeCountdown = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin: 15px;
`;

const TimeNumber = styled.span`
	font-size: var(--fs--cd);
	font-family: var(--robotoFont);
	font-weight: 600;
	color: rgb(66, 64, 64);
`;

const TimeText = styled.span`
	font-size: var(--fs--small);
	font-family: "Open Sans", sans-serif;
	color: rgb(66, 64, 64);
`;
