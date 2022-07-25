import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import Avatar from "../assets/img/avatar.png";
import { MdShoppingBasket, MdLogout, MdAdd } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Firebase imports
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
// Context Provider imports
import { useGlobalContext } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const [{ user }, dispatch] = useGlobalContext();

	const login = async () => {
		if (!user) {
			const {
				user: { providerData, refreshToken },
			} = await signInWithPopup(auth, provider);

			dispatch({
				type: actionType.SET_USER,
				user: providerData[0],
			});

			localStorage.setItem("user", JSON.stringify(providerData[0]));
			window.location.reload();
		}
	};

	const logout = () => {
		localStorage.clear();
		dispatch({ type: actionType.SET_USER, user: null });
		window.location.reload();
	};

	return (
		<header className="w-screen fixed z-50  ">
			<div className="drawer ">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					<div className="w-full navbar">
						<Link to="/" className="flex flex-1 items-center gap-2">
							<img src={Logo} alt="logo" className="w-12 object-cover" />
							<p className="text-lg md:text-2xl font-bold">Food Basket</p>
						</Link>
						<div>
							<div className="hidden md:flex items-center justify-center">
								<motion.ul
									initial={{ opacity: 0, x: 200 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 200 }}
									className="menu menu-horizontal flex gap-8"
								>
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
								</motion.ul>
							</div>
							<div className="relative flex items-center justify-center ">
								<MdShoppingBasket className=" text-2xl ml-6 cursor-pointer" />
								<div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center absolute -top-3 -right-2 ">
									<p className="text-sm text-white font-semibold">2</p>
								</div>
							</div>
							<div className="relative" onClick={login}>
								<label htmlFor="my-drawer-3">
									<motion.img
										whileTap={{ scale: 0.6 }}
										src={user ? user.photoURL : Avatar}
										alt="avatar"
										className="w-10 h-10  ml-6 drop-shadow-xl cursor-pointer rounded-full"
										tabindex="0"
									/>
								</label>
							</div>
						</div>
					</div>
				</div>
				{/* Mobile Side drawer */}
				{user && (
					<div className="drawer-side">
						<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
						<ul className="menu p-4 overflow-y-auto w-80 bg-base-100 flex flex-col gap-8 ">
							<div className="flex flex-col flex-1">
								<div className="text-md py-2 mb-2">
									Welcome,{" "}
									<span className="text-2xl font-semibold text-primary ">
										{user?.displayName}
									</span>{" "}
								</div>
								<label
									htmlFor="my-drawer-3"
									className="text-xl  hover:text-primary duration-300 transition-all ease-in-out cursor-pointer border-b pb-2 mt-2"
								>
									Home
								</label>
								<label
									htmlFor="my-drawer-3"
									className="text-xl  hover:text-primary duration-300 transition-all ease-in-out cursor-pointer border-b pb-2 mt-2"
								>
									Menu
								</label>
								<label
									htmlFor="my-drawer-3"
									className="text-xl  hover:text-primary duration-300 transition-all ease-in-out cursor-pointer border-b pb-2 mt-2"
								>
									About Us
								</label>
								<label
									htmlFor="my-drawer-3"
									className="text-xl  hover:text-primary duration-300 transition-all ease-in-out cursor-pointer pb-2 mt-2"
								>
									Services
								</label>
							</div>
							<div className="flex flex-col gap-4 mb-4">
								{user && user.email === "kartikpavan2@gmail.com" && (
									<li>
										<Link
											to="/createItem"
											className="btn btn-primary border-none text-lg text-white flex items-center gap-2"
										>
											Add Item <MdAdd />
										</Link>
									</li>
								)}
								<li onClick={logout}>
									<Link
										to="/"
										className="btn bg-red-500 border-none text-lg text-white flex items-center gap-2"
									>
										Logout <MdLogout />
									</Link>
								</li>
							</div>
						</ul>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
