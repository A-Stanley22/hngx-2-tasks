import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayMovies from "./components/DisplayMovies";
import HomePage from "./components/HomePage";
import SearchIcon from "./components/SearchIcon";

function App() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<main className="w-full h-full App fontRoboto">
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route
					exact
					path="/movie/:movie_id"
					element={<DisplayMovies />}
				/>
				<Route exact path="/search" element={<SearchIcon />} />
			</Routes>
		</main>
	);
}

export default App;