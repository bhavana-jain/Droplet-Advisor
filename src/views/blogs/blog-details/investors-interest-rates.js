import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink, Link } from 'react-router-dom';
import { EmailShareButton, EmailIcon } from 'react-share';
import { css } from 'emotion';

// import icons
import { FaFacebook } from "react-icons/fa";
import { ShareButton, ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";


const ShareComponent = props => {
	// create object with props for shareBlock
	const shareBlockProps = {
		url: 'https://mywebsite.com/page-to-share/',
		button: ShareButtonRectangle,
		buttons: [
			{ network: 'Facebook', icon: FaFacebook }
		],
		text: `Give it a try - mywebsite.com `,
		longtext: `Take a look at this super website I have just found.`,
	};

	return <ShareBlockStandard {...shareBlockProps} />;
};


class investorsInterestRate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: []
		}
	}
	componentWillMount() {
		document.title = "Investors and Interest Rate"
	}
	render() {
		return (
			<div className="container blogs-wrap">

				<h2 className="blog-details-title"><span>Investors &amp; Interest Rates</span></h2>
				<h6 className="blog-publish-info">By Admin | Feb 29, 2020 | Uncategorized | 0 comments</h6>
				<ShareComponent />
				<img src="/images/Droplet_Interest_Rate.jpg" alt="Droplet Interest Rate" className="img-center" />
				<p>My Partner called me and told me that we are no different from laymen who know that Short term Interest rates are going to fall. We both know the same and hence we are the same. Yes I would say but only for the sake of that knowledge.
 </p>
				<p>
					The 1 Year FD in SBI in 2012 would have fetched a interest of 9.25% per annum but today it fetches only 6.25% and this is of course a grave matter for Fixed deposit holders. Because if they had known the interest rate would fall, they would have bought 10 Year FDs which would have paid the same 9.25 % today instead of ending up getting a measly 6.25 % today. So simple.
				</p>

				<p>
					Now it is expected that Interest rates can fall further - what do we do? Buy 10 Year FDs and lock the "assumed" higher interest today or Wait for the Interest rates to go up?
</p>

				<p>
					Speculate. Speculate. Speculate.
				</p>
				<img src="/images/Droplet_Asset Allocation.jpg" alt="Droplet asset allocation" className="img-center" />
				<p>This is where a good financial planner helps right decision rather than speculate on matters and get duped of returns. Most of the times the retails chases the Asset Classes with highest "past" returns and gets disappointed.</p>
				<ol>
					<li>
						One should have a proper asset allocation in place. Interest rates are largely function of inflation, higher the inflation, higher the interest rate. The rates themselves should not lead to decision making.
					</li>

					<li>
						In his latest Annual letter, Warren Buffet has re-affirmed the fact the Stock markets are still the No.1 option for wealth creation. But retail investors almost always loose money in stock markets due to lack of guidance.
</li>

					<li>
						In topic of FD investors, we should not be talking about Stock markets but if one chooses to invest in debt for 10 Years then he sure needs an adviser.
 </li>

					<li>
						Eventually all Investors who save, do so to build wealth but Debt ain't going to help them build wealth since it is a hedge against Inflation. Therein kicks in the need for a good adviser.
 </li>

				</ol>
				<p>So readers rather than toying with your money based on hearsay and half knowledge, seek out an good adviser. Merely Investing in FDs and speculating on Interest rates isn't going to be worth of your hard earned money. More Importantly, you might know as much as anyone else knows but knowing and doing are 2 different things. :)</p>

				<ul className="blogs-tags">
					{this.props.alltag.map((tag) =>
						<li className="blogs-tag-link"><NavLink
							to={{
								pathname: '/blog',
								state: { tagName: tag }
							}}>
							{tag} <br />
						</NavLink></li>
					)}
				</ul>

				<BlogComment />
			</div >
		)
	}
}
export default investorsInterestRate;