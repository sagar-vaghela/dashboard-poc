import {
	FETCH_COMMENTS_FAILURE,
	FETCH_COMMENTS_SUCCESS,
	FETCH_COMMENTS_REQUEST,
} from '../actions/commentTypes';

const initialState = {
	loading: false,
	comments: [],
	error: '',
};

const commentData = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COMMENTS_FAILURE:
			return {
				...state,
				loading: true,
			};
		case FETCH_COMMENTS_SUCCESS:
			return {
				loading: false,
				comments: action.payload,
				error: '',
			};
		case FETCH_COMMENTS_REQUEST:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default commentData;
