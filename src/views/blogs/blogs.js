import React from 'react';
import data from '../blogs.json';
import { NavLink } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import ReactPaginate from 'react-paginate';

let searchVal = "", archiveYear = ""
let filterData = () => data.map(function (data) {
	if (data.tags.indexOf(searchVal.toLowerCase()) >= 0 || data.tags.indexOf(searchVal) >= 0) {
		console.clear();
		console.log(data.compName)
		const BlogName = data.comp;
		const BlogNameUrl = "/blog/" + BlogName;
		let blogComp = data.compName;
		let description = data.description;
		let truncateDescription = description.substr(0, 150) + '...  ';
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
								<NavLink to={{ pathname: `${BlogNameUrl}`, state: { comp: `${blogComp}` } }}>
									Learn More
            </NavLink></p>
						</div>
					</div>

				</div>

			</div >

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
	let truncateDescription = description.substr(0, 150) + '...  ';
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
								<NavLink to={{ pathname: `${BlogNameUrl}`, state: { comp: `${blogComp}` } }}>
									Learn More
            </NavLink></p>
						</div>
					</div>

				</div>
			</div >

		)
	}

})

export default class Blogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			offset: 0,
			data: [],
			perPage: 6,
			currentPage: 1,
			pageCount: null
		};
		this.handlePageClick = this
			.handlePageClick
			.bind(this);
	}
	receivedData = () => {
		this.setState({
			data: data
		});
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);

		const postData = slice.map(data => {

			const BlogName = data.comp;
			const BlogNameUrl = "/blog/" + BlogName;
			const blogComp = data.compName;
			let description = data.description;
			let truncateDescription = description.substr(0, 150) + '...  ';
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
									<NavLink to={{ pathname: `${BlogNameUrl}`, state: { comp: `${blogComp}`} }}>
										Learn More
            </NavLink></p>
							</div>
						</div>

					</div>

				</div >

			)
		})

		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			postData
		})
	}
	handlePageClick = (e) => {
		const selectedPage = e.selected;
		const offset = selectedPage * this.state.perPage;

		this.setState({
			currentPage: selectedPage,
			offset: offset
		}, () => {
			this.receivedData()
		});

	};

	componentDidMount() {
		this.receivedData()
	}
	render() {
		searchVal = this.props.filter;
		archiveYear = this.props.archive;
		return (
			<div className="main-blog">

				{!this.props.filter && !this.props.archive || this.props.filter == "" ?
					<>
						<ReactPaginate
							previousLabel={"Prev"}
							nextLabel={"Next"}
							breakLabel={"..."}
							breakClassName={"break-me"}
							pageCount={this.state.pageCount}
							marginPagesDisplayed={2}
							pageRangeDisplayed={3}
							onPageChange={this.handlePageClick}
							containerClassName={"pagination"}
							subContainerClassName={"pages pagination"}
							activeClassName={"active"} />
						{this.state.postData}
					</> : ''}
				{this.props.filter ? filterData(searchVal) : ''}
				{this.props.archive ? archiveData(archiveYear) : ''}
			</div>

		)
	}
}

