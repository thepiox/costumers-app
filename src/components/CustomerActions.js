import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CustomerActions = ({ children }) => (
	<Fragment>
		<div className="customer-actions__container">
			<Fragment>{children}</Fragment>
		</div>
	</Fragment>
);

CustomerActions.propTypes = {
	children: PropTypes.node.isRequired,
};

export default CustomerActions;
