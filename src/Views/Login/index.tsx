import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	UserCredential,
} from "@firebase/auth";
import { useEffect, useState } from "react";
import { useMutation } from "react-apollo";
import { app } from "../../firebase/firebase.config";
import { createUser } from "../../queries/UserQuery";

type User = {
	name: string;
	email: string;
	premium: Boolean;
};

const Login = () => {
	const [token, setToken] = useState<String | null>(null);
	const [user, setUser] = useState<User | null>(null);
	const [addUser] = useMutation(createUser, {
		context: {
			headers: {
				token: token,
			},
		},
		variables: {
			name: user?.name,
			email: user?.email,
			premium: user?.premium,
		},
	});
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then(async (result: UserCredential) => {
				await result.user;
				const token = await result.user.getIdToken();
				setToken(token);
				if (result.user.displayName && result.user.email) {
					setUser({
						name: result.user.displayName,
						email: result.user.email,
						premium: false,
					});
				}
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	useEffect(() => {
		if (token && user) {
			console.log(user);
			addUser();
		}
	}, [user, token]);
	return (
		<div>
			<button onClick={signInWithGoogle}>Sign In</button>
		</div>
	);
};

export default Login;
