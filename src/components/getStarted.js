import React from 'react';
import ReactDOM from 'react-dom';
import CountUp from 'react-countup';
import './getStarted.css';



class GetStarted extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="get-started-bg">
				<h1> Ready to get started</h1>
				<input type="button" className="btn" value="Start Planning Now" />
				<div className="droplet-statistics">
					<div>
						<CountUp from={10} end={100} duration={25} suffix=" +" className="droplet-stats-count" />
						<div className="droplet-stats-title"> Total Financial Discussions</div>
					</div>
					<div>
						<CountUp from={10} end={87} duration={25} className="droplet-stats-count" />
						<div className="droplet-stats-title"> Mutual Fund Planning</div>
					</div>
					<div>
						<CountUp from={0} end={12} duration={25} className="droplet-stats-count" />
						<div className="droplet-stats-title"> Insurance Planning</div>
					</div>
					<div>
						<CountUp from={0} end={9} duration={15} suffix=" Million" className="droplet-stats-count" />
						<div className="droplet-stats-title"> Asset Under Management</div>
					</div>
					<div>
						<CountUp from={0} end={80} duration={25} className="droplet-stats-count" />
						<div className="droplet-stats-title"> Satisfied Customers</div>
					</div>
				</div>
			</div>
		)
	}
}
export default GetStarted;