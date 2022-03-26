import styled from "styled-components";
import MatchFormat from "../../Groups/GroupsMatchs/MatchFormat/MatchFormat";
import data from "../../../../../Data/Elimination.json";

function RoundOf16() {
	return (
		<MatchContainer>
			{data[0].roundof16A.map((match, index) => {
				return (
					<MatchFormat
						key={index}
						score={match.score}
						info={match.info}
						team1={match.team1}
						team2={match.team2}
					/>
				);
			})}

			{data[0].roundof16B.map((match, index) => {
				return (
					<MatchFormat
						key={index}
						score={match.score}
						info={match.info}
						team1={match.team1}
						team2={match.team2}
					/>
				);
			})}
		</MatchContainer>
	);
}

export default RoundOf16;

const MatchContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	text-align: center;
	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
