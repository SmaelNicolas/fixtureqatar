import React from "react";
import { ButtonSelection } from "../../../../CommonStyledComponents";

function ButtonGroups({ toggleShow }) {
	return (
		<ButtonSelection onClick={() => toggleShow(true)}>
			Fase de Grupos
		</ButtonSelection>
	);
}

export default ButtonGroups;
