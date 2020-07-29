import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchApiData } from "../../redux";

function UserView({ userData, fetchApiData }) {
	useEffect(() => {
		fetchApiData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	console.log("==>==>==>==>==>==> ");
	console.log(userData.data);
	return userData.loading ? (
		<h2>Loading</h2>
	) : userData.error ? (
		<h2>{userData.error}</h2>
	) : (
		<div>
			<h2>Users' List</h2>
			<div>
				{userData &&
				userData.data &&
				userData.data.map((user) => <p key={user.id}>{user.name}</p>)}
			</div>
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
