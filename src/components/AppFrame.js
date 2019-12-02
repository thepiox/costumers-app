import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const AppFrame = ({ header, body }) => (
	<Fragment>
		<div className="frame__container">
			<AppHeader title={header} />
			<div>{body}</div>
			<div>Simple Application </div>
		</div>
	</Fragment>
);

AppFrame.propTypes = {
	header: PropTypes.string.isRequired,
	body: PropTypes.element.isRequired,
};

export default AppFrame;
