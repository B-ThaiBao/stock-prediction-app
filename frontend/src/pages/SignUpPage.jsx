import { useState } from "react";
import useAuthStore from "../features/auth";

export default function SignUpPage() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { authUser, error, signup, isSigningUp } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup({ username, email, password });
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="bg-body-secondary p-5 rounded col-md-6">
					<h3 className="mb-3 text-center">Create an account</h3>
					<p className="lead text-center">Please enter your details to sign up</p>
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<input className="form-control" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
							<small className="text-danger {error?.username && ms-2}">{error?.username}</small>
						</div>
						<div className="mb-3">
							<input className="form-control" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
							<small className="text-danger {error?.email && ms-2}">{error?.email}</small>
						</div>
						<div className="mb-3">
							<input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
							<small className="text-danger {error?.password && ms-2}">{error?.password}</small>
						</div>
						{authUser && <div className="alert alert-success text-center">Registration successful</div>}
						{
							isSigningUp ? <button type="submit" className="btn btn-info mx-auto d-block"><i className="fa-solid fa-spinner fa-spin" /> Please wait...</button>
										: <button type="submit" className="btn btn-info mx-auto d-block">Sign up</button>
						}
					</form>
				</div>
			</div>
		</div>
	)
}
