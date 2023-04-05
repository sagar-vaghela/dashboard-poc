import { FETCH_SEARCH_VALUE } from '../actions/searchTypes';

const initialState = {
	search: '',
};

const SearchData = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SEARCH_VALUE:
			return {
				search: action.payload,
			};
		default:
			return state;
	}
};

export default SearchData;
