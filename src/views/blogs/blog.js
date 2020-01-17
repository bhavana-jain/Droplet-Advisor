import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, useParams } from 'react-router-dom';
class BlogDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blogName: '',
			module: null
		}
	}
	render() {
		const NewBlog = this.props.match.params.id


		let NewBlogUrl = "./" + NewBlog + ".js";
		alert(NewBlog, NewBlogUrl);
		// import(`${NewBlog}`)
		// 	.then(blogName => this.setState({ blogName: blogName.default }))
		// const { blogName: Component } = this.state;
		import(`${NewBlogUrl}`).then((module) => {
			alert(module.default);

		})
		const Container = [{ NewBlog }]

		const ContainerNew = React.createElement(Container[0])
		//	return Container;

		return (
			<div id="blogdetails">  {NewBlog}
				<ContainerNew />
			</div>
		)
	}
}
export default BlogDetails;