import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
// import LandingPage from "./PComponents/LandingPage/LandingPage";
import UserView from "./PComponents/UserView/UserView";
import Calendar from "./PComponents/Calendar/Calendar";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				{/* <UserView /> */}
				<Calendar/>
			</div>
		</Provider>
	);
}

export default App;
