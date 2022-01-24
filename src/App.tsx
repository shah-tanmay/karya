import View from "./Views";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Views/Login";

function App() {
	return (
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
	);
}

export default App;
