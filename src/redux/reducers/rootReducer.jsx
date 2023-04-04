import { combineReducers } from 'redux';
import userData from './UserData';
import ThemeReducer from './ThemeReducer';
import postData from './PostData';
import commentData from './CommentData';

const rootReducer = combineReducers({
	userData,
	ThemeReducer,
	postData,
	commentData,
});

export default rootReducer;
