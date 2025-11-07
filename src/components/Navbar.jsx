import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-between">
				<Link to="/">
					<img src="https://i5.walmartimages.com/seo/Star-Wars-Logo-Picture-Cartoon-Character-Wall-Art-Vinyl-Sticker-Design-Decal-Girl-Boy-Kids-Bedroom-Nursery-Kindergarten-Fun-Home-Children-Room-Decor_97d371d2-00dd-4ed7-85cd-48e8099c3393_1.068cf2e7d751e8b137e88605bc3efadd.jpeg" alt="" style={{height: '50px', width: '50px'}} />
				</Link>
				<div className="ml-auto">
					<header>Something to Add</header>
					{/* <Link to="/demo">
					</Link> */}
				</div>
			</div>
		</nav>
	);
};