import React from "react";
import PropTypes from "prop-types";
import FieldContainer from "../Field/Field.container.module";
import InformationContainer from "../Information/Information.container.module";
import styles from "./Game.layout.module.css";

const GameLayout = ({ field, handleCellClick, handleRestart }) => {
	return (
		<div className={styles.gameContainer}>
			<InformationContainer />
			<FieldContainer field={field} handleCellClick={handleCellClick} />
			<button className={styles.restartButton} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired,
	handleRestart: PropTypes.func.isRequired,
};

export default GameLayout;
