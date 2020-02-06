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
	blogDate = `${months[new Date(data.createdOn).getMonth()]} ` + `${new Date(data.createdOn).getDate()}` + ` , ` + `${new Date(data.createdOn).getFullYear()}`;
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
let searchVal = "", archiveYear = ""
let filterData = () => data.map(function (data) {
	console.log("alert", searchVal);
	console.log(data.title.indexOf(searchVal));
	if (data.title.indexOf(searchVal) >= 0) {
		const BlogName = data.comp;
		const BlogNameUrl = "/blog/" + BlogName;
		const blogComp = data.compName;
		let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
		let blogDate = new Date(data.createdOn).toString();
		blogDate = `${months[new Date(data.createdOn).getMonth()]} ` + `${new Date(data.createdOn).getDate()}` + ` , ` + `${new Date(data.createdOn).getFullYear()}`;
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
let blogMonth, blogYear, archiveMonth, archiveYr;
let archiveData = () => data.map(function (data) {
	let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let blogDate = new Date(data.createdOn).toString();
	blogDate = `${months[new Date(data.createdOn).getMonth()]} ` + `${new Date(data.createdOn).getDate()}` + ` , ` + `${new Date(data.createdOn).getFullYear()}`;
	blogMonth = months[new Date(data.createdOn).getMonth()];
	blogYear = new Date(data.createdOn).getFullYear();
	archiveMonth = months[new Date(archiveYear).getMonth()];
	archiveYr = new Date(archiveYear).getFullYear()
	console.log(months[new Date(data.createdOn).getMonth()], new Date(data.createdOn).getFullYear())
	console.log("archive", months[new Date(archiveYear).getMonth()], new Date(archiveYear).getFullYear())
	if (blogMonth == archiveMonth && blogYear == archiveYr) {
		const BlogName = data.comp;
		const BlogNameUrl = "/blog/" + BlogName;
		const blogComp = data.compName;

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
		searchVal = this.props.filter;
		archiveYear = this.props.archive;
		return (

			<div className="main-blog">
				{!this.props.filter && !this.props.archive ? newdata : ''}
				{this.props.filter ? filterData(searchVal) : ''}
				{this.props.archive ? archiveData(archiveYear) : ''}
			</div>
		)
	}
}