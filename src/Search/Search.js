import React, { useState, useEffect } from "react";
import "./Search.css";

const Search = (props) => {
	const [searchTerm, setSearchTerm] = useState("");

	const formSubmit = (e) => {
		e.preventDefault();
		props.searchFormSubmit(searchTerm);
	};

	useEffect(() => {
		setTimeout(() => {
			props.searchFormSubmit(searchTerm);
		}, 2000);
	});

	return (
		<form onSubmit={formSubmit} className='search'>
			<input
				type='text'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				id='searchInput'
				className='searchInput'
				placeholder='Search a type of drink'></input>
		</form>
	);
};

export default Search;
