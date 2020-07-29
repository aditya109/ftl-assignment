import axios from "axios";
import {
	FETCH_USERS_FAILURE,
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
} from "./apiTypes";

export const fetchApiData = () => {
	return (dispatch) => {
		dispatch(fetchUsersRequest());
		axios
			.get("http://mock-api-server-py-flask.herokuapp.com/api/v1.0/resources/users/all")
			.then((response) => {
				const users = response.data.members;
				dispatch(fetchUsersSuccess(users));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchUsersSuccess(errorMsg));
			});
	};
};

function fetchUsersRequest() {
	return {
		type: FETCH_USERS_REQUEST,
	};
}
function fetchUsersSuccess(data) {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: data,
	};
}
function fetchUsersFailure(error) {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	};
}

export { fetchUsersFailure, fetchUsersSuccess, fetchUsersRequest };
