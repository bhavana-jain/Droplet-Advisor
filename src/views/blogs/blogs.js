import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, useParams } from 'react-router-dom';

class Blogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blogName: '',
			module: null
		}
	}
	render() {
		let NewBlog = this.props.match.params.id
		// import(`${NewBlog}`)
		// 	.then(blogName => this.setState({ blogName: blogName.default }))
		// const { blogName: Component } = this.state;
		console.log(NewBlog)
		return (

			<div>
				<div>{this.props.match.params.id}</div>
			</div>
		)
	}
}
export default Blogs;