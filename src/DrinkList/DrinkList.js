import React from "react";
import "./DrinkList.css";
// import Drink from "./Drink/Drink";

const DrinkList = (props) => {
	let drinks = props.drinks.drinks;
	let list;

	if (drinks) {
		list = drinks.map((drink) => {
			console.log(drink);
			return (
				<div key={drink.idDrink}>
					<h2>{drink.strDrink}</h2>{" "}
					<img alt={drink.strDrink} src={drink.strDrinkThumb}></img>
					<button>Details</button>
				</div>
			);
		});
	}

	return <div>{list}</div>;
};

export default DrinkList;
