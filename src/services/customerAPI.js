const URL_BASE = 'http://localhost:4000/';
const URL_CUSTOMERS = `${URL_BASE}customers`;

const getAllCustomers = (URL) => () => fetch(URL).then((response) => response.json());

export { URL_CUSTOMERS, getAllCustomers };
