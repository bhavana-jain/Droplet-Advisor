import React from 'react';
import ReactDOM from 'react-dom';
import data from '../blogs.json'
import { NavLink, useParams } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
const newdata = data.map((data) => {
	const BlogName = data.comp;
	const BlogNameUrl = "/blog/" + BlogName;
	const blogComp = data.compName
	const blogDate = new Date(data.createdOn)
	//alert(BlogNameUrl);
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
				<p className="blog-otherInfo">By {data.author} | {data.category} | {data.createdOn} </p>
			</div>

		</div>

	)
}
)
export default class Blogs extends React.Component {
	render() {
		return (
			<>  {newdata}  </>

		)
	}
}