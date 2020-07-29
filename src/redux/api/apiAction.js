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
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				const users = response.data;
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
