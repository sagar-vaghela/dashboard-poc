import {
	FETCH_USERS_FAILURE,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_REQUEST,
} from './userTypes';
import {
	FETCH_POSTS_FAILURE,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_REQUEST,
} from './postTypes';
import {
	FETCH_COMMENTS_FAILURE,
	FETCH_COMMENTS_SUCCESS,
	FETCH_COMMENTS_REQUEST,
} from './commentTypes';
import { FETCH_SEARCH_VALUE } from './searchTypes';
import axios from 'axios';

// --- user ---
export const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	};
};
export const fetchUsersSuccess = (users) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	};
};
export const fetchUsersFailure = (error) => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	};
};
export const fetchUsers = () => {
	return (dispatch) => {
		dispatch(fetchUsersRequest);
		axios
			.get(`https://jsonplaceholder.typicode.com/users`)
			.then((res) => {
				const users = res.data;
				dispatch(fetchUsersSuccess(users));
			})
			.catch((res) => {
				const error = res.message;
				dispatch(fetchUsersFailure(error));
			});
	};
};

// --- post ---
export const fetchPostsRequest = () => {
	return {
		type: FETCH_POSTS_REQUEST,
	};
};
export const fetchPostsSuccess = (posts) => {
	return {
		type: FETCH_POSTS_SUCCESS,
		payload: posts,
	};
};
export const fetchPostsFailure = (error) => {
	return {
		type: FETCH_POSTS_FAILURE,
		payload: error,
	};
};
export const fetchPosts = () => {
	return (dispatch) => {
		dispatch(fetchPostsRequest);
		axios
			.get(`https://jsonplaceholder.typicode.com/posts`)
			.then((res) => {
				const posts = res.data;
				// console.log('posts: ', posts);
				dispatch(fetchPostsSuccess(posts));
			})
			.catch((res) => {
				const error = res.message;
				dispatch(fetchPostsFailure(error));
			});
	};
};

// --- comment ---
export const fetchCommentsRequest = () => {
	return {
		type: FETCH_COMMENTS_FAILURE,
	};
};
export const fetchCommentsSuccess = (comments) => {
	return {
		type: FETCH_COMMENTS_SUCCESS,
		payload: comments,
	};
};
export const fetchCommentsFailure = (error) => {
	return {
		type: FETCH_COMMENTS_REQUEST,
		payload: error,
	};
};
export const fetchComments = (id) => {
	return (dispatch) => {
		dispatch(fetchCommentsRequest);
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
			.then((res) => {
				const comments = res.data;
				// console.log(comments);
				dispatch(fetchCommentsSuccess(comments));
			})
			.catch((res) => {
				const error = res.message;
				dispatch(fetchCommentsFailure(error));
			});
	};
};

// --- search ---
export const fetchSearchValue = (value) => {
	return {
		type: FETCH_SEARCH_VALUE,
		payload: value,
	};
};




