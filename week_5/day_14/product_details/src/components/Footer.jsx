import React from "react";

function Footer() {
	return (
		<footer className="bg-gray-800 text-white text-center py-4 mt-8 shadow-inner">
			<p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
		</footer>
	);
}

export default Footer;
