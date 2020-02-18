import React from 'react';
import ReactDOM from 'react-dom';
import * as emailjs from 'emailjs-com';
import axios from 'axios';
import data from './comments.json';


class BlogComment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
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
		const templateId = 'template_WXjvXZJi';
		const userId = 'user_jGbfA1cf87kBG6A6nYDBs';
		let postData = {
			name: this.state.name,
			email: this.state.email,
			comment: this.state.comment
		};

		let axiosConfig = {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',

				"Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
			}
		};

		axios.post('./comments', postData)
			.then((res) => {
				console.log("RESPONSE RECEIVED: ", res);
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})




		//this.sendFeedback(templateId, { message_html: this.state.comment, from_name: this.state.name, reply_to: this.state.email }, userId)
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

	render() {

		return (
			<form onSubmit={this.handleSubmit} className="blog-comment">
				<h3>Submit a comment</h3>
				<p>Your email address will not be published. <br />
					Required fields are marked <span className="text-red bold">*</span></p>
				<div>
					<div className="row cols-2">
						<div className="relative">
							<input type="text"
								id="name"
								name="name"
								className="p-100 block required"
								value="daram"
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
								className="p-100 block required"
								name="email"
								value="bhavanachajjed@gmail.com"
								onChange={(e) => this.handleChange(e)}
								onFocus={(e) => this.animateLabel(e)}
								onBlur={(e) => { this.checkValue(e) }} id="email" value={this.state.email}></input>
							<label htmlFor="email" className="animate-label">Email Address</label>
							<div className="error-text">Invalid Email</div>
						</div>
					</div>


					<div className="row relative">
						<textarea id="comment" name="comment" className="p-100 block required"
							onChange={(e) => this.handleChange(e)}
							onFocus={(e) => this.animateLabel(e)}
							onBlur={(e) => { this.checkValue(e) }}
							rows="5"
							value={this.state.comment}>blog comment here</textarea>
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
		this.setState({
			[e.target.name]: e.target.value,
			[e.target.mobile]: e.target.value,
			[e.target.email]: e.target.value,
			[e.target.comment]: e.target.value

		})
	}

}
export default BlogComment;



