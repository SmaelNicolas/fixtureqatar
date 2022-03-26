import React from "react";
import styled from "styled-components";
// import imageLogo from "../../../Assets/Images/logo.png";
import imageLogo2 from "../../../Assets/Images/logo.svg";

function Title() {
	return (
		<>
			<StyledH1>World Cup Qatar 2022 Fixture</StyledH1>
			<TitleContainer>
				<Img1 src={imageLogo2} />
			</TitleContainer>
		</>
	);
}

export default Title;

const TitleContainer = styled.div`
	width: 98%;
	height: 98%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: absolute;
	z-index: 2;
	opacity: 0.18;
`;

const StyledH1 = styled.h1`
	width: 100%;
	font-size: var(--fs--bigger);
	font-family: var(--QatarFont);
	text-align: center;
	color: var(--clrs--Garnet);
`;

const Img1 = styled.img`
	width: 100%;
	height: 100%;
`;
