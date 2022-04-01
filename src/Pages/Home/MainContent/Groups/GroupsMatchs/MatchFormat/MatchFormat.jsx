import React, { useState } from "react";
import styled from "styled-components";
import { Score, Team } from "../../../../../../CommonStyledComponents";

function MatchFormat({ score, info, team1, team2, flag1, flag2 }) {
	const [flag1String] = useState(`https://flagcdn.com/${flag1}.svg`);
	const [flag2String] = useState(`https://flagcdn.com/${flag2}.svg`);

	return (
		<FormatContainer>
			<Team1>
				{team1 || "TBD"} <ImgTeam src={flag1String} />
			</Team1>
			<Score1>{score[0] || "TBD"}</Score1>
			<Separator> - </Separator>
			<Score2>{score[1] || "TBD"}</Score2>
			<Team2>
				<ImgTeam src={flag2String} />
				{team2 || "TBD"}
			</Team2>
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
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 15px;
`;
const Team2 = styled(Team)`
	grid-area: team2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 15px;
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

const ImgTeam = styled.img`
	width: 25px;
`;
