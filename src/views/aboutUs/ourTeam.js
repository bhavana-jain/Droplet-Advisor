import React from 'react';
import './aboutUs.css';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


class OurTeam extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			profile1: false,
			profile2: false,
			profile3: false,
			profile4: false,
			allProfile: true
		}
	}
	responsive = {
		0: { items: 1 },
		1024: { items: 4 },
	}
	componentDidMount() {
		// let team = document.getElementsByClassName('team-wrap-inner');
		// Array.from(team).forEach(function (element) {
		// 	element.addEventListener('click', function () {
		// 		element.classList.add('active');
		// 	});
		// })
	}
	render() {
		return (
			<div className="container">
				<h1 className="text-center">Our Team</h1>
				<div className="team-wrap">
					<div className="team-wrap-inner">
						<div className="team" data-name="S"></div>
						<div className="member-name">Saravanan Viswalingam </div>
						<div className="member-role">Founding Partner</div>
						<i>Steve Jobs. Dogma. Stock Markets. Down the Line. Over the Period of Time.
</i>
						<p>A huge fan of Steve Jobs, Saravanan’ s otherwise sleepy life lit up when the Professor at MCC spoke to him about the RPower IPO. A Commerce Post Graduate from Loyola, Saravanan’s life has failed the dogma that Stock Markets is risky. Years of reading and investing has made him a calm head at all times.</p>
						<p>Down the line, Saravanan wishes to bring more people in to the equity markets and help them make wealth over a period of time.
</p>
					</div>
					<div className="team-wrap-inner">
						<div className="team" data-name="D"></div>
						<div className="member-name">Darama Prakash</div>
						<div className="member-role">Founding Partner</div>
						<i>Suneet Tandon. Sidney Sheldon. Mute Orator. Technicals. Cross Overs. Wealth.	</i>
						<p>Having grown up listening to Suneet Tandon’s immaculate English Doordarshan, Dharam landed right into the books of Sheldon. An otherwise mute person can orate his way to minds and hearts of people. </p>
						<p>	Being from a Middle class family, Dharam believes that stock markets provide equal opportunity for everybody regardless of the social status. A huge of Technical Analysis, Dharam wants to create Positive crossover of Wealth and Middle class.

	</p>
					</div>
					<div className="team-wrap-inner">
						<div className="team" data-name="P"></div>
						<div className="member-name">Dinesh</div>
						<div className="member-role">Partner</div>
						<i>WhatsApp. Facebook. Loquacity.</i>
						<p>A Commerce graduate from Madras University, Dinesh is always excited to talk about things he does not know. We are sure he believes that doing is learning. He does all his doing by Talking. Dinesh is always pumped up to do new things and is appreciative of people taking such endeavors.

 </p>
					</div>
					<div className="team-wrap-inner">
						<div className="team" data-name="B"></div>
						<div className="member-name">Raj</div>
						<div className="member-role">Partner</div>
						<i>Gym, Eat, Gym, Cricket, Gym, Eat – Repeat in loop.</i>
						<p>If Rajkumar were to build heaven, it will take tons of Iron and Steel. Because for him – Gym is Heaven. When God wrote the simplest coding when he programmed his Birth. He wrote 3 letters – GYM  EAT REPEAT – and looped it with Until function. His friends are yet to find answer for “until when”. A Gym enthusiast, A Cricket fanatic, Raj Kumar Cost account cum Commerce Graduate from MCC, Chennai. Known for his simplicity, affable nature and honest reviews. </p>
					</div>
				</div>
				<div className="team-profile">
					<div className={"profile1 profile-description " + (this.state.profile1 ? "fade-in" : '')}>
						<i>Gym, Eat, Gym, Cricket, Gym, Eat – Repeat in loop.

						</i>
						<p>If Rajkumar were to build heaven, it will take tons of Iron and Steel. Because for him – Gym is Heaven. When God wrote the simplest coding when he programmed his Birth. He wrote 3 letters – GYM  EAT REPEAT – and looped it with Until function. His friends are yet to find answer for “until when”. A Gym enthusiast, A Cricket fanatic, Raj Kumar Cost account cum Commerce Graduate from MCC, Chennai. Known for his simplicity, affable nature and honest reviews.

</p>
					</div>
					<div className={"profile2 profile-description " + (this.state.profile2 ? "fade-in" : '')}>
						<i>Gym, Eat, Gym, Cricket, Gym, Eat – Repeat in loop.

						</i>
						<p>If Rajkumar were to build heaven, it will take tons of Iron and Steel. Because for him – Gym is Heaven. When God wrote the simplest coding when he programmed his Birth. He wrote 3 letters – GYM  EAT REPEAT – and looped it with Until function. His friends are yet to find answer for “until when”. A Gym enthusiast, A Cricket fanatic, Raj Kumar Cost account cum Commerce Graduate from MCC, Chennai. Known for his simplicity, affable nature and honest reviews.

</p>
					</div>
					<div className={"profile3 profile-description " + (this.state.profile3 ? "fade-in" : '')}>
						<i>Gym, Eat, Gym, Cricket, Gym, Eat – Repeat in loop.

						</i>
						<p>If Rajkumar were to build heaven, it will take tons of Iron and Steel. Because for him – Gym is Heaven. When God wrote the simplest coding when he programmed his Birth. He wrote 3 letters – GYM  EAT REPEAT – and looped it with Until function. His friends are yet to find answer for “until when”. A Gym enthusiast, A Cricket fanatic, Raj Kumar Cost account cum Commerce Graduate from MCC, Chennai. Known for his simplicity, affable nature and honest reviews.

</p>
					</div>
					<div className={"profile4 profile-description " + (this.state.profile4 ? "fade-in" : '')}>
						< i > Gym, Eat, Gym, Cricket, Gym, Eat – Repeat in loop.

						</i >
						<p>If Rajkumar were to build heaven, it will take tons of Iron and Steel. Because for him – Gym is Heaven. When God wrote the simplest coding when he programmed his Birth. He wrote 3 letters – GYM  EAT REPEAT – and looped it with Until function. His friends are yet to find answer for “until when”. A Gym enthusiast, A Cricket fanatic, Raj Kumar Cost account cum Commerce Graduate from MCC, Chennai. Known for his simplicity, affable nature and honest reviews.

</p>
					</div >
				</div >
			</div >
		)
	}
}

export default OurTeam;