import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
} from 'react-router-dom';
import Header from './views/header/Header';
import Home from './views/home/Home';
import ContactUs from './views/contactUs/ContactUs';
import financialPlanning from './views/ourServices/financialPlanning';
import insurance from './views/ourServices/insurance';
import mutualFunds from './views/ourServices/mutualFunds';



class App extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidUpdate() {
		console.log('com updated');
	}
	render() {
		return (
			<div>

				<Router>
					<Header></Header>

					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/home' component={Home} />
						<Route path='/contactus' component={ContactUs} />
						<Route path="/financialplanning" component={financialPlanning} />
						<Route path='/insurance' component={insurance} />
						<Route path='/mutualFunds' component={mutualFunds} />
					</Switch>
					<footer className="clear">
						<ul className="ul-reset flex connect-options">
							<li>
								<NavLink to='/contactus' className="icon-call"></NavLink>
							</li>
							<li>
								<NavLink to='/contactus' className="icon-email"></NavLink>
							</li>
							<li>
								<a href="https://www.facebook.com/DropletWealth/" target="_blank" className="icon-facebook"></a>

							</li>
							<li>
								<a href="https://twitter.com/DropletWealth" target="_blank" className="icon-instagram"></a>

							</li>
						</ul>
					</footer>
				</Router>


			</div>
		)
	}
}
export default App