import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import './App.css';

export default class App extends Component {
	renderHome = () => <h1>Home</h1>;
	renderCustomerContainer = () => <h1>Customer container</h1>;
	renderCustomerNewContainer = () => <h1>Customer new container</h1>;

	render() {
		return (
			<Fragment>
				<Router>
					<Route exact path="/" component={HomeContainer} />
					<Route exact path="/customers" component={CustomersContainer} />

					<Switch>
						<Route path="/customers/new" component={this.renderCustomerNewContainer} />
						<Route path="/customers/:dni" component={this.renderCustomerContainer} />
					</Switch>
				</Router>
			</Fragment>
		);
	}
}
