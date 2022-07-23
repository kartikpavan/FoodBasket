import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./components/Create";
const App = () => {
	return (
		<div className="w-screen h-auto flex flex-col bg-base-200">
			<Header />
			<main className="mt-24 p-8 w-full">
				<Routes>
					<Route path="/*" element={<Home />} />
					<Route path="/createItem" element={<Create />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
