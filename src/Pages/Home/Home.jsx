import React, { useState } from "react";
import ButtonSwitch from "./ButtonsSwitch/ButtonSwitch";
import MainContent from "./MainContent/MainContent";
import Title from "./Title/Title";
import styled from "styled-components";
import Countdown from "../../Components/Countdown/Countdown";

function Home() {
	const [show, setShow] = useState(true);

	const toggleShow = (value) => {
		setShow(value);
	};

	return (
		<HomeContainer>
			<Title />
			<Countdown />
			<ButtonSwitch toggleShow={toggleShow} />
			<MainContent show={show} />
		</HomeContainer>
	);
}

export default Home;

const HomeContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	padding-bottom: 40px;
	position: relative;
`;
