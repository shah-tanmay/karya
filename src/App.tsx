import ApolloClient from "apollo-boost";
import React, { useState } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { UserContext } from "./context/usercontext";
import { app } from "./firebase/firebase.config";
import useAuthListner from "./hooks/user";
import View from "./Views";
import Login from "./Views/Login";
import { getAuth } from "@firebase/auth";

export const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
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
