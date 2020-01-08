import React from 'react';
import ReactDOM from 'react-dom';
import GetStarted from '../../components/getStarted';
import LazyLoad from 'react-lazyload';

class mutualFunds extends React.Component {
	constructor(props) {
		super(props);
		this.getstarted = React.createRef();
	}
	componentWillMount() {
		document.title = "Mutual Fund | Droplet Wealth Advisor"
	}

	render() {
		return (
			<div className='container'>
				<div className="services-blocks border-none text-center">
					<h2>Mutual Funds</h2>
					<h3>Expert Guidance</h3>
					<p>We do not sell Mutual Funds. We merely recommend them.</p>
					<p>A mutual fund is a financial intermediary, set up with the goal of professionally managing money pooled from a large number of investors. By pooling money together in a mutual fund, investors can enjoy economies of scale. Instead of each investor trying to undertake his or her own investment research, a team of professionals can do so for them together. Mutual Fund’s are managed by mutual fund companies, also known as Asset Management Companies (AMCs). Each AMC operates a number of funds suited to different types of investment needs.
					</p>
					<p>For the individual investor who doesn’t have much time to study and research investments himself, mutual funds are one of the best options for reaping the benefits of different types of investments with minimum effort and at a low entry point. In most funds, it is possible to start investing with as little as a thousand rupees or even less. In addition, unlike many other investments, mutual fund investments are highly ‘liquid’. ‘Liquid’ means an investment can generally be withdrawn without any delay. There are many more advantages to making your investments through mutual funds.</p>
				</div>
				<div className="mf-icons">
					<div>
						<img src={require("../../images/Mutual-Fund-Diversification.png")} alt="Diversification" />
						<h3>Easy Diversification</h3>
					</div>
					<div>
						<img src={require("../../images/Mutual-Fund-Choice.png")} alt="Choice" />
						<h3>Choice</h3>
					</div>
					<div>
						<img src={require("../../images/Mutual-Fund-Convenience.png")} alt="Convenience" />
						<h3>Convenience</h3>
					</div>
					<div>
						<img src={require("../../images/Mutual-Fund-Transparent.png")} alt="Tranparency" />
						<h3>Transparent &amp; Well Regulated</h3>
					</div>

					<div>
						<img src={require("../../images/Mutual-Fund-Inaccessible.png")} alt="Choice" />
						<h3>Providing Access to Inaccessible Assets</h3>
					</div>
				</div>
				<div ref={this.getstarted}>
					<LazyLoad debounce={true} unmountIfInvisible={true}>
						<GetStarted />
					</LazyLoad>
				</div>
			</div>
		)
	}
}

export default mutualFunds;