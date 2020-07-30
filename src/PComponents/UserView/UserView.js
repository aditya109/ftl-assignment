import React, { useState } from "react";
import "./userview.css";
import CardComponent from "../CardComponent/CardComponent";
import Calendar from "../Calendar/Calendar";

function UserView() {
	const [showCalendar, setshowCalendar] = useState(false);
	return (
		<div className="main-wrapper">
			<div className="title-wrapper">
				<h1>Users' List</h1>
			</div>
			<div className="table-wrapper">
				<table className="table table-dark">
					<thead>
						<tr className="table-secondary">
							<th>Name</th>
							<th>ID</th>
							<th>TimeZone</th>
						</tr>
					</thead>
					<tbody>
						<tr
							data-toggle="modal"
							data-target=".bd-example-modal-lg"
							className="table-hover"
						>
							<td>Egon Spengler</td>
							<td>W012A3CDE</td>
							<td>America/Los_Angeles</td>
							<div
								class="modal fade bd-example-modal-lg"
								tabindex="-1"
								role="dialog"
								aria-labelledby="myLargeModalLabel"
								aria-hidden="true"
							>
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLabel">
												Periods of Activity
											</h5>
											<button
												type="button"
												class="close"
												data-dismiss="modal"
												aria-label="Close"
											>
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											{/* <CardComponent /> */}
											<div className="btn-wrapper">
												<button
													onClick={() => setshowCalendar(false)}
													className="add-event-button"
												>
													<span className="add-event-button__title">
														View All Days{" "}
														<i className="fas fa-calendar-week"></i>
													</span>
												</button>
											</div>
											{showCalendar ? <Calendar /> : ""}
										</div>
									</div>
								</div>
							</div>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default UserView;
