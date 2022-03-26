import React from "react";
import styled from "styled-components";
import { Score, Team } from "../../../../../../CommonStyledComponents";

function MatchFormat({ score, info, team1, team2 }) {
	return (
		<FormatContainer>
			<Team1>{team1 || "TBD"}</Team1>
			<Score1>{score[0] || "TBD"}</Score1>
			<Separator> - </Separator>
			<Score2>{score[1] || "TBD"}</Score2>
			<Team2>{team2 || "TBD"}</Team2>
			<Info>{info || "TBD"}</Info>
		</FormatContainer>
	);
}

export default MatchFormat;

const FormatContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-areas:
		"team1 score1 separator score2 team2"
		"info info info info info";
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 2fr 0.5fr 0.1fr 0.5fr 2fr;
`;

const Team1 = styled(Team)`
	grid-area: team1;
`;
const Team2 = styled(Team)`
	grid-area: team2;
`;
const Score1 = styled(Score)`
	grid-area: score1;
`;
const Score2 = styled(Score)`
	grid-area: score2;
`;
const Info = styled.div`
	grid-area: info;
	letter-spacing: 1px;
	font-size: var(--fs--small);
	color: var(--clrs--blue);
`;

const Separator = styled.div`
	grid-area: separator;
	color: var(--clrs--blue);
`;
