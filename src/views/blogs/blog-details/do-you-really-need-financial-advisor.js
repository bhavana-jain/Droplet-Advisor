import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';

class needFinancialAdvisor extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2 className="blog-details-title">Do you really need a <span>FINANCIAL ADVISOR?!</span></h2>
				<h6 className="blog-publish-info">By Admin | Dec 01, 2019| Uncategorized | 0 comments</h6>
				<img src="/images/needFinancialAdvisor.jpg" alt="Need Financial Advisor blog banner" />
				<p>
					Do I need someone to help me with something? Ideally, the answer would be yes until or otherwise you are an expert at something. Even an expert was a beginner at some point in time, experience/passion in the field would have made him an expert over time. For instance.
</p>

				<ol>
					<li>
						What would you do if you fall sick?
					</li>
					<li>
						What would you do if you want to build six pack abs?
</li>
					<li>
						What would you do if you wanted to be a world class bowler/batsman?
</li>

				</ol>
				<p>
					In the world of internet, it may seem to be an easy task to get things done without an expert at all. But is it that easy to do so? If yes, then everyone out there will be excelling in everything with ease. Internet is a source of information with different views/opinions from people around the world. But does it really provide a solution to me? Certainly NOT, <strong>it just gives opinions</strong>.
				</p>

				<p>
					Like all the above, even personal finance or investment seems to be an easy task. Yes, personal finance is not rocket science. If so, why only a handful of people succeed, and the majority fail so miserably?
</p>

				<p>
					Even the greatest scientist of all time “Sir Isaac Newton” lost £20,000 in the year 1720. He was an expert in science, math, astronomy and many more. But still he failed with money. A good advisor/coach/mentor however you name it, is always needed for you to excel in something at which you are not good at. This blog helps you to get a better understanding as to why you need an expert to manage your finance.
				</p>
				<p> <span className="bold underline">Educate  </span> - Most of us even today consider insurance as an investment and or for tax benefits without understanding the intent of it. An advisor doesn’t just make you to invest your money in some random asset. A good advisor educates you about the different investment avenues available. To provide a feasible &amp; most appropriate solution towards your finances. Gives you a holistic thought process about insurance, inflation, risk, compounding, equities, asset classes, taxation and so on.</p>

				<p><span className="bold underline">Risk Assessment </span> -
					Not all fingers are of same nature/size. Similarly, everyone would carry different risk-taking ability. An advisor’s primary responsibility is to assess the risk appetite of the prospective clients and help them in providing a solution which is appropriate to them based on the risk-taking ability. For instance – someone who is aged 60+ retired and living on his pension/retirement settlement should never invest all his money in equity. Risk should not be taken for granted.</p>

				<p><span className="bold underline">Avoiding Costly Mistakes </span> -
					One thing which to which people get attracted to is – “getting rich quick” without any struggle and hard work. Is becoming wealthy that easy? Not really. In the delusion of getting rich, people tend to make costly mistakes by throwing their money in schemes that promise 100 or 200% returns per year. Ideally, it is very hard to make 15% returns a year. An advisor is someone who handholds and ensures that you don’t make such financial mistakes and lose your hard-earned money, provided if you are true to yourself and your advisor.</p>

				<p><span className="bold underline">Structural Approach</span> -
					Personal finance doesn’t start and stop with investing. It is more to do with managing your money. Choosing the right investment options, having the risks covered, planning every goal and so on. It is more structural than one thinks. So, an advisor would start with his client’s cash flow and help re-organize or re-structure all their existing financial decisions, if the same isn’t beneficial for the client. Literally he/she provides an optimal solution for client’s betterment.</p>


				<p>Lastly, we often think that having an advisor would solve all our problems. Ideally it doesn’t if there is no good relationship. Client and advisor should develop mutual trust and have a sense of belief. Because a good advisor would always provide solutions which will enhance the clients financial position in the long run. And a responsible client should reach out to his advisor in case of any doubts, rather than approaching a friend or family. And most importantly, client should adhere to the action plans provided by the advisor. If client or the advisor doesn’t have trust with each other, then there is no point in working with an advisor at all.
							   </p>


				<BlogComment />

			</div >
		)
	}
}
export default needFinancialAdvisor;