import { createAction } from 'redux-actions';
import { getAllCustomers, URL_CUSTOMERS } from '../services/customerAPI';

const GET_CUSTOMER = '[CUSTOMERS] GET_CUSTOMERS';
/** Without create anctions */
// const getCustomers = () => ({ type: GET_CUSTOMER });
const getCustomers = createAction(GET_CUSTOMER, getAllCustomers(URL_CUSTOMERS));

export { GET_CUSTOMER, getCustomers, URL_CUSTOMERS };
