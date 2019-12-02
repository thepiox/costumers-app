import { handleActions } from 'redux-actions';
import { GET_CUSTOMER } from './actions';

const customers = handleActions(
	{
		[GET_CUSTOMER]: (_, action) => action.payload,
	},
	[]
);

export default customers;
