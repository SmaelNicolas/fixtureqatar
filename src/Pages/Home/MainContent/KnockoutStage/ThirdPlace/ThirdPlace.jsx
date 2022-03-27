import MatchFormat from "../../Groups/GroupsMatchs/MatchFormat/MatchFormat";
import data from "../../../../../Data/Elimination.json";
import { MatchContainer } from "../../../../../CommonStyledComponents";

function ThirdPlace() {
	return (
		<MatchContainer>
			{data[0].thirdplace.map((match, index) => {
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

export default ThirdPlace;
