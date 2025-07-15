import { useState } from "react";
import useAuthStore from "../features/auth";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { isAuthUser, error, login, isLoggingIn } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login({ username, password });
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="bg-body-secondary p-5 rounded col-md-6">
					<h3 className="mb-3 text-center">Login</h3>
					<p className="lead text-center">Please enter your details to check credentials</p>
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<input className="form-control" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
							<small className="text-danger {error?.username && ms-2}">{error?.username}</small>
						</div>
						<div className="mb-3">
							<input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
							<small className="text-danger {error?.password && ms-2}">{error?.password}</small>
							<small className="text-danger {error?.detail && ms-2}">{error?.detail}</small>
						</div>
						{isAuthUser && <div className="alert alert-success text-center">Login successful</div>}
						{
							isLoggingIn ? <button type="submit" className="btn btn-info mx-auto d-block"><i className="fa-solid fa-spinner fa-spin" /> Please wait...</button>
										: <button type="submit" className="btn btn-info mx-auto d-block">Login</button>
						}
					</form>
					{isAuthUser && <Navigate to="/" />}
				</div>
			</div>
		</div>
	)
}
