import React from "react";
import "./modal.css";

function Modal() {
	return (
		<div className="mobile-wrapper">
			{/* <!-- Header --> */}
			<header className="header">
				<div className="modal-container">
					<h3>
						<span>Activity Period</span>
					</h3>
					<h1>
						<span id="real-name">Egon Spengler</span>
					</h1>
					<h1>
						<span id="id">W012A3CDE</span>
					</h1>
					<h1>
						<span id="tz">America/Los_Angeles</span>
					</h1>
				</div>
			</header>

			{/* <!-- Today --> */}
			<section className="today-box" id="today-box">
				<div className="today-text">
					<h3>
						<span className="breadcrumb">Today</span>
					</h3>
				</div>
				<div className="clock-icon">
					<i className="far fa-clock"></i>
				</div>
				<div className="date-text">
					<h1 className="date-title">May 15, 2018</h1>
				</div>
			</section>

			{/* <!--======= Events =======--> */}

			<section className="events">
				<div className="event-container">
					<h3>Latest Activity</h3>
					<div className="events-wrapper">
						<div className="event">
							<div className="icon-time">
								<i className="fas fa-sun"></i>
							</div>
							<div className="time">
								<h4 className="event__point">
									<span>...logged at</span> 1:54PM
								</h4>
							</div>
						</div>
						<div className="event">
							<div className="icon-time">
								<i className="fas fa-cloud-moon"></i>
							</div>
							<div className="time">
								<h4 className="event__point">
									<span>...logged at</span> 1:33AM
								</h4>
							</div>
						</div>
					</div>
					<button className="add-event-button">
						<span className="add-event-button__title">
							View All Days <i className="fas fa-calendar-week"></i>
						</span>
					</button>
				</div>
			</section>
		</div>
	);
}

export default Modal;
