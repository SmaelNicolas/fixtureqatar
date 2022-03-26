import React from "react";
import styled from "styled-components";

function Title() {
	return <StyledH1>World Cup Qatar 2022 Fixture</StyledH1>;
}

export default Title;

const StyledH1 = styled.h1`
	width: 100%;
	font-size: var(--fs--bigger);
	font-family: var(--QatarFont);
	text-align: center;
	color: var(--clrs--blue);
`;
