import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import firebase from 'firebase';
import { NavLink, Link } from 'react-router-dom';
import LoadScript from "react-load-script";


const Addthis = () => {
    const handleScriptLoad = () => {
        window.addthis.init();
        window.addthis.toolbox(".addthis_toolbox");
        console.log("addthis Loaded");
    };
    return (
        <div>
            <LoadScript
                url="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ea2a77e918821b6"
                onLoad={handleScriptLoad}
            />
            <div class="addthis_inline_share_toolbox"></div>

        </div>
    );
}

const SubscribeBlog = () => {
    const mailChimpLoaded = () => {
        window.dojoRequire(["mojo/signup-forms/Loader"], function (L) { L.start({ "baseUrl": "mc.us8.list-manage.com", "uuid": "55126eebce7574436da9b2b2f", "lid": "52f2193bbd", "uniqueMethods": true }) });
        console.clear();
        console.log("mailchimp loaded")
    }
    return (
        <div>
            <LoadScript url="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false" onLoad={mailChimpLoaded} />
        </div>
    )
}


class commonManUncommonInvestor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "";
        let postname = window.location.pathname.split('/')[2];
        let clapCount;

        firebase.database().ref('allBlogs').on('value', (snap) => {
            console.clear();
            // Check if child with pagename exists or else create one
            let checkChild = snap.hasChild(postname);
            if (!checkChild) {
                snap.child(postname);

            }
            // If child already exists, get the claps and update in DOM
            else {
                clapCount = snap.child(postname).val().claps;
                this.setState({
                    likes: clapCount,
                    childExist: true
                })
            }

        });
    }

    likePost() {
        let postname = window.location.pathname.split('/')[2];
        let clapCount, newClapcount;
        firebase.database().ref('allBlogs').child(postname).on('value', (snap) => {
            console.clear();
            clapCount = snap.val().claps;
            console.log(clapCount);
            this.setState({
                likes: clapCount
            })
        });

        let user = "daram"
        // Create unique key with user name
        let newPostLikes = firebase.database().ref('allBlogs').child(postname).child("claps")

        // Increment and return new value based on current value
        newPostLikes.transaction(function (likes) {
            return likes + 1;
        })
        // Add data to the newly created key

    }


    render() {
        return (
            <div className="container blogs-wrap">

                <div className="main-blog-header">
                    <div>
                        <h2 className="blog-details-title"><span>Common Men, Uncommon Investors - Anil Kumar Goel</span></h2>
                        <h6 className="blog-publish-info">By Admin | Oct 22, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
                    </div>
                    <div><Addthis /> <SubscribeBlog /> </div>
                </div>

                <p>
                    Each time, We approach someone to invest in Equities (read Mutual Funds), they are inherently worried about the loss. Questions like -
</p>

                <p>What if I don't even get back the Money I have invested? <br />
Will be I become Super-Duper Rich.?</p>

                <p>
                    One extreme to another! Alas, I wish, sometimes, we used less of our thinking ability.
</p>

                <p>
                    He wondered how should we answer these question. That's when the Indian-ess in us came to our rescue. If we notice, in our country, most of the times, we do something because our Neighbour does it, Or our friend does or our Cousin does it or somebody did it..
</p>

                <p>
                    So we said let us bring to our reader stories of fellow Investors who made some serious wealth (Read hundreds of Crores) by investing.
                </p>
                <p className="bold"> Mr. Anil Kumar Goel - </p>
                <p>Before anything - Oh yeah! He is Chennaite :)
                  <img src="/images/AKG.jpg" alt="Anil Kumar Goel" className="img-center" />
                </p>
                <p className="bold">
                    No Idea about Stock Markets -
                </p>

                <p>
                    Anil was born and bought up in Punjab. He came to Chennai on the insistence of his Grand Father to help his Steel Business. Having come to support his Grand Father, Anil settled very well into the business. In his own words - "It was a nice feeling. I was just 16 Years old but was handling lacs of Rupees. I liked being in Business.
</p>

                <p>
                    At 13, Goel struck his first deal when he sold ―slow-moving steel angles to grape farmers from Hyderabad at a decent profit. My first test came in 1974-75 when steel prices fell from Rs 6,000 to Rs 1,200 a tonne in six months. I somehow had the sense to buy more stock at lower prices and average out. However, Goel was oblivious to the happenings in the stock market. The great silver crash of 1980, the Black Monday, Hong Kong market crash of 1987 and the Rio exchange crash of 1989 made no impact on his life.
                </p>
                <p className="bold">
                    Beginner's Luck -
                </p>

                <p>
                    The beginning of the 1990s witnessed the first wave of retail participation in the stock markets. Flashy brokers, rags-to-riches stories and unprecedented euphoria drove people to exchanges like never before. ―I had no idea about markets at that time. I was actually an accidental entrant. Our company, at the behest of an auditor, first invested in a couple of IPOs to get some tax exemption. The market was the point of discussion at every gathering, and I felt so out of place. Goel wondered how markets went up consistently. Being a steel trader, he knew asset prices could not follow an upward trend all the time. I was skeptical. <strong>It was illogical for prices to move up all the time.</strong>
                </p>

                <p>
                    <strong>His premise proved right when in the second week of May 1992 the market crashed</strong>. The index slipped from 4400 levels in March 1992 to about 2200 a few months later and finally consolidated at 1800 in April 1993.
</p>

                <p className="bold">
                    "I was quite pleased with my analysis and decided to try investing in the stock market"
</p>

                <p className="bold">
                    Oops! Beginner's Luck, Seriously?
</p>

                <p>
                    In September 1992, when the index was around 2200, Goel decided to test the market with Rs 50 lakh. By March 1993, the index fell to 1950 and the value of his investments dropped to Rs 33 lakh. My family was not happy about it. They asked me to square off and exit. But I was adamant to succeed and recover my losses.
</p>
                <p className="bold">
                    The Tide Turns
</p>


                <p>
                    The consensus view Goel got from learned Mumbai brokers was to stay light and lie low. He saw no logic in that. The prices had fallen so much. He invested Rs 5 crore in May 1993, when the index was trading at 1850 levels. A rally started in mid-1993 with the entry of foreign institutional investors (FII). By July 1993, FIIs actually started investing in Indian companies. <strong>By January 1994, my Rs 5 crore had become Rs 20 crore.</strong>
                </p>

                <p className="bold">
                    Going Down-Under
</p>


                <p>
                    But there was a twist. The entry of FIIs changed the markets considerably. Several Indian companies issued depository receipts (DR) at high valuations to overseas investors. This resulted in a cash glut‘. Since they didn‘t have a specific CapEx plan, these companies made bad treasury investments. Once the FIIs understood this ploy, they dumped these companies. Goel started buying stocks which were getting pounded by foreign investors. He bought Arvind Mills, which issued GDRs at Rs 360, but corrected to Rs 180 a few months later under selling pressure from FIIs. The price decline did not stop there. I bought Arvind Mills at Rs 180 but a few months later, it was trading at Rs 7 per share. My other investments had also fallen to about 1-5 percent of the invested value. I lost all the money I had made till then, says Goel wistfully. But the desire to succeed in the stock market was stronger than ever and Goel exited his steel business to concentrate on the market full time. <strong>He had to sell six acres of land along Chennai‘s East Coast Road to emerge from the mess.</strong>
                </p>
                <p className="bold"> No Turning Back -</p>

                <p>
                    Once Goel decided to invest full time, he latched on to some quality mid-cap stocks like EID Parry, Carborundum Universal, SAIL, Tata Steel and Tube Investments. The period between 2001 and 2007 offered an excellent window for investors like Anil to make money from the markets.
</p>

                <p className="bold">
                    Today Anil's Portfolio is well over <a href="https://trendlyne.com/portfolio/superstar-shareholders/custom/?query=anil%20kumar%20goel" target="_blank">800 Crores</a>.
</p>


                <p>Next time If somebody tells you they lost Money in markets, Ask them how much?
We are sure it won't be more than a few lacs.</p>

                <p>
                    Tell yourself, those that traveled the path made so much more than these small losers.
</p>

                <p>
                    Just to tell you, If you stay the path, Its easy but not that simple at the same time.
</p>





                <ul className="blogs-tags">
                    {this.props.alltag.map((tag) =>
                        <li className="blogs-tag-link"><NavLink
                            to={{
                                pathname: '/blog',
                                state: { tagName: tag }
                            }}>
                            {tag} <br />
                        </NavLink></li>
                    )}
                </ul>

                <BlogComment />
            </div >
        )
    }
}
export default commonManUncommonInvestor;