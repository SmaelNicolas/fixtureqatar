import React from "react";
import styled from "styled-components";
import ButtonGroups from "./ButtonGroups/ButtonGroups";
import ButtonRounds from "./ButtonRounds/ButtonRounds";

function ButtonSwitch({ toggleShow }) {
	return (
		<ButtonsContainer>
			<ButtonGroups toggleShow={toggleShow} />
			<ButtonRounds toggleShow={toggleShow} />
		</ButtonsContainer>
	);
}

export default ButtonSwitch;

const ButtonsContainer = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 5px;
	z-index: 3;
`;
