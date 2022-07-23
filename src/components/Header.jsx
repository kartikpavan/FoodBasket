import React from "react";
import Logo from "../assets/img/logo.png";
import Avatar from "../assets/img/avatar.png";
import { MdShoppingBasket } from "react-icons/md";

const Header = () => {
	return (
		<header className="w-screen fixed z-50 py-6 px-16">
			{/* desktop and tablet */}
			<div className="hidden md:flex w-full h-full items-center justify-between">
				<div className="flex items-center gap-2">
					<img src={Logo} alt="logo" className="w-12 object-cover" />
					<p className="text-2xl font-bold">Food Basket</p>
				</div>
				<div className="flex items-center justify-between gap-2">
					<ul className="flex items-center gap-8 ml-auto">
						<li className=" hover:text-primary duration-300 transition-all ease-in-out cursor-pointer">
							Home
						</li>
						<li className=" hover:text-primary duration-300 transition-all ease-in-out cursor-pointer">
							Menu
						</li>
						<li className=" hover:text-primary duration-300 transition-all ease-in-out cursor-pointer">
							About Us
						</li>
						<li className=" hover:text-primary duration-300 transition-all ease-in-out cursor-pointer">
							Services
						</li>
					</ul>
					<div className="relative flex items-center justify-center">
						<MdShoppingBasket className=" text-xl ml-4 cursor-pointer" />
						<div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center absolute -top-3 -right-2 ">
							<p className="text-sm text-white font-semibold">2</p>
						</div>
					</div>
					<img src={Avatar} alt="avatar" className="w-10 h-10 ml-2 drop-shadow-xl" />
				</div>
			</div>

			{/* mobile */}
			<div className="flex md:hidden w-full h-full"></div>
		</header>
	);
};

export default Header;
