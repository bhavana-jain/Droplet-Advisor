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
// Show list of recent posts
const recentPost = data.map((data) => {
	const BlogName = data.comp;
	const BlogNameUrl = "/blog/" + BlogName;
	const blogComp = data.compName;
	if (data.recent == "true") {
		return (
			<div key={data.id} className="blogs-recent">
				<NavLink to={{ pathname: `${BlogNameUrl}`, state: `${blogComp}` }}>
					{data.title}
				</NavLink>
			</div>

		)
	}
}
)

// Archives 
let archiveList = ["April 2019", "May 2018", "April 2018", "March 2018", "February 2018", "January 2018", "December 2017"]

export default class BlogsNavigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			archiveText: '',
			shldSearch: false,
			archives: false,
			searchText: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.searchBlog = this.searchBlog.bind(this);
		this.fetchArchive = this.fetchArchive.bind(this);
	}
	render() {
		return (
			<>
				{this.state.shldSearch && !this.state.archives ? <Blogs filter={this.state.searchText} /> : ''}
				{!this.state.shldSearch && this.state.archives ? <Blogs archive={this.state.archiveText} /> : ''}
				{!this.state.shldSearch && !this.state.archives ? <Blogs /> : ''}
				<div className="blogs-nav">
					<div className="blogs-nav-blocks">
						<div className="relative">
							<input type="text" id="search"
								name="search"
								className="search-blog"
								onChange={(e) => this.handleChange(e)}
								placeholder="Search Blogs"
								required
								value={this.state.search} />
							<a href="javascript:;" className="search-icon" onClick={(e) => this.searchBlog(e)}></a>
						</div>
					</div>
					<div className="blogs-nav-blocks">
						<h3>Recent Posts</h3>
						<div>{recentPost}</div>
					</div>
					<div className="blogs-nav-blocks">
						<h3>Archives</h3>
						<ul className="blogs-archive">
							{archiveList.map((archiveList) =>
								<li onClick={() => this.fetchArchive(archiveList)}>{archiveList}</li>
							)}
						</ul>

					</div>
				</div>
			</>
		)
	}
	fetchArchive(year) {
		this.setState({
			archiveText: year,
			archives: true,
			shldSearch: false
		})
	}
	handleChange(e) {
		this.setState({
			search: e.target.value
		})
	}

	searchBlog(e) {
		this.setState({
			shldSearch: true,
			archives: false,
			searchText: this.state.search
		})
	}
}