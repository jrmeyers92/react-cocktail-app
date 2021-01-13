import React from "react";
import "./DrinkList.css";
import { Link } from "react-router-dom";
// import Drink from "./Drink/Drink";

const DrinkList = (props) => {
	let drinks = props.drinks.drinks;
	let list;

	if (drinks) {
		list = drinks.map((drink) => {
			return (
				<Link to={`/cocktail/${drink.idDrink}`}>
					<div key={drink.idDrink}>
						<h2>{drink.strDrink}</h2>{" "}
						<img alt={drink.strDrink} src={drink.strDrinkThumb}></img>
					</div>
				</Link>
			);
		});
	}

	return <div>{list}</div>;
};

export default DrinkList;
