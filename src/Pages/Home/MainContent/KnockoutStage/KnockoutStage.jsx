import { useState } from "react";
import styled from "styled-components";
import { TitleSection } from "../../../../CommonStyledComponents";
import RoundOf16 from "./RoundOf16/RoundOf16";
import RoundOf8 from "./RoundOf8/RoundOf8";
import Semifinal from "./Semifinal/Semifinal";
import ThirdPlace from "./ThirdPlace/ThirdPlace";
import Final from "./Final/Final";
import arrow from "../../../../Assets/Icons/arrow.svg";

function KnockoutStage() {
	const [show16, setShow16] = useState(false);
	const [show8, setShow8] = useState(false);
	const [semifinal, setSemifinal] = useState(false);
	const [final, setFinal] = useState(false);
	const [thirdplace, setThirdplace] = useState(false);

	return (
		<KnockoutContainer>
			<RoundsContainer>
				<TitleSection onClick={() => setShow16(!show16)}>
					Octavos de Final
					<Img src={arrow} transform={show16} />
				</TitleSection>
				{show16 && <RoundOf16 />}
			</RoundsContainer>
			<RoundsContainer>
				<TitleSection onClick={() => setShow8(!show8)}>
					Cuartos de Final
					<Img src={arrow} transform={show8} />
				</TitleSection>
				{show8 && <RoundOf8 />}
			</RoundsContainer>
			<RoundsContainer>
				<TitleSection onClick={() => setSemifinal(!semifinal)}>
					Semifinal
					<Img src={arrow} transform={semifinal} />
				</TitleSection>
				{semifinal && <Semifinal />}
			</RoundsContainer>
			<RoundsContainer>
				<TitleSection onClick={() => setThirdplace(!thirdplace)}>
					Tercer Puesto
					<Img src={arrow} transform={thirdplace} />
				</TitleSection>
				{thirdplace && <ThirdPlace />}
			</RoundsContainer>
			<RoundsContainer>
				<TitleSection onClick={() => setFinal(!final)}>
					Final
					<Img src={arrow} transform={final} />
				</TitleSection>
				{final && <Final />}
			</RoundsContainer>
		</KnockoutContainer>
	);
}

export default KnockoutStage;

const KnockoutContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 15px;
`;

const RoundsContainer = styled.div`
	width: 100%;
	@media screen and (min-width: 570px) {
		width: 550px;
	}
`;

const Img = styled.img`
	width: 25px;
	height: 15px;
	margin-left: 10px;
	transform: ${({ transform }) => (transform ? "rotate(180deg)" : "unset")};
`;
