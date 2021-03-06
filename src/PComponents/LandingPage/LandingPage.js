import React from "react";
import "./landingpage.css";
import { Link } from "react-router-dom";

function LandingPage() {
	return (
		<div className="landing-container">
			<div className="company-title-wrapper">
				<span>
					Product by <b>company</b>
				</span>
			</div>
			<div className="page-title-wrapper">
				<h1>
					USER
					<br />
					Viewer
				</h1>
				<h3>Mock in ReactJS</h3>
				<p>
					<span>
						Interface for viewing describes a list of users and <br /> their
						corresponding periods of activity across multiple months.
					</span>
				</p>
			</div>
			<div className="right-column">
				<div className="view-btn-wrapper">
					<Link to="/userview">
						<button className="view-users-button">
							<span className="view-users-button__title">
								View All Users &nbsp;&nbsp;
								<i class="fas fa-user-friends"></i>
							</span>
						</button>
					</Link>
				</div>
				<div className="img-placeholder"></div>
			</div>
		</div>
	);
}

export default LandingPage;
