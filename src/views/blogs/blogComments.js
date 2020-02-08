import React from 'react';
import ReactDOM from 'react-dom';
import * as emailjs from 'emailjs-com';
import axios from 'axios';



class BlogComment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			mobile: '',
			email: '',
			comment: '',
			errorCount: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.animateLabel = this.animateLabel.bind(this);
		this.checkValue = this.checkValue.bind(this);
		this.submitBtn = React.createRef();
	}
	handleSubmit(e) {
		console.log('submit')
		e.preventDefault();
		console.log(this.state.errorCount);
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

	render() {

		return (
			<form onSubmit={this.handleSubmit}>
				<h3>Submit a comment</h3>
				<p>Your email address will not be published. Required fields are marked *</p>
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
							<input type="email"
								className="p-100 block"
								name="email"
								onChange={(e) => this.handleChange(e)}
								onFocus={(e) => this.animateLabel(e)}
								onBlur={(e) => { this.checkValue(e) }} id="email" value={this.state.email}></input>
							<label htmlFor="email" className="animate-label">Email Address</label>
							<div className="error-text">Invalid Email</div>
						</div>
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

				<input type="submit" className="btn btn-submit right" ref={this.submitBtn} value="submit Comment" />

			</form>
		)
	}
	animateLabel(e) {
		//	e.target.className += " animated"
		e.target.classList.remove("set-default");
		e.target.classList.remove("error");
		this.setState({
			errorCount: this.state.errorCount - 1
		})
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
						errorCount: this.state.errorCount - 1
					})
				}
				else {
					e.target.classList.add('error');
					this.setState({
						errorCount: this.state.errorCount + 1
					})
				}
				break;
			case "email":
				if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) && (e.target.value) != null) {
					this.setState({
						errorCount: this.state.errorCount - 1
					})
				}
				else {
					e.target.classList.add('error');
					this.setState({
						errorCount: this.state.errorCount + 1
					})
				}
				break;
			case "tel":
				if (/^\d{10}$/.test(e.target.value) && (e.target.value) != null) {
					this.setState({
						errorCount: this.state.errorCount - 1
					})
				}
				else {
					e.target.classList.add('error');
					this.setState({
						errorCount: this.state.errorCount + 1
					})
				}
				break;
			default:
				break;
		}
		if (this.state.errorCount == 0) {
			//document.querySelector('.btn').removeAttribute('disabled')
			React.findDOMNode(this.refs.submitBtn).removeAttribute('disabled');
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

}
export default BlogComment;



