export const updateField = (newField) => {
	return {
		type: "UPDATE_FIELD",
		payload: newField,
	};
};

export const setGameMessage = (message) => {
	return {
		type: "SET_MESSAGE",
		payload: message,
	};
};

export const resetGame = () => {
	return {
		type: "RESET_GAME",
	};
};
