import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({ age, dni, name }) => (
	<Fragment>
		<h2>Costumer edit</h2>
		<h3>
			Name:{name} | DNI: {dni} | Age:{age}
		</h3>
	</Fragment>
);

CustomerEdit.propTypes = {
	age: PropTypes.string.isRequired,
	dni: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default CustomerEdit;
