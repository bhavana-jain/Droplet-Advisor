import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, useParams } from 'react-router-dom';

class Blogs extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (

			<div>
				<div>{this.props.match.params.id}</div>
				<NavLink to="/blogs/realtyReality">Link here</NavLink></div>
		)
	}
}
export default Blogs;