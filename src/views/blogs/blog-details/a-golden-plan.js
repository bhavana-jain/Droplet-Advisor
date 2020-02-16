import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';

class goldenPlan extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>A GOLDen Plan!</h2>
				<h6 className="blog-publish-info">By Admin | Mar 04, 2018| Uncategorized | 0 comments</h6>
				<img src="/images/A-GOLDen-Plan-1080x675.jpg" alt="A golden plan blog banner" />

				<p>For those of you reading our blogs, you would realise that we have written about most of the forms of investments available for common man except one.</p>

				<p>For those of you not reading our blogs, but buying this thing for their Daughters/Wives/Mothers, it is a must read.</p>

				<p>Hmm Wonder what I am talking about, It should be easy guess when i told you daughters /Wives/ Mothers :P.</p>

				<p>Common guys! Its GOLD that we haven’t spoken about but going to speak about!.</p>

				<p>The idea to write about Gold came about in last few weeks when we were doing financial planning for one of our clients. This gentleman was “Investing” as much as 20% of his savings in to gold.</p>

				<h4>Below conversation followed-</h4>

				<ul className="ul-reset">
					<li><strong>Droplet –</strong> “Why are you buying gold for so much money? Do you wear them and roam around?”.</li>
					<li><strong>Client - </strong>“No, No Way! I don’t wear Gold”</li>
					<li><strong>Droplet- </strong>"Sorry, I meant to ask if the women in your household wear so much?”</li>
					<li><strong>Client – </strong>“No they Don’t?”</li>
					<li><strong>Droplet – </strong>Almost loosing patience – “Sir! Why are you buying so much gold every month then?</li>
					<li><strong>Client –</strong> “Oh, you meant to ask this, I’m buying it for my Daughter’s marriage.”</li>
					<li><strong>Droplet –</strong> “How old is she?, how much gold are you gonna gift her?
					</li>
					<li><strong>Client – </strong>“She is 5 Years old and I’m planning for 200 Grams”</li>
					<li><strong>Droplet –</strong> That bloody brain starts doing the maths, “You are buying gold now which you are going to use 20 Years later?”</li>
					<li><strong>Client –</strong> “Yes, Price rise Et’all he said.</li>
					<li><strong>Droplet  – </strong>“Hmm… Still doing the math”</li>
				</ul>
				<h4>Math below - </h4>
				<img src="/images/compare.JPG" className="img-center" alt="Comparison on Gold" />
				<p>* Assuming he <i>invests</i> 10,000 in Gold every month.</p>

				<p>A wise man once said – A penny saved is a penny earned. Here, I am sitting across a man who is going to loose 24 lacs versus lowest estimate of Equity returns.</p>

				<h4>More Importantly, mind that, in this calculation we have not taken other burdens of Gold like –</h4>
				<ul>
					<li>Initial Wastage charges and ancillary taxes paid. (5% Wastage + 3% GST)</li>
					<li>The depreciation that is charged on its re-sale. </li>
					<li>The threat of it being stolen or mis-appropriated</li>
				</ul>

				<p>Moving ahead, more importantly lets look how has Gold performed vis-a-vis the companies that are in to selling Gold or providing loans against them.</p>

				<p>Initially we thought of coming up with a write-up which is close to our heart anytime. But fortunately we did learn a lot and got to know a few interesting things about Provident Funds (popularly known as PFs) So we decided to postpone the actual blog and wrote this one, as this will help readers to correlate with the next one! So, this week let us look at what Provident Funds are all about!</p>

				<h4>Titan – Seller of Gold (Tanisq Brand)</h4>
				<img src="/images/goldVsTittan.png" className="img-center" alt="Gold Vs Titan" />

				<p>An Investment of 10,000 in Gold 20 Years back would be 70,000 today and the same Investment in Gold Seller (Titan Tanisq) would be 16.72 lacs.</p>

				<p>Like wise an Investment of 10,000 in Gold 15 years back would have fetched us today 53,813 vs 60.78 lacs that a Investment in Muthoot would have fetched.</p>

				<p>The above data points gives a clear picture as to how ignorant we are about choosing the right product for our savings/Investment.</p>

				<p>One should always think wisely while making any investment decisions the objective of the Investment. Golds/Daughters/Wife are always emotionally attached and that’s why you see every other advertisements fooling us with emotional bonding of daughter/dad and Husband/Wife.With all that, we fall prey for emotions rather than being practical.</p>

				<p>So, we being practical, as always, advice our client to cut down his investment in gold. Rather than allocating 20% to gold now, we advised to allocate only 5% and invest the rest 15% in equity instruments.</p>

				<p>Lets now see what happens if the Gentleman saves as advised by us i.e., 5,000 into Gold and 15,000 in equity instruments. Below is the corpus he will generate</p>

				<img src="/images/Image1.JPG" className="img-center" />
				<p>Here it is. He will create a corpus of almost 2 Crores. Next we have to find how much more gold he has to buy since this 15,000 was diverted from his Gold Corpus. Lets now see what will be the value of monthly purchase of 15,000 Rupees worth Gold in 20 Years.</p>

				<img src="/images/Image2.JPG" className="img-center" />

				<p>So he will have to purchase Gold for 86 lacs out of above 2 crore corpus generated. Thus he will save for himself 1.1 Crore approximately. Well, <strong className="underline">the fun does not end here</strong>. That this gentleman now has 1.1 Crore with him idle, He talks to Droplet and we advise him to save it for his retirement which is 10 Years away. Happily, he agrees too…</p>

				<p>Try never to get bored of this term, “Magic of Compounding” because we are going to use it so many times over during the course of our blogs. As said earlier, the gentleman stays invested and Mr Magic of Compounding rewards this gentleman like below-</p>

				<img src="/images/Image3.JPG" className="img-center" />

				Did We not say – <strong><i>Fun Does Not End Here!!! </i></strong>

				<p><i>So If we do proper financial Planning, with the same amount of savings, We can do wonders to our Wealth as long as we give our saving  time and be patient. That we are beacon in the journey of your wealth creation is not sufficient as long as you do not decide to take the journey.</i></p>

				<p><i>So All the Best to the Gold Savers and to the wise Gentlemen out there!</i></p>

				<p><i>Talk to the right financial advisor who can offer a financial plan which you can’t refuse!</i></p>

				<BlogComment />
			</div>
		)
	}
}
export default goldenPlan;