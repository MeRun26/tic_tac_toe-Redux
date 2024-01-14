import React, { useState, useEffect } from "react";
import { updateField, setGameMessage, resetGame } from "../Actions/gameActions";
import store from "../store";
import GameLayout from "../Game/Game.layout.module";

const GameContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(""));

	const handleCellClick = (index) => {
		if (!isGameEnded && !isDraw && field[index] === "") {
			const newField = [...field];
			newField[index] = currentPlayer;
			store.dispatch(updateField(newField));
			checkWinner(newField, currentPlayer);
		}
	};

	const handleRestart = () => {
		setIsGameEnded(false);
		setIsDraw(false);
		store.dispatch(resetGame());
	};

	const checkWinner = (currentField, player) => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8],
			[2, 4, 6], // Варианты побед по диагонали
		];
		// Проверяем, есть ли пустые клетки (если нет, то это ничья)
		if (!currentField.includes("")) {
			store.dispatch(setGameMessage("НИЧЬЯ"));
			setIsGameEnded(true);
			setIsDraw(true);
			return;
		}

		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (
				currentField[a] === player &&
				currentField[b] === player &&
				currentField[c] === player
			) {
				setIsGameEnded(true);
				setIsDraw(false);
				store.dispatch(setGameMessage(`Победа: ${player}`));
				return;
			}
		}

		const nextPlayer = player === "X" ? "O" : "X";
		// обновляем текущего игрока
		store.dispatch(setGameMessage(`Ходит: ${nextPlayer}`));
		setCurrentPlayer(nextPlayer);
	};

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const state = store.getState();
			setField(state.field);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<GameLayout
			field={field}
			handleCellClick={handleCellClick}
			handleRestart={handleRestart}
		/>
	);
};

export default GameContainer;
