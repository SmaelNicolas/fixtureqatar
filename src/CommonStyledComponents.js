import styled, { keyframes } from "styled-components";

export const ButtonSelection = styled.button`
	width: 150px;
	height: 30px;
	cursor: pointer;
	border-radius: 3px;
	border: none;
	border: 1px solid var(--clrs--Garnet);
	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 12%);
	transition: 0.2s linear;
	color: var(--clrs--Garnet);
	font-weight: 700;
	background-color: #f5f5f5;

	&:hover {
		transition: 0.2s linear;
		transform: translateY(-1px);
	}
`;

export const Team = styled.div`
	font-weight: 600;
	letter-spacing: 1px;
	color: var(--clrs--Garnet);
`;

export const TitleSection = styled.div`
	width: 100%;
	font-size: var(--fs--bigger);
	text-align: center;
	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%);
	margin-bottom: 10px;
	cursor: pointer;
	font-family: var(--QatarFont);
	color: var(--clrs--Garnet);
`;

export const Score = styled.div`
	color: var(--clrs--blue);
`;

export const MatchContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	text-align: center;
	background-color: #00000010;
	padding: 15px 0px;
`;

// KEYFRAMES

export const Fade = keyframes`
	
    0% {opacity: 0};
    100% {opacity: 1;}

`;
