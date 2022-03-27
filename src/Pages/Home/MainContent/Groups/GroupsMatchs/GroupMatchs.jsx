import React from "react";
import styled from "styled-components";
import MatchFormat from "./MatchFormat/MatchFormat";

function GroupMatchs({
	scores,
	info,
	team1,
	team2,
	team3,
	team4,
	flag1,
	flag2,
	flag3,
	flag4,
}) {
	return (
		<>
			<Match1>
				<MatchFormat
					score={scores[0].score}
					info={info[0].date}
					team1={team1}
					team2={team2}
					flag1={flag1}
					flag2={flag2}
				/>
			</Match1>
			<Match2>
				<MatchFormat
					score={scores[1].score}
					info={info[1].date}
					team1={team3}
					team2={team4}
					flag1={flag3}
					flag2={flag4}
				/>
			</Match2>
			<Match3>
				<MatchFormat
					score={scores[2].score}
					info={info[2].date}
					team1={team1}
					team2={team3}
					flag1={flag1}
					flag2={flag3}
				/>
			</Match3>
			<Match4>
				<MatchFormat
					score={scores[3].score}
					info={info[3].date}
					team1={team4}
					team2={team2}
					flag1={flag4}
					flag2={flag2}
				/>
			</Match4>
			<Match5>
				<MatchFormat
					score={scores[4].score}
					info={info[4].date}
					team1={team4}
					team2={team1}
					flag1={flag4}
					flag2={flag1}
				/>
			</Match5>
			<Match6>
				<MatchFormat
					score={scores[5].score}
					info={info[5].date}
					team1={team2}
					team2={team3}
					flag1={flag2}
					flag2={flag3}
				/>
			</Match6>
		</>
	);
}

export default GroupMatchs;

const Match1 = styled.div`
	grid-area: match1;
	text-align: center;
`;
const Match2 = styled.div`
	grid-area: match2;
	text-align: center;
`;
const Match3 = styled.div`
	grid-area: match3;
	text-align: center;
`;
const Match4 = styled.div`
	grid-area: match4;
	text-align: center;
`;
const Match5 = styled.div`
	grid-area: match5;
	text-align: center;
`;
const Match6 = styled.div`
	grid-area: match6;
	text-align: center;
`;
