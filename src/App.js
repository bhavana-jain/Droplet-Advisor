import React, { createRef } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
} from 'react-router-dom';
import Header from './views/header/Header';
import Home from './views/home/Home';
import AboutUs from './views/aboutUs/aboutUs'
import ContactUs from './views/contactUs/ContactUs';
import financialPlanning from './views/ourServices/financialPlanning';
import insurance from './views/ourServices/insurance';
import mutualFunds from './views/ourServices/mutualFunds';
import Blogs from './views/blogs/blogs';
import BlogsNavigation from './views/blogs/blogNav';
import BlogDetails from './views/blogs/blog';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.header = createRef()
	}
	componentDidMount() {
		document.addEventListener('scroll', function () {
			console.log(window.scrollTop);
		})
	}
	render() {
		return (
			<div>

				<Router>
					<Header
					></Header>

					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/home' component={Home} />
						<Route path='/about-us' component={AboutUs} />
						<Route path='/contactus' component={ContactUs} />
						<Route exact path='/blog' component={BlogsNavigation} />
						<Route path='/blog/:id' component={BlogDetails} />
						<Switch>
							<Route exact path='/our-services' component={financialPlanning} />
							<Route path='/our-services/financialplanning' component={financialPlanning} />
							<Route path='/our-services/insurance' component={insurance} />
							<Route path='/our-services/mutualFunds' component={mutualFunds} />
						</Switch>

						<Switch>

						</Switch>
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