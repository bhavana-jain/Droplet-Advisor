import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';

class stepToFinancial extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>1st Step to Path of Financial Independence</h2>
				<h6 className="blog-publish-info">By Admin | April 20, 2019 | Uncategorized | 0 comments</h6>
				<img src="images/Droplet_Credit Card.jpg" alt="Tax saver or investor" />
				<p><strong>SURRENDER YOUR CREDIT CARD. Period. <br /> <br /> <br /> </strong></p>
				<p>We can go about talking and talking about financial Independence, but if you have not surrendered your credit card, we would still be only talking. </p>


				<BlogComment />

			</div >
		)
	}
}
export default stepToFinancial;