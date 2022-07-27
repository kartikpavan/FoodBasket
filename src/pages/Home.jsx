import React from "react";
import Delivery from "../assets/img/delivery.png";

const Home = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-screen">
			<div className="py-2 flex-1 flex flex-col items-start justify-center  gap-6">
				<div className="flex items-center gap-2 justify-center bg-violet-100 px-2 py-1 rounded-full">
					<p className="text-violet-600 font-semibold">Bike Delivery </p>
					<div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-lg">
						<img
							src={Delivery}
							alt="delivery"
							className="w-full h-full object-contain bg-white"
						/>
					</div>
				</div>
				<p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide">
					The Fastest Delivery in{" "}
					<span className="text-violet-600 text-[3rem] lg:text-[5rem]">Your City</span>
				</p>
				<p className="text-slate-500 text-center md:text-left md:w-[80%]">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est enim quasi sunt
					neque consequatur reprehenderit ipsum suscipit non, culpa impedit!
				</p>
				<button className="btn btn-primary cursor-pointer w-full md:max-w-[130px] md:w-full p-4">
					Order now
				</button>
			</div>
			<div className="py-2 bg-blue-500"></div>
		</div>
	);
};

export default Home;
