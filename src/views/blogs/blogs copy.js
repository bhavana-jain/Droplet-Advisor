import React from 'react';
import data from '../blogs.json';
import { NavLink } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

let blogLength = 0;
console.clear();
console.log(data.length)
const newdata = data.map((data) => {

	const BlogName = data.comp;
	const BlogNameUrl = "/blog/" + BlogName;
	const blogComp = data.compName;
	let description = data.description;
	let truncateDescription = description.substring(0, 150) + '...  ';
	let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let blogDate = new Date(data.createdOn).toString();
	blogDate = `${months[new Date(data.createdOn).getMonth()]} ` + `${new Date(data.createdOn).getDate()}` + ` , ` + `${new Date(data.createdOn).getFullYear()}`;
	return (
		<div key={data.id} className="blog-list">
			<img src={`/images/${data.image}.jpg`}></img>
			<div className="blog-description-wrap">
				<div className="blog-description">
					<div className="blog-title-outer">
						<h3>{data.title}</h3>
						<p className="blog-otherInfo"> {blogDate} </p>
					</div>
					<div className="blog-nav-link">
						<p>{truncateDescription}
							<NavLink to={{ pathname: `${BlogNameUrl}`, state: `${blogComp}` }}>
								Learn More
            </NavLink></p>
					</div>
				</div>

			</div>

		</div>

	)
}
)
let searchVal = "", archiveYear = ""
let filterData = () => data.map(function (data) {
	if (data.tags.indexOf(searchVal) >= 0) {
		const BlogName = data.comp;
		const BlogNameUrl = "/blog/" + BlogName;
		const blogComp = data.compName;
		let description = data.description;
		let truncateDescription = description.substring(0, 150) + '...  ';
		let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
		let blogDate = new Date(data.createdOn).toString();
		blogDate = `${months[new Date(data.createdOn).getMonth()]} ` + `${new Date(data.createdOn).getDate()}` + ` , ` + `${new Date(data.createdOn).getFullYear()}`;
		return (

			<div key={data.id} className="blog-list">
				<img src={`/images/${data.image}.jpg`}></img>
				<div className="blog-description-wrap">
					<div className="blog-description">
						<div className="blog-title-outer">
							<h3>{data.title}</h3>
							<p className="blog-otherInfo"> {blogDate} </p>
						</div>
						<div className="blog-nav-link">
							<p>{truncateDescription}
								<NavLink to={{ pathname: `${BlogNameUrl}`, state: `${blogComp}` }}>
									Learn More
            </NavLink></p>
						</div>
					</div>

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
	archiveYr = new Date(archiveYear).getFullYear();
	let description = data.description;
	let truncateDescription = description.substring(0, 150) + '...  ';
	console.log(months[new Date(data.createdOn).getMonth()], new Date(data.createdOn).getFullYear())
	console.log("archive", months[new Date(archiveYear).getMonth()], new Date(archiveYear).getFullYear())
	if (blogMonth == archiveMonth && blogYear == archiveYr) {
		const BlogName = data.comp;
		const BlogNameUrl = "/blog/" + BlogName;
		const blogComp = data.compName;

		return (

			<div key={data.id} className="blog-list">
				<img src={`/images/${data.image}.jpg`}></img>
				<div className="blog-description-wrap">
					<div className="blog-description">
						<div className="blog-title-outer">
							<h3>{data.title}</h3>
							<p className="blog-otherInfo"> {blogDate} </p>
						</div>
						<div className="blog-nav-link">
							<p>{truncateDescription}
								<NavLink to={{ pathname: `${BlogNameUrl}`, state: `${blogComp}` }}>
									Learn More
            </NavLink></p>
						</div>
					</div>

				</div>
			</div>

		)
	}

})
export default class Blogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: newdata,
			currentPage: 1,
			todosPerPage: 3
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		this.setState({
			currentPage: Number(event.target.id)
		});
	}

	render() {

		searchVal = this.props.filter;
		archiveYear = this.props.archive;
		return (

			<div className="main-blog">
				{!this.props.filter && !this.props.archive || this.props.filter == "" ? newdata : ''}
				{this.props.filter ? filterData(searchVal) : ''}
				{this.props.archive ? archiveData(archiveYear) : ''}
			</div>
		)
	}
}