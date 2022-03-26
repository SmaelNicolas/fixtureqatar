import React from "react";
import Groups from "./Groups/Groups";
import KnockoutStage from "./KnockoutStage/KnockoutStage";
import styled from "styled-components";

function MainContent({ show }) {
	return (
		<MainContainer>{show ? <Groups /> : <KnockoutStage />}</MainContainer>
	);
}

export default MainContent;

const MainContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
