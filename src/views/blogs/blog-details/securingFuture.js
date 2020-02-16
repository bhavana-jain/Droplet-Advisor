import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';

class securingFuture extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<img src={require("../../../images/blogs/pawn-mirror-chess-king-1024x640.jpg")}
					alt="Reality about Realty" />
				<h2>Securing your Future with Rs 5000</h2>
				<h6 className="blog-publish-info">By Admin | Apr 12, 2019 | Uncategorized | 0 comments</h6>
				<p>Earlier, we wrote a blog about investing 30K and earning an income of 50K every month. Most of them might have thought that they need such a huge amount to start investing. Nothing so! At Droplet, our wish is to be all-inclusive and that constant endeavor has resulted in this blog. </p>
				<p>I think it is relatively safe to assume that an average middle-class earner can save 5K monthly. Now next we are trying to secure this Middle-class earner's future. In the Financial world, the future is always and always 15 years after. Hence we will plan with 15 years in our mind -</p>
				<p>Droplet Team advises that a saver should split his investments into 2 parts one. One for Security and another for Savings. </p>
				<h4>Part One - Security</h4>
				<p>As long as you are alive your family will live in your shade. But, God forbid, Something happens to you? Who would the family lean on? That's why Droplet recommends that the breadwinner's 1t
					<strong>"Investments</strong> should be in <strong>"protecting his life"</strong>. So the 1st part of the 5K should go to a -
				</p>
				<h4>Term Insurance</h4>
				<ul>
					<li>Ideally one should take 20 times of one's yearly income as Term Cover. </li>
					<li>Assuming the middle-class earner has a yearly income of 3 lacs, 20 times will be 60 lacs. </li>
					<li>So he should take a cover of 60 lacs which will cost him only ~Rs 770/month (premium varies based on ones age/health - Rs. 770 is for someone who is aged below 30 years and is healthy)</li>
					<li>In case any unfortunate event happens, his family will get a lump sum tax free payment of Rs 60 Lacs. NO QUESTIONS ASKED</li>
				</ul>
				<h4>Part Two - Investment</h4>
				<ul>
					<li>Out of 5000, 770 has gone out for security, leaving us with 4230 for Investment. </li>
					<li>Droplets recommend that you simply choose to invest this in 2 multi-cap funds for 15 years </li>
					<li>Assuming a return of 12% on your investment, You will have a <strong>saved a smart 20 lacs for your self.
</strong></li>
				</ul>
				<h4>Part Three - Reap What you sow</h4>
				<ul>
					<li>Now that you have saved 20 lacs, what should you do next? </li>
					<li>Take that money out and spent. </li>
					<li>Droplet suggests that you park this in a balanced fund that enables you to withdraw 12K per month. </li>
					<li>Assuming the funds give 10% return for the next 10 Year period, your investment will be worth 30 lacs! </li>
					<li>Yeah! Now you can withdraw 18K per month... </li>
					<li>And so on it keeps going... by the time you are 75 years old you will have 50 lacs.  </li>
				</ul>
				<p>So with just an Investment 5K for 15 years, you can create a 50 lacs corpus with or without your presence. Every penny is worth it! Plan accordingly! </p>
			</div>
		)
	}
}
export default securingFuture;