import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	DefaultOptions,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React, { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { UserContext } from "./context/usercontext";
import useAuthListner from "./hooks/user";
import View from "./Views";
import Login from "./Views/Login";
import { getAuth } from "@firebase/auth";
import { app } from "./firebase/firebase.config";

const httpLink = createHttpLink({
	uri: "http://localhost:5000/graphql",
});

function App() {
	const { user, loading } = useAuthListner();
	const [token, setToken] = useState<string | null>(null);
	if (user) {
		const auth = getAuth(app);
		auth.onIdTokenChanged(async (user) => {
			const token = await user!.getIdToken();
			setToken(token);
		});
	}
	const authLink = setContext(async (_, { headers }) => {
		return {
			headers: {
				...headers,
				token: token,
			},
		};
	});

	const defaultOptions: DefaultOptions = {
		watchQuery: {
			fetchPolicy: "no-cache",
			errorPolicy: "ignore",
		},
		query: {
			fetchPolicy: "no-cache",
			errorPolicy: "all",
		},
	};

	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
		defaultOptions: defaultOptions,
	});
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/login">
					<Login />
				</Route>
				{!loading && user && (
					<ApolloProvider client={client}>
						<UserContext.Provider value={user}>
							<Route exact path="/agenda">
								<View />
							</Route>
							<React.Fragment>
								{user ? <Redirect to="/agenda" /> : <Redirect to="/login" />}
							</React.Fragment>
						</UserContext.Provider>
					</ApolloProvider>
				)}
			</Switch>
		</BrowserRouter>
	);
}

export default App;
