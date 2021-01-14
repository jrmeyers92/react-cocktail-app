import React, { useEffect, useState } from "react";
import "./Drink.css";

const Drink = (match) => {
	const [name, setName] = useState({});
	const id = match.match.params.name;

	const fetchItem = async () => {
		await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
		)
			.then((res) => res.json())
			.then((data) => setName(data.drinks[0]))
			.then(console.log(name));
	};

	useEffect(() => {
		fetchItem();
	}, []);

	if (name === {} || id === "") {
		return <div>loading..</div>;
	} else {
		return (
			<div key={id} className='drank'>
				<h2>{name.strDrink}</h2>
				<p>Ingridents:</p>

				<div className='drankIngDiv'>
					<span>{name.strIngredient1 ? name.strIngredient1 : " "}</span>
					<span>{name.strMeasure1 ? name.strMeasure1 : " "} </span>
				</div>
				<div className='drankIngDiv'>
					<span>{name.strIngredient2 ? name.strIngredient2 : " "}</span>
					<span>{name.strMeasure2 ?  name.strMeasure2 : " "} </span>
				</div>
				<div className='drankIngDiv'>
					<span>{name.strIngredient3 ? name.strIngredient3 : " "}</span>
					<span>{name.strMeasure3 ? name.strMeasure3 : " "} </span>
				</div>
				<div className='drankIngDiv'>
					<span>{name.strIngredient4 ? name.strIngredient4 : " "}</span>
					<span>{name.strMeasure4 ? name.strMeasure4 : " "} </span>
				</div>
				<div className='drankIngDiv'>
					<span>{name.strIngredient5 ? name.strIngredient5 : " "}</span>
					<span>{name.strMeasure5 ? name.strMeasure5 : " "} </span>
				</div>
				<div className='drankIngDiv'>
					<span>{name.strIngredient6 ? name.strIngredient6 : " "}</span>
					<span>{name.strMeasure6 ? name.strMeasure6 : " "} </span>
				</div>

				<p>Instructions: {name.strInstructions}</p>
			</div>
		);
	}
};

export default Drink;
