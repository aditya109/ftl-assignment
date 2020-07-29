import React from "react";

import "./calenderdisplay.css";

class CalenderDisplay extends React.Component {
	state = {
		date: new Date(),
	};
	onChange = (date) => this.setState({ date });

	render() {
		return (
			<div>


			</div>
		);
	}
}

export default CalenderDisplay;
