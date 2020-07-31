import React, { useEffect } from "react";
import "./userview.css";
import CardComponent from "../CardComponent/CardComponent";
import { connect } from "react-redux";
import { fetchApiData } from "../../redux";
import { Link } from "react-router-dom";

function TableComponent(props) {
	return (
		<div className="table-wrapper">
			<table className="table table-dark">
				<thead>
					<tr className="table-secondary">
						<th>Name</th>
						<th>ID</th>
						<th>TimeZone</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{props.userData &&
						props.userData.data &&
						props.userData.data.map((member) => (
							<tr className="table-hover" key={member.id}>
								<td>{member.real_name}</td>
								<td>{member.id}</td>
								<td>{member.tz}</td>
								<td>
									<button
										data-toggle="modal"
										data-target=".bd-example-modal-lg"
										className="btn btn-danger"
									>View Activity</button>
									<div
										className="modal fade bd-example-modal-lg"
										tabIndex="-1"
										role="dialog"
										aria-labelledby="myLargeModalLabel"
										aria-hidden="true"
									>
										<div className="modal-dialog modal-lg">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="exampleModalLabel">
														Periods of Activity
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
														aria-hidden="true"
													>
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div className="modal-body">
													<CardComponent data={member} />
													<div className="view-days-btn-wrapper">
														<Link
															to={{
																pathname: "/calendar",
																calendarProps: {
																	member: member,
																},
															}}
														>
															<button className="view-days-button">
																<span className="view-days-button__title">
																	View All Days{" "}
																	<i className="fas fa-calendar-week"></i>
																</span>
															</button>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

function UserView({ userData, fetchApiData }) {
	useEffect(() => {
		fetchApiData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="main-wrapper">
			<div className="title-wrapper">
				<h1>Users' List</h1>
			</div>
			<div className="go-back-btn-wrapper">
				<Link to="/">
					<button className="go-back-button">
						<span className="view-users-button__title">
							<i className="fas fa-chevron-left"></i>
							&nbsp;&nbsp;Go Back
						</span>
					</button>
				</Link>
			</div>
			{userData.loading ? (
				<h2>loading</h2>
			) : userData.error ? (
				<h2>{userData.error}</h2>
			) : (
				<TableComponent userData={userData} />
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		userData: state.api,
	};
};

const mapDispatchToProps = (dispatch) => {
	return { fetchApiData: () => dispatch(fetchApiData()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserView);
