import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCustomers } from '../store/actions';
import { retrieveCustomers } from '../store/selectors';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomerActions from '../components/CustomerActions';

class CustomersContainer extends Component {
	static propTypes = {
		getCustomers: PropTypes.func.isRequired,
		customers: PropTypes.array.isRequired,
	};

	static defaultProps = {
		customers: [],
	};

	componentDidMount() {
		this.props.getCustomers();
	}

	handleNewClient = () => {
		this.props.history.push('/customers/new');
	};

	renderBody = (customerList) => (
		<Fragment>
			<CustomerList customers={customerList} urlPath="customers/" />
			<CustomerActions>
				<button onClick={this.handleNewClient}>Add client</button>
			</CustomerActions>
		</Fragment>
	);

	render() {
		const { customers } = this.props;

		return (
			<Fragment>
				<AppFrame header="Client list" body={this.renderBody(customers)} />
			</Fragment>
		);
	}
}

/** Without create actions **/
// const mapDispatchToProps = (dispatch) => ({ getCustomers: () => dispatch(getCustomers()) });
const mapDispatchToProps = { getCustomers };
const mapStateToProps = (state) => ({
	customers: retrieveCustomers(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomersContainer);
