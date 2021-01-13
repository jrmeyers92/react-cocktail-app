import React, { useEffect, useState } from "react";

const Drink = (match) => {
	let drinkDetses;
	const [drinkItem, setDrinkItem] = useState([]);

	// useEffect(() => {
	// 	getDrinkDetails();
	// 	console.log(drinkItem);
	// });

	const getDrinkDetails = async () => {
		const id = match.match.params.name;
		const fetchDrinkdetails = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
		);
		const item = await fetchDrinkdetails.json();
		setDrinkItem(item);
		console.log(drinkItem);
	};

	useEffect(() => {
		getDrinkDetails();
	}, []);

	return <div>hi</div>;
};

export default Drink;
