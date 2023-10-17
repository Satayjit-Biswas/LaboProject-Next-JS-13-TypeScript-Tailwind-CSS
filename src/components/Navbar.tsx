import Link from "next/link";

const Navbar = () => {
	return (
		<div className="hidden lg:block">
			<div className="container">
				<div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
					<Link className="navbar__link" href="#">
						HOME
					</Link>
					<Link className="navbar__link" href="#">
						CATEGORIES
					</Link>
					<Link className="navbar__link" href="#">
						{`MEN'S`}
					</Link>
					<Link className="navbar__link" href="#">
						{`WOMEN'S`}
					</Link>
					<Link className="navbar__link" href="#">
						JEWELRY
					</Link>
					<Link className="navbar__link" href="#">
						PERFUME
					</Link>
					<Link className="navbar__link" href="#">
						BLOG
					</Link>
					<Link className="navbar__link" href="#">
						HOT OFFERS
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
