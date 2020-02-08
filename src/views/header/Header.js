import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';
import { Link, NavLink } from 'react-router-dom';
import ContactUs from '../../views/contactUs/ContactUs'

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sideMenu: false,
			droplist: false,
			childActive: false,
			fixHeader: false
		};
		this.renderServices = this.renderServices.bind(this);
		this.slideMenu = this.slideMenu.bind(this);
		this.updateSource = this.updateSource.bind(this);
		this.setDefault = this.setDefault.bind(this);
		this.hideSideMenu = this.hideSideMenu.bind(this);
	}

	setDefault() {
		this.setState({
			childActive: false,
			droplist: false,
			slideMenu: false
		})
	}

	updateSource() {
		this.setState({
			childActive: true,
			slideMenu: false
		})
	}
	// Our services droplist
	renderServices(e) {
		e.preventDefault();
		this.setState({
			droplist: !this.state.droplist,
		})
	}

	// Side navigation menu for mobile and tablet
	slideMenu() {
		this.setState({
			slideMenu: !this.state.slideMenu
		})
	}
	hideSideMenu() {
		this.setState({
			slideMenu: false
		})
	}

	componentDidMount() {
		let headerFix = false;
		document.addEventListener('scroll', this.updateHeader);
		document.body.addEventListener('click', function (e) {
			let headerTabs = document.getElementById('header-tabs');
			let serviceList = document.getElementById('services-list');
			if (headerTabs.classList.contains('slide-right')) {
				setTimeout(function () {
					//	headerTabs.classList.remove('slide-right');
				}, 500);
			}
			else if (serviceList.classList.contains('open')) {
				setTimeout(function () {
					document.querySelector('.icon-services').classList.remove('close');
					serviceList.classList.remove('open');
				}, 500);
			}
		});
	}
	updateHeader = () => {
		if (document.documentElement.scrollTop - 30 >= this.divElement.clientHeight) {
			this.setState({
				fixHeader: true
			})
		}
		else {
			this.setState({
				fixHeader: false
			})
		}
	}
	render() {
		return (
			<div className={"border-bottom-grey " + (this.state.fixHeader ? "sticky-header" : "")} ref={(divElement) => { this.divElement = divElement }}>
				<header className="container header-layer">
					<div className="droplet-menu" id="droplet-menu" onClick={this.slideMenu}></div>
					<NavLink className="droplet-logo" to='/home'></NavLink>
					<div>
						<ul className={"header-tabs clear " + (this.state.slideMenu == true ? 'slide-right' : '')} id="header-tabs">
							<li><NavLink exact to='/' className="link icon-home" onClick={this.setDefault}>Home</NavLink>
							</li>
							<li>
								<NavLink to='/about-us' className="link icon-team" onClick={this.setDefault}>About Us </NavLink>
							</li>
							<li className={"services-wrap"}>
								<NavLink to='/our-services/financialplanning' className={"link icon-services " + (this.state.droplist ? "close" : '') + (this.state.childActive ? " close active" : "")}
									onClick={this.renderServices}>Our Services</NavLink>
								<ul className={"services-list " + (this.state.droplist ? "open" : "")} id="services-list">
									<li><NavLink to='/our-services/financialplanning'
										onClick={this.updateSource}
										className="icon-planning" onClick={this.updateSource}>Financial Planning</NavLink></li>
									<li><NavLink to='/our-services/mutualFunds' onClick={this.updateSource} className="icon-mf">Mutual Funds</NavLink></li>
									<li><NavLink to='/our-services/insurance' onClick={this.updateSource} className="icon-insurance">Insurance</NavLink></li>
								</ul>
							</li>
							<li>
								<NavLink to='/blog' onClick={this.setDefault} className="link icon-blog">Blogs</NavLink>
							</li>
							<li>
								<NavLink to='/contactus' onClick={this.setDefault} className="link icon-connect">Contact Us </NavLink>
							</li>
						</ul>
					</div>
				</header>
				<div className={"page-overlay " + (this.state.slideMenu == true ? 'active' : '')} onClick={this.hideSideMenu}></div>
			</div>
		)
	}
}



export default Header;