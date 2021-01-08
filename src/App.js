import React, { useState } from "react";
import Search from "./Search/Search";

function App() {
	const [searchTerm, setSearchTerm] = useState("");

	const searchFormSubmit = (term) => {
		setSearchTerm(term);
	};

	console.log(searchTerm);

	return (
		<div className='App'>
			<Search searchFormSubmit={searchFormSubmit} />
		</div>
	);
}

export default App;
