import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';

class employeePublicProvidentFund extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Employees Provident Fund (EPF) &amp; Public Provident Fund (PPF)
</h2>
				<h6 className="blog-publish-info">By Admin | Dec 13, 2017 | Uncategorized | 0 comments</h6>
				<img src={require("../../../images/blogs/EPF-PPF-1080x675.jpg")}
					alt="EPF and PPF" />
				<p>Initially we thought of coming up with a write-up which is close to our heart anytime. But fortunately we did learn a lot and got to know a few interesting things about Provident Funds (popularly known as PFs) So we decided to postpone the actual blog and wrote this one, as this will help readers to correlate with the next one! So, this week let us look at what Provident Funds are all about!</p>
				<p>Provident Funds are two types Employee Provident Fund (EPF) & Public Provident Fund (PPF). Both Employee Provident Fund and Public Provident Fund are long term investment tools which helps you secure your retirement days. Before you invest in either EPF or PPF, it is important you know about these plans.</p>
				<p><strong>EPF Vs PPF:</strong></p>
				<p>EPF alias Employee Provident Fund is automatic savings option for Salaried employees where the employee and employer both contribute 12% each of the employee’s basic salary (Employers contribution of 12% is further broken – 8.33% goes to pension and 3.67% to EPF). EPF is part of your employment.</p>
				<p>Public Provident Fund alias PPF is an investment scheme by the central government, started with the objective of providing old age income security to self-employed individuals and workers from unorganized sectors. It is voluntary and any resident Indian can opt for it. Minimum investment of Rs. 500 and Maximum of 1.5 lakhs a year.</p>
				<p><strong>Returns:</strong></p>
				<ul>
					<li>PPF – Rate of return is 7.8% (rate effective since July 2017)
</li>
					<li>EPF – Rate of return is 8.65% (<i className="underline"> better than PPF</i>)
					</li>

				</ul>
				<p>The above rates are for the year 2017. Though you get fixed rate of return and your returns are guaranteed, the rate is not guaranteed since Govt of India changes it every year. For instance, during the last revision, EPF return is reduced from 8.8 to 8.65%.
				</p>
				<p><strong>Lock-In period:</strong></p>
				<ul>
					<li>EPF – The amount accumulated is paid at the time of retirement or resignation. Also one can transfer from one to another company, in case of job changes.

</li>
					<li>PPF – Your hard-earned money is voluntarily locked in for 15 years. You can withdraw 100% from 16th Year onwards…</li>

				</ul>
				<p><strong>Tax Exemption:</strong></p>
				<ul>
					<li>EPF – Eligible for deduction under section 80C. Only criteria to be eligible for is, one should have been under employment for a period of 5 years.
</li>
					<li>PPF – Eligible for deduction under section 80C. In addition, the maturity proceeds are tax-free</li>

				</ul>
				<BlogComment />

			</div >
		)
	}
}
export default employeePublicProvidentFund;