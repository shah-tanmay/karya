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
import { useHistory } from "react-router-dom";

type User = {
	name: string;
	email: string;
	premium: Boolean;
};

const Login = () => {
	const history = useHistory();
	const [token, setToken] = useState<String | null>(null);
	const [user, setUser] = useState<User | null>(null);
	const [addUser, { loading }] = useMutation(createUser, {
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
				history.push("/agenda");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	useEffect(() => {
		const getUser = async () => {
			if (token && user) {
				const response = await addUser();
				console.log(response.data.createUser);
				console.log(loading);
			}
		};
		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, token]);
	return (
		<div>
			<button onClick={signInWithGoogle}>Sign In</button>
		</div>
	);
};

export default Login;
