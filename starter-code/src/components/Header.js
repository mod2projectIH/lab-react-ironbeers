import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="Header bg-primary">
			<Link to="/">
				<h1 className="text-white">HOME</h1>
			</Link>
		</nav>
	);
};

export default Header;
