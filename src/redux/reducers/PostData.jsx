import {
	FETCH_POSTS_FAILURE,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_REQUEST,
} from '../actions/postTypes';

const initialState = {
	loading: false,
	posts: [],
	error: '',
};

const postData = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POSTS_FAILURE:
			return {
				...state,
				loading: true,
			};
		case FETCH_POSTS_SUCCESS:
			return {
				loading: false,
				posts: action.payload,
				error: '',
			};
		case FETCH_POSTS_REQUEST:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default postData;
