import React from 'react';
import data from '../blogs.json';
import { NavLink } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import TextTruncate from 'react-text-truncate';
// Show list of recent posts
const recentPost = data.map((data) => {
	const BlogName = data.comp;
	const BlogNameUrl = "/blog/" + BlogName;
	const blogComp = data.compName;
	let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let blogDate = new Date(data.createdOn).toString();
	console.log(months[new Date(data.createdOn).getMonth() - 1]);
	blogDate = `${months[new Date(data.createdOn).getMonth()]} ` + `${new Date(data.createdOn).getDate()}` + ` , ` + `${new Date(data.createdOn).getFullYear()}`;
	if (data.recent == "true") {
		return (
			<div key={data.id} className="blog-list">
				<img src={`/images/${data.image}.jpg`}></img>
				<div className="blog-description-wrap">
					<div className="blog-description">
						<div><h3>{data.title}</h3></div>
						<div className="blog-nav-link">
							<TextTruncate
								line={1.5}
								element="div"
								truncateText="… "
								text={data.description}
							/>
							<NavLink to={{ pathname: `${BlogNameUrl}`, state: `${blogComp}` }}>
								Learn More
            </NavLink>
						</div>
					</div>
					<p className="blog-otherInfo">By {data.author} | {data.category} | {blogDate} </p>
				</div>

			</div>

		)
	}
}
)
export default class TrendingBlogs extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<> {recentPost} </>
		);
	}
}
