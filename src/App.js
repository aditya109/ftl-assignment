import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Calendar from "./PComponents/Calendar/Calendar";
import LandingPage from "./PComponents/LandingPage/LandingPage";
import UserView from "./PComponents/UserView/UserView";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Switch>
						<Route path="/" exact component={LandingPage} />
						<Route path="/home" exact component={LandingPage} />
						<Route path="/userview" exact component={UserView} />
						<Route path="/calendar" exact component={Calendar} />
					</Switch>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
