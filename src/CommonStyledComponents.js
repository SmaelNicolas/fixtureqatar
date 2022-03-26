import styled from "styled-components";

export const ButtonSelection = styled.button`
	width: 150px;
	height: 30px;
	cursor: pointer;
	border-radius: 3px;
	border: none;
	border: 1px solid #f5f5f5;
	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 12%);
	transition: 0.2s linear;

	&:hover {
		transition: 0.2s linear;
		transform: translateY(-1px);
	}
`;

export const Team = styled.div`
	font-weight: 300;
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
