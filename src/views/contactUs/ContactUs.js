import React from 'react';
import ReactDOM from 'react-dom';
import * as emailjs from 'emailjs-com';
import './ContactUs.css';
import SimpleMap from './googleMaps';
import axios from 'axios';
import firebase from '../../firebase';



class ContactUs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'bh',
			mobile: '9003223661',
			email: 'bh@gmail.com',
			comment: 'xzxzxc',
			errorCount: 0,
			isError: false,
			test: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.animateLabel = this.animateLabel.bind(this);
		this.checkValue = this.checkValue.bind(this);
		this.submitBtn = React.createRef();
	}
	componentDidMount() {
		console.clear();
		console.log('im in');
		console.log(firebase.database().ref('data').child('data'));



		firebase.database().ref('data').child('contact').on('value', (snap) => {
			console.log(snap.val());
		});




	}

	render() {
		const { name, email, mobile, comment } = this.state;
		return (
			<div className="container">

				<form className="contact-us-form" onSubmit={this.handleSubmit}>
					<h1 className="section-title">Let's discuss</h1>
					<div>
						<div className="row cols-2">
							<div className="relative">
								<input type="text"
									id="name"
									name="name"
									className="p-100 block"
									onChange={(e) => this.handleChange(e)}
									onFocus={(e) => this.animateLabel(e)}
									onBlur={(e) => { this.checkValue(e) }}
									placeholder=""
									required
									value={this.state.name}
									autoComplete="off"
								/>
								<label htmlFor="name" className="animate-label">Name</label>
								<div className="error-text">Invalid Name</div>
							</div>
							<div className="relative">
								<input type="tel" name="mobile"
									onChange={(e) => this.handleChange(e)}
									onFocus={(e) => this.animateLabel(e)}
									onBlur={(e) => { this.checkValue(e) }}
									id="mobileNumber" value={this.state.mobile} className="p-100 block" autoComplete="off"></input>
								<label htmlFor="mobile" className="animate-label">Mobile</label>
								<div className="error-text">Invalid Mobile Number</div>
							</div>

						</div>

						<div className="row relative">
							<input type="email"
								className="p-100 block"
								name="email"
								onChange={(e) => this.handleChange(e)}
								onFocus={(e) => this.animateLabel(e)}
								onBlur={(e) => { this.checkValue(e) }} id="email" value={this.state.email} autoComplete="off"></input>
							<label htmlFor="email" className="animate-label">Email Address</label>
							<div className="error-text">Invalid Email</div>
						</div>
						<div className="row relative">
							<textarea id="comment" name="comment" className="p-100 block"
								onChange={(e) => this.handleChange(e)}
								onFocus={(e) => this.animateLabel(e)}
								onBlur={(e) => { this.checkValue(e) }}
								rows="5" autoComplete="off"
								value={this.state.comment}></textarea>
							<label htmlFor="comment" className="animate-label">Post your comments</label>
							<div className="error-text">Comment cannot be empty</div>
						</div>
					</div>
					<input type="button" value="Submit" className="btn btn-submit right" ref={this.submitBtn}
						disabled={!this.state.name || !this.state.mobile || !this.state.email || !this.state.comment || this.state.isError || document.getElementsByClassName('error').length > 0}
						onClick={this.handleSubmit} />
				</form>
				<div className="locate-us">
					<h1 className="section-title">Let's connect</h1>
					<SimpleMap></SimpleMap>
					<div className="droplet-location">
						<div className="clear">
							<div className="icofont-location-pin left"></div>
							<div className="left droplet-address">
								<h4>Droplet Wealth Advisory</h4>
								Tower 24, Flat #1104, North Town, Jamalia, Perambur
								 Chennai – 600 011 <br />
								Tamil Nadu, India
							</div>
						</div>
						<div className="icofont-ui-call clear"><strong>99623 99924</strong></div>
						<div className="icofont-email"><strong>dropletadvisory@gmail.com
</strong></div>


					</div>
				</div>
			</div>
		)
	}
	animateLabel(e) {
		//	e.target.className += " animated"
		e.target.classList.remove("set-default");
		e.target.classList.remove("error");
		e.target.classList.add("field-animated")
	}
	checkValue(e) {
		let inputType = e.target.type
		if (e.target.value == null || e.target.value == '') {
			e.target.classList.add("set-default")
			e.target.classList.remove("field-animated")
		}
		switch (inputType) {
			case "text":
				if (/^([a-zA-Z]+)$/.test(e.target.value) && (e.target.value) != null) {
					this.setState({
						errorCount: this.state.errorCount - 1,
						isError: false
					})

				}
				else {
					e.target.classList.add('error');
					this.setState({
						errorCount: this.state.errorCount + 1,
						isError: true
					})
				}
				break;
			case "email":
				if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) && (e.target.value) != null) {
					this.setState({
						errorCount: this.state.errorCount - 1,
						isError: false
					})

				}
				else {
					e.target.classList.add('error');
					this.setState({
						errorCount: this.state.errorCount + 1,
						isError: true
					})
				}
				break;
			case "tel":
				if (/^\d{10}$/.test(e.target.value) && (e.target.value) != null) {
					this.setState({
						errorCount: this.state.errorCount - 1,
						isError: false
					})
				}
				else {
					e.target.classList.add('error');
					this.setState({
						errorCount: this.state.errorCount + 1,
						isError: true
					})
				}
				break;
			default:
				break;
		}
		console.log(document.getElementsByClassName('error').length)
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
			[e.target.mobile]: e.target.value,
			[e.target.email]: e.target.value,
			[e.target.comment]: e.target.value

		})
	}

	handleSubmit(event) {
		event.preventDefault();

		const { name, email, mobile, comment } = this.state;


		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => response.json())
			.then(json => console.log(json))


		var data = new FormData();
		data.append("name", "chotu");
		data.append("age", "12");

		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function () {
			if (this.readyState === 4) {
				console.log(this.responseText);
			}
		});

		xhr.open("POST", "/ContactUs/comments");
		xhr.setRequestHeader("cache-control", "no-cache");
		xhr.setRequestHeader("postman-token", "1c3f61ed-7c1c-78b3-12de-a78a9dbe974d");

		xhr.send(data);


		const templateId = 'template_WXjvXZJi';
		const userId = 'user_jGbfA1cf87kBG6A6nYDBs'

		//	this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email }, userId)
	}
	sendFeedback(templateId, variables, id) {
		emailjs.send(
			'gmail', templateId,
			variables, id
		).then(res => {
			console.log('Email successfully sent!')
		})
			// Handle errors here however you like, or use a React error boundary
			.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
	}
}
export default ContactUs;



