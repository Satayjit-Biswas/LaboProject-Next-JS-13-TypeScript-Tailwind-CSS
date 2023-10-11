/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="container">
			<div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
				<Link className="navbar_link" href="#">
					Home
				</Link>
				<Link className="navbar_link" href="#">
					CATEGORIES
				</Link>
				<Link className="navbar_link" href="#">
					MEN'S
				</Link>
				<Link className="navbar_link" href="#">
					WOMEN'S
				</Link>
				<Link className="navbar_link" href="#">
					JEWELRY
				</Link>
				<Link className="navbar_link" href="#">
					PERFUME
				</Link>
				<Link className="navbar_link" href="#">
					BLOG
				</Link>
				<Link className="navbar_link" href="#">
					HOT OFFERS
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
