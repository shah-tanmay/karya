import View from "./Views";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Login from "./Views/Login";

export const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
});

function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Switch>
					<Route path="/agenda">
						<View />
					</Route>
					<Route path="/">
						<Login />
					</Route>
				</Switch>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
