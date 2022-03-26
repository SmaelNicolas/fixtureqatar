import React from "react";
import styled from "styled-components";

function GroupName({ groupName }) {
	return (
		<GroupNameStyled>
			<TextContainer> Grupo {groupName}</TextContainer>
		</GroupNameStyled>
	);
}

export default GroupName;

const GroupNameStyled = styled.div`
	grid-area: name;
	width: 100%;
	height: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 1px 0px 0 rgb(0 0 0 / 12%);
`;

const TextContainer = styled.div`
	text-align: center;
	color: var(--clrs--Garnet);
	font-family: var(--QatarFont);
	font-size: var(--fs--big);
`;
