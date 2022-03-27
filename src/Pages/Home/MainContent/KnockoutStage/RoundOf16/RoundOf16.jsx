import MatchFormat from "../../Groups/GroupsMatchs/MatchFormat/MatchFormat";
import data from "../../../../../Data/Elimination.json";
import { MatchContainer } from "../../../../../CommonStyledComponents";

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
