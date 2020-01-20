import React from 'react';
import ReactDOM from 'react-dom';
import data from '../blogs.json'
import { NavLink, useParams } from 'react-router-dom';
import RealtyReality from './RealtyReality';

const newdata = data.map((data) => {
	const BlogName = data.comp;
	const BlogNameUrl = "/blog/" + BlogName;
	//alert(BlogNameUrl);
	return (
		<div key={data.id}>
			<div>{data.title}</div>
			<div>{data.comp}</div>
			<NavLink to={BlogNameUrl}>
				Learn More
                        </NavLink>
		</div>

	)
}
)




export default class Blogs extends React.Component {
	render() {
		return (
			<div className=" m-3 p-3 owncard ">  {newdata}  </div>

		)
	}
}