import React from "react";
import { ButtonSelection } from "../../../../CommonStyledComponents";

function ButtonRounds({ toggleShow }) {
	return (
		<ButtonSelection onClick={() => toggleShow(false)}>
			Fase de eliminación
		</ButtonSelection>
	);
}

export default ButtonRounds;
