import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	UserCredential,
} from "@firebase/auth";
import { app } from "../../firebase/firebase.config";
import { useHistory } from "react-router-dom";

const Login = () => {
	const history = useHistory();
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then(async (result: UserCredential) => {
				await result.user;
				const token = await result.user.getIdToken();
				if (token) {
					history.push("/agenda");
				}
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	return (
		<div>
			<button onClick={signInWithGoogle}>Sign In</button>
		</div>
	);
};

export default Login;
