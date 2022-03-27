import styled from "styled-components";
import MatchFormat from "../../Groups/GroupsMatchs/MatchFormat/MatchFormat";
import data from "../../../../../Data/Elimination.json";

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
const MatchContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	text-align: center;
`;