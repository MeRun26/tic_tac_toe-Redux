import React from "react";
import PropTypes from "prop-types";
import styles from "./Information.layout.module.css";

const InformationLayout = ({ message }) => {
	return (
		<div className={styles.infoContainer}>
			<p className={styles.gameInfo}>{message}</p>
		</div>
	);
};

InformationLayout.propTypes = {
	message: PropTypes.string.isRequired,
};

export default InformationLayout;
