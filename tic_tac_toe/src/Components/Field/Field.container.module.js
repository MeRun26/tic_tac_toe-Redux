import React, { useEffect, useState } from "react";
import FieldLayout from "./Field.layout.module";
import store from "../store";

const FieldContainer = ({ handleCellClick }) => {
	const [field, setField] = useState(store.getState().field);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const state = store.getState();
			setField(state.field);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};

export default FieldContainer;
