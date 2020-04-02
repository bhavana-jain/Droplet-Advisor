import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';

class guaranteedIncome extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Earn a Guaranteed Income of 50k/Month for ever!!!</h2>
				<h6 className="blog-publish-info">By Admin | March 09, 2019 | Uncategorized | 0 comments</h6>
				<p>	Karma is a boomerang, we are sure we have to repay for the lie that the title of this blog is. But don't they also say - "Dharamam Thalai kaakkam" Lets hope when Karma boomerangs, our Duty will save our heads. Now that we have told the title of the blog is a lie, Let's now try and make it true, Why let Karma boomerang in the first place?</p>

				<p>  If you have followed us, you would realize that we are obsessed with just 2 things - "Savings" &amp; "Compounding". We will make it rhetoric until we are sure each of our readers has understood it clearly. That's "Dharma" performed. Alright then!</p>

				<ol>
					<li>
						<strong>Savings -</strong>A quick check of candidates aged 40+ tell us that most of "family" income is 100K. What we suggest is, that such people save 30% of their income. That is 30K every month. This is for one tenure of 8 years. Once the 8 year is over, hold on to the investment for another 7 Years.
					</li>

					<li>
						<strong>Compounding</strong> - Just as compounding is important, the rate @ which compounding takes place is important. That's why we insist that you choose an instrument that gives the best compounding rate for longer periods of time. So let's say your chosen instrument gives a return of 12.5% p.a. Now let's see how much your investment would have grown into in 8 years' time.

					<img src={require("/images/Idea1.jpg")}
						/>

						<p>So it grows to become 48 lacs. Alright, now hold it for another 7 years without making any additional investment
						</p>
						<img src={require("/images/Idea2.jpg")} />
						<p>So in just 15 years, with an investment of Just 30k for 8 years, You have BECOME A CROREPATI. </p>
						<p>
							Lets now return to the title of the blog -
						</p>

						<p>
							Now that you have a corpus of a crore, next we suggest you invest this amount in an balanced/debt fund that pays you 10% return P. A. So for the next 10 years, you draw an income of 50K every month from this annuity, Guess how much of the 1 Crore you would have withdrawn? 60 lacs, that's 60% of your corpus.
</p>
						<p>
							How much will be left after 10 Years? Guess Guess Guess!</p>
						<img src={require("/images/Idea3.jpg")} />
					</li>
				</ol>
				<p>
					Hmm! Yea... you will have 1.6 Crores even after all the withdrawal. That's the power of Compounding.
</p>
				<p>
					With this, Droplet will let you decide if you wanna to work on your discipline for 8 years and be patient for 7 years so that you can live a financially independent life forever or ????</p>
				<p>Go Figure out!</p>
				<BlogComment />

			</div >
		)
	}
}
export default guaranteedIncome;