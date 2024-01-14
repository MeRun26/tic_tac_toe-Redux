import React, { useEffect, useState } from "react";
import InformationLayout from "./Information.layout.module";
import store from "../store";

const InformationContainer = () => {
	const [currentState, setCurrentState] = useState(store.getState());
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setCurrentState(store.getState());
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const { message } = currentState;

	return <InformationLayout message={message} />;
};

export default InformationContainer;
