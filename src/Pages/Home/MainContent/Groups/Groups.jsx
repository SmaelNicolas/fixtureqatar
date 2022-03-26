import React from "react";
import styled from "styled-components";
import GroupName from "./GroupName/GroupName";
import GroupPositions from "./GroupPositions/GroupPositions";
import GroupMatchs from "./GroupsMatchs/GroupMatchs";
import data from "../../../../Data/Groups.json";

function Groups() {
	return (
		<Container>
			{data.map((group, index) => {
				return (
					<GroupsContainer key={index}>
						<GroupName groupName={group.name} />
						<GroupPositions groupPositions={group.positions} />
						<GroupMatchs
							scores={group.scores}
							info={group.info}
							team1={group.teams[0].name}
							team2={group.teams[1].name}
							team3={group.teams[2].name}
							team4={group.teams[3].name}
						/>
					</GroupsContainer>
				);
			})}
		</Container>
	);
}

export default Groups;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 55px;
`;

const GroupsContainer = styled.div`
	width: 98%;
	min-height: 300px;
	display: grid;
	grid-template-areas:
		"name positions"
		"match1 match1"
		"match2 match2"
		"match3 match3"
		"match4 match4"
		"match5 match5"
		"match6 match6";
	grid-template-rows: 1.9fr 1.2fr 1.2fr 1.2fr 1.2fr 1.2fr;
	grid-template-columns: 1fr 1fr;

	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%);

	@media screen and (min-width: 500px) {
		width: 470px;
	}
`;
