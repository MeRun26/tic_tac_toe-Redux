import React from "react";
import PropTypes from "prop-types";
import styles from "./Field.layout.module.css";

const FieldLayout = ({ field, handleCellClick, winningCells }) => {
	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<button
					key={index}
					onClick={() => handleCellClick(index)}
					disabled={cell !== ""}
					className={`${styles.cell} ${
						winningCells && winningCells.includes(index)
							? styles.winningCell
							: ""
					}`}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired,
	winningCells: PropTypes.arrayOf(PropTypes.number),
};

export default FieldLayout;
