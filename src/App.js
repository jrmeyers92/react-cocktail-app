import React, { useState, useEffect } from "react";
import Search from "./Search/Search";

function App() {
	const [searchFormTerm, setSearchFormTerm] = useState("");
	const [drinkArray, setDrinkArray] = useState([]);

	const searchFormSubmit = (term) => {
		setSearchFormTerm(term);
	};

	useEffect(() => {
		fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchFormTerm}`
		)
			.then((response) => response.json())
			.then((data) => setDrinkArray(data));
	}, [searchFormTerm]);

	console.log(drinkArray);

	return (
		<div className='App'>
			<Search searchFormSubmit={searchFormSubmit} />
		</div>
	);
}

export default App;
