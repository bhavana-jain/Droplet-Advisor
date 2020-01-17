import React from 'react';
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
import BlogDetails from './views/blogs/blog'
// import realtyReality from './views/blogs/realtyReality';
// import tiffenForKid from './views/blogs/blog-details/tiffenForKid';
// import losingFewCrores from './views/blogs/blog-details/losing-few-crores';
// import securingFuture from './views/blogs/blog-details/securingFuture';


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
						<Route path='/about-us' component={AboutUs} />
						<Route path='/contactus' component={ContactUs} />
						<Route path="/financialplanning" component={financialPlanning} />
						<Route path='/insurance' component={insurance} />
						<Route path='/mutualFunds' component={mutualFunds} />
						<Switch>
							<Route exact path='/blog' component={Blogs} />
							<Route path='/blog/:id' component={BlogDetails} />
						</Switch>
						{/* <Route path='/blogs/reality-about-realty' component={realtyReality} />
						<Route path='/blog/tiffen-for-kid' component={tiffenForKid} />
						<Route path='/blog/losing-few-crores' component={losingFewCrores} />
						<Route path='/blog/secure-your-future' component={securingFuture} /> */}
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