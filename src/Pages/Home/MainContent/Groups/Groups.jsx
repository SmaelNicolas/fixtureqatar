import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import GroupName from "./GroupName/GroupName";
import GroupPositions from "./GroupPositions/GroupPositions";
import GroupMatchs from "./GroupsMatchs/GroupMatchs";
import data from "../../../../Data/Groups.json";
import { Fade } from "../../../../CommonStyledComponents";

function Groups() {
	return (
		<>
			<Container>
				{data.map((group, index) => {
					return (
						<GroupsContainer key={index}>
							<GroupName groupName={group.name} />
							<GroupPositions groupPositions={group.positions} />
							<GroupMatchs
								scores={group.scores}
								info={group.info}
								team1={group.teams.names[0].name}
								team2={group.teams.names[1].name}
								team3={group.teams.names[2].name}
								team4={group.teams.names[3].name}
								flag1={group.teams.flags[0].name}
								flag2={group.teams.flags[1].name}
								flag3={group.teams.flags[2].name}
								flag4={group.teams.flags[3].name}
							/>
						</GroupsContainer>
					);
				})}
			</Container>

			{/* SWIPER */}
			<ContainerSwiper>
				<SwiperStyled
					slidesPerView={1}
					spaceBetween={0}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					modules={[FreeMode, Pagination]}
				>
					{data.map((group, index) => {
						return (
							<SwiperSlide key={index}>
								<GroupsContainer>
									<GroupName groupName={group.name} />
									<GroupPositions
										groupPositions={group.positions}
									/>
									<GroupMatchs
										scores={group.scores}
										info={group.info}
										team1={group.teams.names[0].name}
										team2={group.teams.names[1].name}
										team3={group.teams.names[2].name}
										team4={group.teams.names[3].name}
										flag1={group.teams.flags[0].name}
										flag2={group.teams.flags[1].name}
										flag3={group.teams.flags[2].name}
										flag4={group.teams.flags[3].name}
									/>
								</GroupsContainer>
							</SwiperSlide>
						);
					})}
				</SwiperStyled>
			</ContainerSwiper>
		</>
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
	animation: ${Fade} 0.5s forwards;

	@media screen and (max-width: 500px) {
		display: none;
	}
`;

const GroupsContainer = styled.div`
	width: 98%;
	min-height: 380px;
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
	background-color: #00000010;
	border-radius: 5px;

	@media screen and (min-width: 500px) {
		width: 470px;
	}
`;

const ContainerSwiper = styled.div`
	display: none;
	width: 98vw;
	height: 350px;
	animation: ${Fade} 0.5s forwards;

	@media screen and (max-width: 500px) {
		display: flex;
	}
`;
const SwiperStyled = styled(Swiper)`
	width: 100%;
	height: 350px;
`;
