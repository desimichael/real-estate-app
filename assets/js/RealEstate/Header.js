import React from 'react';

const Header = () => {
	return (
		<header>
			<a href="#" className="logo">
				Real House Inc
			</a>
			<nav>
				<a href="#">Services</a>
				<a href="#">About Us</a>
				<a href="#">Log In</a>
				<a href="#" className="register__btn">
					Register
				</a>
			</nav>
		</header>
	);
};

export default Header;
