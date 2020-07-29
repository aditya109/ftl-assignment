import {
	FETCH_USERS_FAILURE,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_REQUEST,
} from "./apiTypes";

const initialApiState = {
	loading: false,
	data: [],
	error: "",
}


const reducer = (state = initialApiState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false,
			};
		case FETCH_USERS_FAILURE:
			return {
				...state,
				data: [],
				error: action.payload,
			};

		default:
			return {
				state,
			};
	}
};
export default reducer;
