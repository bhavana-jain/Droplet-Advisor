import React from 'react';
import './aboutUs.css';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


class Testimonials extends React.Component {
	constructor(props) {
		super(props);


	}
	responsive = {
		0: { items: 1 },
		1024: { items: 1 },
	}

	render() {
		return (
			<div className="testimonial-bg">
				<div className="container">
					<h1 className="text-center section-title">What our Clients Say</h1>
					<AliceCarousel mouseTrackingEnabled responsive={this.responsive} buttonsDisabled={true} autoPlay={true} autoPlayInterval={5000}>
						<div>
							<div className="client-review">
								In this modern world where using Credit card has become a luxurious lifestyle,Droplet advises you the importance of saving every drop of money in an effective manner...They have helped me to understand that the extra money after you save should only be used for spending and not the other way round... Droplet has infused confidence that my future is secured with multiple investment schemes.Thank you Droplet.   "It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for." - Robert Kiyosaki</div>
							<div className="client-name">
								Swapna <br />
							</div>
						</div>
						<div>
							<div className="client-review"><p>
								One of my best 30 minutes conversation which made me realise the importance of planning for post retirement and certainly the power of compounding ....
							</p>
								<p>
									An eye opener for every credit card spending freak and folks with zero saving mindset
							</p>
Thanks buddy! For the ice break.  - </div>
							<div className="client-name">
								Nadeem <br /> Ford
							</div>
						</div>
						<div>
							<div className="client-review">
								<p>
									If you don’t find a way to make money while you sleep, you will work until you die.” - Warren Buffet.
								</p>

								<p>
									We were keenly looking for options to start our investment. Though we studied the market for a while, we didn't have a sound understanding and were hesitant to start. Then we came across the Droplet team through one of the kiosks they had set up in our apartment. They were knowledgeable and patiently answered and made us understand the need to take certain steps financially. Unlike others we met in the past, they did not sell any financial products to us, rather they guided us to invest in select portfolios and provided a solution for us. We're happy with their approach towards systematic investment and their back up plans that help us tackle the emergencies that may happen in the future.  -
</p>
							</div>							<div className="client-name">
								Thulasiraman,  <br /> Eicher Motors
							</div>
						</div>
						<div>
							<div className="client-review">
								<p>
									The DROPLET folks are the ones that inculcated the saving habit in me.  My investment portfolio was decided after a lengthy ‘one on one’ conversation, which shows the amount of care and meticulousness they put in stitching a custom made package for their customers. They continue to have these conversations on a frequent basis to see if there are any alterations required to optimise the returns.  With Insurance and a variety of other products also being offered, they have now become my “one stop shop” for all my financial needs.
								</p></div>
							<div className="client-name">
								Rajesh A <br /> Randstad Sourceright.
							</div>
						</div>
						<div>
							<div className="client-review">
								<p>
									It's almost 2.5yrs of engagement with DROPLETS and my experience with the team has always been good. Highly recommended for new people looking to invest in Mutual Funds! Droplet guys provide great fund recommendations with expert fund analysis and honest investment advice. They are transparent to their clients and clearly explain the allocation strategy based on the need of the clients. Most importantly they hear the risk appetite of the client and provide investment advice. Kudos to the team for writing blogs and they have a great responsibility over the people inculcating savings mindset as they keep posting with powerful content in social media. Worth time to spend reading the content. I highly recommended Droplets to the larger group
								</p></div>
							<div className="client-name">
								Mahesh Rajan <br /> Ford
							</div>
						</div>
					</AliceCarousel>

				</div>
			</div>
		)
	}
}

export default Testimonials;