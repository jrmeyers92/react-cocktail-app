import React from "react";
import "./DrinkList.css";
import Drink from "./Drink/Drink";

const DrinkList = (props) => {
	const i = props.drinks.map((drink) => {
		return (
			<div>
				<h3>{drink.strDrink}</h3>
			</div>
		);
	});

	return <div>{i}</div>;
};

export default DrinkList;
