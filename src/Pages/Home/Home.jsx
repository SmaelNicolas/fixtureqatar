import React, { useState } from "react";
import ButtonSwitch from "./ButtonsSwitch/ButtonSwitch";
import MainContent from "./MainContent/MainContent";
import Title from "./Title/Title";
import styled from "styled-components";

function Home() {
	const [show, setShow] = useState(true);

	const toggleShow = (value) => {
		setShow(value);
	};

	return (
		<HomeContainer>
			<Title />
			<ButtonSwitch toggleShow={toggleShow} />
			<MainContent show={show} />
		</HomeContainer>
	);
}

export default Home;

const HomeContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 10px;
	padding-bottom: 40px;
`;
