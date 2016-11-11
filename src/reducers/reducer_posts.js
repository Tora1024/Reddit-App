import { FETCH_POSTS, ERROR } from '../actions/index';

const INITIAL_STATE = { all: {}, error: '' };

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return { ...state, all: action.payload.data };
		case ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
}
