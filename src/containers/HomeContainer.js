import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions';

export default class HomeContainer extends Component {
	static propTypes = {};

	handleOnClick = () => {
		console.log('handleOnClick');
		this.props.history.push('/customers');
	};

	renderBody = () => (
		<Fragment>
			This is the home page
			<CustomerActions>
				<button onClick={this.handleOnClick}>Client List</button>
				{/* <Link to="/customers">Client List</Link> */}
			</CustomerActions>
		</Fragment>
	);

	render() {
		return (
			<Fragment>
				<h1>Home container</h1>
				<AppFrame header="Home" body={this.renderBody()} />
			</Fragment>
		);
	}
}
