import React, { useState } from "react";
import Search from "./Search/Search";
import DrinkList from "./DrinkList/DrinkList";

function App() {
	const [drinkArray, setDrinkArray] = useState([]);

	const searchFormSubmit = async (term) => {
		await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
		)
			.then((response) => response.json())
			.then((data) => setDrinkArray(data));
	};

	return (
		<div className='App'>
			<Search searchFormSubmit={searchFormSubmit} />
			<DrinkList drinks={drinkArray} />
		</div>
	);
}

export default App;
