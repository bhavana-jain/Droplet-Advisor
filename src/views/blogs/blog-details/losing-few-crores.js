import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';

class losingFewCrores extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Starting Late and losing a few Crores</h2>
				<h6 className="blog-publish-info">By Admin | Apr 01, 2018 | Uncategorized | 0 comments</h6>
				<img src='/images/Starting-Late-and-losing-a-few-Crores-1080x675.jpg'
					alt="Starting Late and losing a few Crores" />

				<p>My first Salary was Rs 12000. This was my life’s first big income and until that point, This income had no expense against it.

				</p>
				<h4>This for two reasons,</h4>
				<ul>
					<li>One was of course I did not know if i will get a job</li>
					<li>Second is  Even if i get a job, Will i continue? or Will my Employer let me continue.</li>
				</ul>
				<p>But once i got a job and was assured that my employer is ethical enough not to throw the employees off just like that, I was mentally assured of the fact that there is going to be stability in my income. I today have no idea from where all did the additional expenses came from which did not exists hitherto.

				</p>
				<p> I drained off all my salary buying a New TV, a New Fridge, a New Oven, Some Interior for my house, a New Gadget (every few months), Jewelry for my Mom (Surprise gift), Treat my Friends bla bla and bla. I did not stop at this, because of course my salary would not afford all this, I pumped in a couple of Personal loans here and there, a car loan to add some spice </p>
				<p> I have completed 10 Years now, All the New ones i bought are old now and need replacement, except of course Friends and well… the Girl friend, i needn’t tell you, Ha Ha Ha! I have paid off my personal loans and fortunately do not have any Home loan.

				</p>
				<p>Little Old, Little wise, I hear a lot of noise about savings now. Saving for house, Saving for Kids, Saving for Health, Saving for Kids’ Education, Saving for Retirement, Saving for Kids’ marriage. Oopsie… Is there a end to the list, I see, that for most of the us the answer is – “I did not think about it”, “I have not planned for it”, “I am not thinking about it”
				</p>
				<p>But If I ask myself the same question first, what would be the answer? Because I am me, i would ask myself what if i did not save until now? Whats the loss? You might not gain anything but to not loose is itself a gain. So i said if i saved half of what my 1st salary was every month since i got a job, what would it look like?
				</p>
				<h4>This is how it would look like</h4>
				<img src={require("../../../images/blogs/1.JPG")}
					alt="Reality about Realty" className="img-center" />
				<p>As a starter, Instead of having a ZERO corpus, I will have corpus of anywhere between 11 lacs to 16 lacs
				</p>
				<p><strong>Scenario 1</strong> – 10 Years later, You have a family now and along with family comes a family of expenses too, but fortunately you already have saved yourselves some money and have decided not touch it until you retire.</p>
				<h4>This is how it would look like</h4>
				<img src={require("../../../images/blogs/2.JPG")}
					alt="Reality about Realty" className="img-center" />

				<p><strong>Scenario 2</strong> – You have a smart life partner who reads this blog and says lets continue saving and invest for 30 Years for our retirement or something but lets just save!

</p>
				<h4>This is how it would look like</h4>
				<img src={require("../../../images/blogs/3.JPG")}
					alt="Reality about Realty" className="img-center" />
				<p><strong>Scenario 3</strong> – You have a smart life partner who reads this blog and says Lets start saving from today and invest for 30 Years for our retirement or something but lets just save!
</p>
				<h4>This is how it would look like</h4>
				<img src={require("../../../images/blogs/4.JPG")}
					alt="Reality about Realty" className="img-center" />
				<p>From having no expenses to having making expenses that requires us to take loan is not healthy for the life of our Wealth. Like we said in our last blog, Its not that we cannot save but just that we dont strive to save. We would urge everyone to start saving some part of your income in one or the other asset class!
				</p>
				<ul>
					<li>Next time you get a hike, Pledge to save at least half of it!</li>
					<li>Lets get going, Lets start saving!</li>
				</ul>
				<BlogComment />
			</div>
		)
	}
}
export default losingFewCrores;