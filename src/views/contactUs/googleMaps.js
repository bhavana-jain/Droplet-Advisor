import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';


class SimpleMap extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: '250px', width: '100%' }}>
				<ReactBingmaps
					bingmapKey="AtboYP1XJWjbXDFLfVGmduvzW7Z5G5vf5YWhgOec8BLDpmiX8mXYPOUIbgEI3tVA"
					center={[13.1058, 80.2561]}
					zoom={15}
					navigationBarMode={"compact"}

					pushPins={
						[
							{
								"location": [13.1058, 80.2561],
								"option": { title: 'Droplet Wealth Advisory', color: 'red', class:'custom' },

							}
						]
					}

				>
				</ReactBingmaps>
			</div>
		);
	}
}

export default SimpleMap;