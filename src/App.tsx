import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	DefaultOptions,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { UserContext } from "./context/usercontext";
import useAuthListner from "./hooks/user";
import View from "./Views";
import Login from "./Views/Login";

const httpLink = createHttpLink({
	uri: "http://localhost:5000/graphql",
});

const authLink = setContext(async (_, { headers }) => {
	return {
		headers: {
			...headers,
			authorization: "",
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

function App() {
	const { user, loading } = useAuthListner();
	return (
		<BrowserRouter>
			<Switch>
				<ApolloProvider client={client}>
					{!loading && user && (
						<UserContext.Provider value={user}>
							<Route exact path="/login">
								<Login />
							</Route>
							<Route exact path="/agenda">
								<View />
							</Route>
							<React.Fragment>
								{user ? <Redirect to="/agenda" /> : <Redirect to="/login" />}
							</React.Fragment>
						</UserContext.Provider>
					)}
				</ApolloProvider>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
