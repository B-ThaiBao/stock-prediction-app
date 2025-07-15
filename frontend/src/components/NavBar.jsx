import { Link } from "react-router-dom";
import useAuthStore from "../features/auth";

export default function NavBar() {
	const { hasToken, logout } = useAuthStore();

	return (
		<>
			<nav className="navbar container pt-3 pb-3 align-items-start">
				<Link className="navbar-brand" to="/">Stock Prediction App</Link>
				<div>
					{
						hasToken ? <Link className="btn btn-info" onClick={logout}>Logout</Link>
							: (
								<>
									<Link className="btn btn-outline-info me-2" to="/login">Login</Link>
									<Link className="btn btn-info" to="/signup">Sign up</Link>
								</>
							)
					}
				</div>
			</nav>
		</>
	);
}
