import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import Header from './views/header/Header';
import Home from './views/Home';
import ContactUs from './views/contactUs/ContactUs';



class App extends React.Component {
	constructor(props) {
		super(props);
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
					</Switch>
					<footer className="clear">
						<ul className="ul-reset flex connect-options">
							<li>
								<a href="javascript:;" className="icon-call"></a>
							</li>
							<li>
								<a href="javascript:;" className="icon-email"></a>
							</li>
							<li>
								<a href="javascript:;" className="icon-facebook"></a>

							</li>
							<li>
								<a href="javascript:;" className="icon-instagram"></a>

							</li>
						</ul>
					</footer>
				</Router>


			</div>
		)
	}
}
export default App