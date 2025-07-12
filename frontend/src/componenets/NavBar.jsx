export default function NavBar() {
	return (
		<>
			<nav className="navbar container pt-3 pb-3 align-items-start">
				<a className="navbar-brand">Stock Prediction App</a>
				<div>
					<a className="btn btn-outline-info me-2">Login</a>
					<a className="btn btn-info">Sign up</a>
				</div>
			</nav>
		</>
	);
}
