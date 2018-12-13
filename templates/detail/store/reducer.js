import { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
	id:1,
	title: '',
	content: ''
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionType.CHANGE_DETAIL:
			return state.merge({
				title: action.title,
				content: action.content
			})
		default:
			return state;
	}
}