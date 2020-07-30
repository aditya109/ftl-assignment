import React from "react";
import "./userview.css";
function UserView() {
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
						<tr className="table-hover">
							<td>Egon Spengler</td>
							<td>W012A3CDE</td>
							<td>America/Los_Angeles</td>
						</tr>
						<tr className="table-hover">
							<td>Danyl Moore</td>
							<td>W074WA3X6</td>
							<td>America/Los_Angeles</td>
						</tr>
						<tr className="table-hover">
							<td>Saoirse Flores</td>
							<td>W0E21TJ2H</td>
							<td>America/Los_Angeles</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default UserView;
