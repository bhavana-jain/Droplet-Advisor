import React from 'react';
import ReactDOM from 'react-dom';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import './home.css';


class Home extends React.Component {
	responsive = {
		0: { items: 1 },
		1024: { items: 1 },
	}

	//	const handleOnDragStart = (e) => e.preventDefault()
	render() {
		return (
			<AliceCarousel mouseTrackingEnabled
				responsive={this.responsive} >

				<div className="droplet-image-trust">
					ccm,mznc,mznc,mznc,
					cz,mnc,mznccnmc,nz
					czmc.,mz.cm
					cnz,cn,
				</div>
				<div className="droplet-image-discipline">
					ccm,mznc,mznc,mznc,
					cz,mnc,mznccnmc,nz
					czmc.,mz.cm
					cnz,cn,
				</div>
				<div className="droplet-image-longitivity">
					ccm,mznc,mznc,mznc,
					cz,mnc,mznccnmc,nz
					czmc.,mz.cm
					cnz,cn,
				</div>

			</AliceCarousel>
		)
	}
}

export default Home
