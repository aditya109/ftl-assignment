import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
// import LandingPage from "./PComponents/LandingPage/LandingPage";
import UserView from "./PComponents/UserView/UserView";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<UserView />
			</div>
		</Provider>
	);
}

export default App;
