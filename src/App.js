import React, { useState } from "react";
import Search from "./Search/Search";
import DrinkList from "./DrinkList/DrinkList";
import Drink from "./Drink/Drink";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
		<Router>
			<div className='App'>
				<Search searchFormSubmit={searchFormSubmit} />
				<Switch>
					<Route path='/' exact>
						<DrinkList drinks={drinkArray} />
					</Route>
					<Route path='/cocktail/:name' component={Drink}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
