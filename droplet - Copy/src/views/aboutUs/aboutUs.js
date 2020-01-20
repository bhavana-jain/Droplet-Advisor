import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';
import { Link, NavLink } from 'react-router-dom';
import ContactUs from '../../views/contactUs/ContactUs'

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.renderServices = this.renderServices.bind(this);
	}

	renderServices(e) {
		console.log(e);
		let list = document.getElementById('services-list');
		if (list.classList.contains('open')) {
			list.classList.remove('open');
			e.target.classList.remove('close');
		}
		else {
			list.classList.add('open');
			e.target.classList.add('close')

		}
	}
	render() {
		return (
			<div className="border-bottom-grey">
				<header className="container header-layer">
					<div class="droplet-menu" id="droplet-menu" onClick={(e) => slideMenu(e)}></div>
					<div class="droplet-logo"></div>
					<div>
						<div className="right">

						</div>
						<ul class="header-tabs clear" id="header-tabs">
							<li><NavLink to='/home' className="link icon-home">Home</NavLink>
							</li>
							<li>
								<NavLink to='/contactus' className="link icon-team">About Us </NavLink>
							</li>
							<li className="services-wrap">
								<div className="link icon-services"
									onClick={this.renderServices}>Our Services</div>
								<ul className="services-list" id="services-list">
									<li><NavLink to='/' className="icon-planning">Financial Planning</NavLink></li>
									<li><NavLink to='/' className="icon-mf">Mutual Funds</NavLink></li>
									<li><NavLink to='/' className="icon-insurance">Insurance</NavLink></li>
								</ul>
							</li>
							<li>
								<NavLink to='/contactus' className="link icon-blog">Blogs</NavLink>
							</li>
							<li>
								<NavLink to='/contactus' className="link icon-connect">Contact Us </NavLink>
							</li>
						</ul>
					</div>
				</header>

			</div>
		)
	}
}
function slideMenu(that) {
	//alert('dasff')
	let menuContainer = document.getElementById('header-tabs');
	if (menuContainer.classList.contains('slide-right')) {
		menuContainer.classList.remove('slide-right');
	}
	else {
		menuContainer.classList.add('slide-right');
	}
}

export default Header;