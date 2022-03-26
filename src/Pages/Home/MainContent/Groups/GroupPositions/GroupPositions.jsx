import React from "react";
import styled from "styled-components";

function GroupPositions({ groupPositions }) {
	return (
		<PositionStyled>
			<PositionsContainer>
				{groupPositions.map((position, index) => {
					return <Positions key={index}>{position.pos}</Positions>;
				})}
			</PositionsContainer>
		</PositionStyled>
	);
}

export default GroupPositions;

const PositionStyled = styled.div`
	grid-area: positions;
`;

const PositionsContainer = styled.ol`
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	padding-left: 3px;
	box-shadow: 0px 1px 0px 0 rgb(0 0 0 / 12%);
`;

const Positions = styled.li`
	width: 40%;
	height: 40%;
	color: var(--clrs--Garnet);
	font-size: var(--fs--small);
	@media screen and (min-width: 500px) {
		font-size: var(--fs--normal);
	}
`;
