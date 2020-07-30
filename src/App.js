import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
import Calendar from "./PComponents/Calendar/Calendar";
import LandingPage from "./PComponents/LandingPage/LandingPage";
import Modal from "./PComponents/Modal/Modal";
import UserView from "./PComponents/UserView/UserView";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				
				<LandingPage/>
				{/* <Calendar/> */}
				{/* <Modal /> */}
				{/* <UserView/> */}
			</div>
		</Provider>
	);
}

export default App;
