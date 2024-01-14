const initialState = {
	currentPlayer: "X",
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(""),
	message: "Ходит: X",
};

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_FIELD":
			return {
				...state,
				field: [...action.payload],
				message: "",
			};
		case "SET_MESSAGE":
			return {
				...state,
				message: action.payload,
			};
		case "RESET_GAME":
			return initialState;
		default:
			return state;
	}
};

export default gameReducer;
