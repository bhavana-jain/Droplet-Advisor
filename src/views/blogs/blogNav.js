import React from 'react';
import ReactDOM from 'react-dom';
import data from '../blogs.json'
import { NavLink, useParams } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Blogs from './blogs';

const newdata = data.map((data) => {
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
)
export default class BlogsNavigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			shldSearch: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.searchBlog = this.searchBlog.bind(this);
	}
	render() {
		return (
			<>
				{this.state.shldSearch ? <Blogs filter={this.state.search} /> : <Blogs />}
				<div className="blogs-nav">
					<div className="blogs-nav-blocks">
						<input type="text" id="search"
							name="search"
							className="search-blog"
							onChange={(e) => this.handleChange(e)}
							placeholder="Search Blogs"
							required
							value={this.state.search} />
						<button className="btn" onClick={(e) => this.searchBlog(e)}>Search</button>

					</div>
					<div className="blogs-nav-blocks">
						<h3>Recent Posts</h3>
					</div>
					<div className="blogs-nav-blocks">
						<h3>Archives</h3>
					</div>
				</div>
			</>
		)
	}
	handleChange(e) {
		this.setState({
			search: e.target.value
		})
	}
	searchBlog(e) {
		let searchVal = this.state.search;
		this.setState({
			shldSearch: true

		})
		// const filterSearch = data.filter(function (data) {

		// 	if (data.title.indexOf(searchVal) >= 0) {
		// 		const BlogName = data.comp;
		// 		const BlogNameUrl = "/blog/" + BlogName;
		// 		const blogComp = data.compName;
		// 		let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
		// 		let blogDate = new Date(data.createdOn).toString();
		// 		blogDate = `${months[new Date(data.createdOn).getMonth() - 1]} ` + `${new Date(data.createdOn).getDate()}` + ` , ` + `${new Date(data.createdOn).getFullYear()}`;
		// 		return (

		// 			<div key={data.id} className="blog-list">
		// 				<img src={`images/${data.image}.jpg`}></img>
		// 				<div className="blog-description-wrap">
		// 					<div className="blog-description">
		// 						<div><h3>{data.title}</h3></div>
		// 						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
		// 			<NavLink to={{ pathname: `${BlogNameUrl}`, state: `${blogComp}` }}>
		// 								Learn More
		//     </NavLink>
		// 						</p>
		// 					</div>
		// 					<p className="blog-otherInfo">By {data.author} | {data.category} | {blogDate} </p>
		// 				</div>

		// 			</div>

		// 		)
		// 	}

		// });
		// //	console.log(filterSearch);

	}
}