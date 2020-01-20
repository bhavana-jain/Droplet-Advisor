import React from 'react';
import ReactDOM from 'react-dom';
import * as emailjs from 'emailjs-com';
import './ContactUs.css';
import SimpleMap from './googleMaps';



class ContactUs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			mobile: '',
			email: '',
			comment: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.animateLabel = this.animateLabel.bind(this);
		this.checkValue = this.checkValue.bind(this);
	}

	render() {

		return (
			<div className="container">

				<form className="contact-us-form">
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
								/>
								<label htmlFor="name" className="animate-label">Name</label>
								<div className="error-text">Invalid Name</div>
							</div>
							<div className="relative">
								<input type="tel" name="mobile"
									onChange={(e) => this.handleChange(e)}
									onFocus={(e) => this.animateLabel(e)}
									onBlur={(e) => { this.checkValue(e) }}
									id="mobileNumber" value={this.state.mobile} className="p-100 block"></input>
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
								onBlur={(e) => { this.checkValue(e) }} id="email" value={this.state.email}></input>
							<label htmlFor="email" className="animate-label">Email Address</label>
							<div className="error-text">Invalid Email</div>
						</div>
						<div className="row relative">
							<textarea id="comment" name="comment" className="p-100 block"
								onChange={(e) => this.handleChange(e)}
								onFocus={(e) => this.animateLabel(e)}
								onBlur={(e) => { this.checkValue(e) }}
								rows="5"
								value={this.state.comment}></textarea>
							<label htmlFor="comment" className="animate-label">Post your comments</label>
							<div className="error-text">Comment cannot be empty</div>
						</div>
					</div>
					<input type="button" value="Submit" className="btn btn-submit right" onClick={this.handleSubmit} />
				</form>
				<div className="locate-us">
					<SimpleMap></SimpleMap>
					<div className="droplet-location">
						<div className="clear">
							<div className="icofont-location-pin left"></div>
							<div className="left">
								<h4>Droplet Wealth Advisory</h4>
								No. 23, Sri Sai Anugraha, Kagapujandar Nagar, <br />
								New Perungalathur, Chennai – 600 063 <br />
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
		e.target.classList.remove("error")
		e.target.classList.add("animated")
	}
	checkValue(e) {
		let inputType = e.target.type
		if (e.target.value == null || e.target.value == '') {
			e.target.classList.add("set-default")
			e.target.classList.remove("animated")
		}
		switch (inputType) {
			case "text":
				if (/^([a-zA-Z]+)$/.test(e.target.value)) {

				}
				else { e.target.classList.add('error') }
				break;
			case "email":
				if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
					console.log('valid email')
				}
				else { e.target.classList.add('error') }
				break;
			case "tel":
				if (/^\d{10}$/.test(e.target.value)) { console.log('valid num') }
				else { e.target.classList.add('error') }
				break;
			default:
				break;
		}
	}
	handleChange(e) {
		console.log(e)
		this.setState({
			[e.target.name]: e.target.value,
			[e.target.mobile]: e.target.value,
			[e.target.email]: e.target.value,
			[e.target.comment]: e.target.value

		})
	}

	handleSubmit() {
		console.log(this.state.name, this.state.mobile, this.state.email, this.state.comment)
		const templateId = 'template_WXjvXZJi';
		const userId = 'user_jGbfA1cf87kBG6A6nYDBs'

		//this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email }, userId)
	}
	sendFeedback(templateId, variables, id) {
		console.log('2');
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