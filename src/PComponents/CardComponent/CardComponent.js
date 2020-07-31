import React from "react";
import "./cardcomponent.css";

function CardComponent(props) {
	const d = new Date();
	const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
	const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
	const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
	console.log();
	return (
		<div className="mobile-wrapper">
			{/* <!-- Header --> */}
			<header className="header">
				<div className="modal-container">
					<h1>
						<span id="real-name">{props.data.real_name}</span>
					</h1>
					<h4>
						<span id="id">{props.data.id}</span>
					</h4>
					<h5>
						<span id="tz">{props.data.tz}</span>
					</h5>
				</div>
			</header>

			{/* <!-- Today --> */}
			<section className="today-box" id="today-box">
				<div className="today-text">
					<h3>
						<span className="breadcrumb-text">Today</span>
					</h3>
				</div>
				<div className="clock-icon">
					<i className="far fa-clock"></i>
				</div>
				<div className="date-text">
					<h1 className="date-title">{`${da}-${mo}-${ye}`}</h1>
				</div>
			</section>

			{/* <!--======= Events =======--> */}

			<section className="events">
				<div className="event-container">
					<h3>Latest Activity</h3>
					<div className="events-wrapper">
						<div className="event">
							<div className="time">
								{props.data.activity_periods.map((entry) => (
									<div key={entry.id}>
										<h4 className="event__point">
											<span>...logged at</span>{" "}
											{entry.start_time.split("  ")[1]}
										</h4>
										<h4 className="event__point">
											<span>...logged out</span> {entry.end_time.split(" ")[3]}
										</h4>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default CardComponent;
