import { combineReducers } from 'redux';
import userData from './UserData';
import ThemeReducer from './ThemeReducer';
import postData from './PostData';
import commentData from './CommentData';
import SearchData from './SearchData';

const rootReducer = combineReducers({
	userData,
	ThemeReducer,
	postData,
	commentData,
	SearchData,
});

export default rootReducer;
