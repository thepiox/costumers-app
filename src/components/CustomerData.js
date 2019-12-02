import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({ name, dni, age }) => (
	<Fragment>
		<div className="customer__container">
			<h2>Data client</h2>
			<div>
				<strong>
					NAME<i>{name}</i>
				</strong>
			</div>
			<div>
				<strong>
					DNI<i>{dni}</i>
				</strong>
			</div>
			<div>
				<strong>
					AGE<i>{age}</i>
				</strong>
			</div>
		</div>
	</Fragment>
);

CustomerData.propTypes = {
	name: PropTypes.string.isRequired,
	dni: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
};

export default CustomerData;
