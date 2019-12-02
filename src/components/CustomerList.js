import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const renderCustomers = (customers, urlPath) =>
	customers.map((customer) => (
		<CustomerListItem
			key={customer.key}
			name={customer.name}
			dni={customer.dni}
			delAction="Delete"
			editAction="Edit"
			urlPath={urlPath}
		/>
	));

const CostumerList = ({ customers, urlPath }) => {
	return (
		<Fragment>
			<div className="customer-list__container">{renderCustomers(customers, urlPath)}</div>
		</Fragment>
	);
};

CostumerList.propTypes = {
	customers: PropTypes.array.isRequired,
	urlPath: PropTypes.string.isRequired,
};

export default CostumerList;
