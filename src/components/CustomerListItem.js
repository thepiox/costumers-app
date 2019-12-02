import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomerListItem = ({ delAction, dni, editAction, name, urlPath }) => {
	return (
		<Fragment>
			<div className="customer-list-item__container">
				<div className="field">
					<Link to={`${urlPath}${dni}`}>{name}</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
				</div>
			</div>
		</Fragment>
	);
};

CustomerListItem.propTypes = {
	delAction: PropTypes.string.isRequired,
	dni: PropTypes.number.isRequired,
	editAction: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;
