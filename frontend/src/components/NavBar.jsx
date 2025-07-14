import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<nav className="navbar container pt-3 pb-3 align-items-start">
				<Link className="navbar-brand" to="/">Stock Prediction App</Link>
				<div>
					<a className="btn btn-outline-info me-2">Login</a>
					<Link className="btn btn-info" to="/signup">Sign up</Link>
				</div>
			</nav>
		</>
	);
}
