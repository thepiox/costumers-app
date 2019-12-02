import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({ title }) => (
	<Fragment>
		<div className="header__container">
			<h1>{title}</h1>
		</div>
	</Fragment>
);

AppHeader.propTypes = {
	title: PropTypes.string.isRequired,
};

export default AppHeader;
