import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Create from "./components/Create";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const App = () => {
	return (
		<AnimatePresence>
			<div className="w-screen h-auto flex flex-col bg-base-200">
				<Header />
				<main className="mt-24 p-8 w-full">
					<Routes>
						<Route path="/*" element={<Home />} />
						<Route path="/createItem" element={<Create />} />
					</Routes>
				</main>
			</div>
		</AnimatePresence>
	);
};

export default App;
