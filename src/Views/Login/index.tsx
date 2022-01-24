import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	UserCredential,
} from "@firebase/auth";
import { app } from "../../firebase/firebase.config";

const Login = () => {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then(async (result: UserCredential) => {
				console.log(await result.user.getIdToken());
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
