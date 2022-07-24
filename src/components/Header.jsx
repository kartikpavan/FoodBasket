import React from "react";
import Logo from "../assets/img/logo.png";
import Avatar from "../assets/img/avatar.png";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import { useGlobalContext } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const [{ user }, dispatch] = useGlobalContext();

	const login = async () => {
		const {
			user: { providerData, refreshToken },
		} = await signInWithPopup(auth, provider);

		dispatch({
			type: actionType.SET_USER,
			user: providerData[0],
		});
	};

	return (
		<header className="w-screen fixed z-50 p-2 md:p-4 lg:p-6">
			<div className="drawer ">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					<div className="w-full navbar">
						<div className="flex-none md:hidden">
							<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block w-6 h-6 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</label>
						</div>
						<Link to="/" className="flex flex-1 items-center gap-2">
							<img src={Logo} alt="logo" className="w-12 object-cover" />
							<p className="text-2xl font-bold">Food Basket</p>
						</Link>
						<div>
							<div className="hidden md:flex items-center justify-center">
								<ul className="menu menu-horizontal flex gap-8">
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
							</div>
							<div className="relative flex items-center justify-center ">
								<MdShoppingBasket className=" text-2xl ml-6 cursor-pointer" />
								<div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center absolute -top-3 -right-2 ">
									<p className="text-sm text-white font-semibold">2</p>
								</div>
							</div>
							<div className="relative">
								<motion.img
									whileTap={{ scale: 0.6 }}
									src={Avatar}
									alt="avatar"
									className="w-10 h-10  ml-6 drop-shadow-xl cursor-pointer"
									onClick={login}
								/>
							</div>
						</div>
					</div>
				</div>
				{/* Mobile Side drawer */}
				<div className="drawer-side">
					<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
					<ul className="menu p-4 overflow-y-auto w-80 bg-base-100 flex flex-col gap-8 ">
						<li className="text-xl  hover:text-primary duration-300 transition-all ease-in-out cursor-pointer border-b">
							Home
						</li>
						<li className="text-xl  hover:text-primary duration-300 transition-all ease-in-out cursor-pointer border-b">
							Menu
						</li>
						<li className="text-xl  hover:text-primary duration-300 transition-all ease-in-out cursor-pointer border-b">
							About Us
						</li>
						<li className="text-xl  hover:text-primary duration-300 transition-all ease-in-out cursor-pointer border-b">
							Services
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
