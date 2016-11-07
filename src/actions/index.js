import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'https://www.reddit.com/r/';
const category = 'cat';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}${category}.json`);

	return ({
		type: FETCH_POSTS,
		payload: request
	});
}
