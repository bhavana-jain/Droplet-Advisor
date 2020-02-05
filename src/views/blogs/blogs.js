import React from 'react';
import ReactDOM from 'react-dom';
import data from '../blogs.json';
import BlogsNavigation from './blogNav';
import { NavLink, useParams } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const newdata = data.map((data) => {
	const BlogName = data.comp;
	const BlogNameUrl = "/blog/" + BlogName;
	const blogComp = data.compName;
	let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let blogDate = new Date(data.createdOn).toString();
	console.log(months[new Date(data.createdOn).getMonth() - 1]);
	blogDate = `${months[new Date(data.createdOn).getMonth() - 1]} ` + `${new Date(data.createdOn).getDate()}` + ` , ` + `${new Date(data.createdOn).getFullYear()}`;
	return (
		<div key={data.id} className="blog-list">
			<img src={`images/${data.image}.jpg`}></img>
			<div className="blog-description-wrap">
				<div className="blog-description">
					<div><h3>{data.title}</h3></div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
					<NavLink to={{ pathname: `${BlogNameUrl}`, state: `${blogComp}` }}>
							Learn More
            </NavLink>
					</p>
				</div>
				<p className="blog-otherInfo">By {data.author} | {data.category} | {blogDate} </p>
			</div>

		</div>

	)
}
)
let searchVal = ""
let filterData = () => data.map(function (data) {
	console.log("alert", searchVal);
	console.log(data.title.indexOf(searchVal));
	if (data.title.indexOf(searchVal) >= 0) {
		const BlogName = data.comp;
		const BlogNameUrl = "/blog/" + BlogName;
		const blogComp = data.compName;
		let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
		let blogDate = new Date(data.createdOn).toString();
		blogDate = `${months[new Date(data.createdOn).getMonth() - 1]} ` + `${new Date(data.createdOn).getDate()}` + ` , ` + `${new Date(data.createdOn).getFullYear()}`;
		return (

			<div key={data.id} className="blog-list">
				<img src={`images/${data.image}.jpg`}></img>
				<div className="blog-description-wrap">
					<div className="blog-description">
						<div><h3>{data.title}</h3></div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
		 			<NavLink to={{ pathname: `${BlogNameUrl}`, state: `${blogComp}` }}>
								Learn More
		    </NavLink>
						</p>
					</div>
					<p className="blog-otherInfo">By {data.author} | {data.category} | {blogDate} </p>
				</div>

			</div>

		)
	}
})
export default class Blogs extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		searchVal = this.props.filter
		return (

			<div className="main-blog">
				{searchVal != "" ? filterData(searchVal) : newdata}
			</div>
		)
	}
}