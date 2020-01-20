import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: '250px' }}>
				<ReactBingmaps
					bingmapKey="AtboYP1XJWjbXDFLfVGmduvzW7Z5G5vf5YWhgOec8BLDpmiX8mXYPOUIbgEI3tVA"
					center={[12.9048, 80.0891]}
					NavigationBarMode="minified"
				>
				</ReactBingmaps>
			</div>
		);
	}
}

export default SimpleMap;