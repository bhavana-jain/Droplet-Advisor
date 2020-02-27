import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';

class insuranceNotInvestment extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2 className="blog-details-title"><span>Insurance is not INVESTMENT!</span> Part I</h2>
				<h6 className="blog-publish-info">By Admin | Aug 18, 2019| Uncategorized | 0 comments</h6>
				<img src="/images/Insurance-is-not-investment-2.jpg" alt="Insurance is not part of investment blog banner" />
				<p>
					Most of us fail to understand the fundamental purpose of life insurance. We are made to believe that insurance is saving or worse in most cases an investment. However, the <span className="bold underline">whole idea of insurance is to cover the risk of loss</span>.
				</p>

				<p>
					In simple terms, insurance is a financial backup for the family highly dependent on their breadwinner. To make it even simpler, let me give you an example as to how insurance should be looked at - You buy a two-wheeler or car and get it insured - what happens here? Your car is insured for a specific amount and in case of any loss/damage to your vehicle; the insurer will pay you, post the inspection and <span classs
						="bold underline">only for the quantum of damage</span>. Wonder how would you feel if anybody asks you - "What is the <strong>return</strong> I will get for the <strong>premium I paid on my motor vehicle</strong>". Won't it sound ridiculous?
				</p>
				<p>
					The more we talk to people the more we understand that there is herd mentality, 10/10 people consider it as an investment/savings. All we want to do is, educate people on how to look at insurance and not to confuse it with investments.
				</p>

				<p>
					We came across a client who has "Invested" in 21 Insurance policies for his financial goals. We asked? He said at appropriate times, I will get this amount "Guaranteed". For his sake and for the sake of our readers - Let's now understand What's Guaranteed?
				</p>

				<p>
					For this exercise, we will present 2 scenarios to our readers -
				</p>

				<p> &lt; &lt; &lt; &lt; &lt; &lt; INSURANCE IS TAKEN TO COVER RISK. ANY ASSESSMENT OF INSURANCE WITHOUT CONSIDERING RISK IS LIKE ASSESSING SACHIN TENDULKAR WITHOUT HIS BATTING RECORD &gt; &gt; &gt; &gt; &gt; &gt; </p>

				<img src="/images/Droplet-LIC 02.jpg" className="img-centre" alt="LIC Vs Term insurance" />
				<p className="text-tiny"><sup>*</sup>Premium of 36,000/monthly is for a 30-year-old male who wishes to take Jeevan Anand policy cover for 1 crore. </p>

				<p>
					So in scenario 1, you will have paid almost 13 lacs to your life insurer and in scenario 2, you will have cash savings of 12 lacs 49 thousand (assume you run an RD/FD).
				</p>

				<p>
					Now, let us <strong>take the fish out of the water</strong> and see how <strong>"INSURED"</strong> it is.
				</p>

				<h4>LIFE RISK I</h4>

				<p>
					Let's say during the 4th year an unforeseen event happens where you are not only unable to pay the premium but also need some money to run your life
				</p>

				<p>
					Example, some shitty thing puts you out of work but you still need to pay the bills.
				</p>

				<p>
					So you go to your insurer and ask for your money back. Below is what you get back -
				</p>

				<img src="/images/Droplet-LIC- 01.jpg" className="img-centre" alt="Life Vs Term Insurance" />

				<p>
					Shocked! I was too! We were too! Almost like its a White Lie. Don't believe us? if you have a life insurance policy which is more than 3 years old, call up your insurer and ask them "what's the surrender value?". Debate rests.
				</p>

				<h4>
					LIFE RISK II -
				</h4>

				<p>
					Let's assume this gentleman expires. He gets paid 1 Crore which is 8 times the money he paid to the insurer (12 lacs * 8 ~ 1 Cr). Not bad!
				</p>

				<p>
					But But... compare it with scenario 2. One pays only 32,400 (900*36) but his family still gets 1 crore on top of 15 lacs that lies in the Bank account ;). That is 309 times return. <span className="text-tiny">(Don't be small and tell us how are we talking about returns in times of death. Such sentiments don't help us financially, let's keep it aside)</span>
				</p>

				<p>
					We will leave things &#64; it this week and let you all ponder -
				</p>

				<ol>
					<li>
						If the gentlemen who invested in 21 Life Insurance policy is correct in thinking about a "Guarantee"
						<p className="text-center">or</p>
					</li>
					<li>
						If there is a better way of doing things?
 </li>

				</ol>


				<BlogComment />
			</div>
		)
	}
}
export default insuranceNotInvestment;