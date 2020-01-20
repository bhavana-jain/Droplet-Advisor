import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, useParams } from 'react-router-dom';
class BlogDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			BlogName: null,
			module: null
		}
	}
	componentDidMount() {

	}
	render() {

		return (
			<div id="blogdetails">
			</div>
		)
	}
}
export default BlogDetails;