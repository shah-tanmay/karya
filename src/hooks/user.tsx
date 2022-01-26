import { useEffect, useState } from "react";
import { User, getAuth } from "@firebase/auth";
import { app } from "../firebase/firebase.config";

const useAuthListner = () => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const auth = getAuth(app);
	useEffect(() => {
		const listner = () =>
			auth.onAuthStateChanged(async (user) => {
				if (user) {
					setLoading(false);
					setUser(user);
				} else {
					setLoading(false);
				}
			});
		listner();
	}, []);
	return { user, loading };
};

export default useAuthListner;
