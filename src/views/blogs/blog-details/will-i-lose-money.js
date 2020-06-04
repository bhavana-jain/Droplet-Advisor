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


class willILoseMoney extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Will I lose Money?";
        let postname = window.location.pathname.split('/')[2];
        let clapCount;

        firebase.database().ref('allBlogs').on('value', (snap) => {
            console.clear();
            // Check if child with pagename exists or else create one
            let checkChild = snap.hasChild(postname);
            if (!checkChild) {
                snap.child(postname);

            }
            // If child already exists, get theLikes and update in DOM
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
                        <h2 className="blog-details-title"><span></span></h2>
                        <h6 className="blog-publish-info">By Admin | May 28, 2019 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis /></div>
                </div>
                <img src="/images/dropletBudget.jpg" alt="Will I lose money blog banner" className="img-center" />
                <p>
                    There are a set of genuine standard questions shot at us from people whoever we have met so far -
                                     <ol>
                        <li>
                            Will my capital be safe?
                        </li>
                        <li>
                            Will I seriously make money?
                        </li>
                        <li>
                            How do you say I will make money if I stay invested for a long period?
                        </li>
                        <li>
                            My money in a fixed deposit or LIC is always safe or at least my capital is protected.
                        </li>
                        <li>
                            Mutual funds are risky. So... <strong><i>WILL I LOSE ALL MY MONEY?</i></strong>
                        </li>

                    </ol>
                </p>
                <p>This clearly indicates how fearful people are towards equity-related products. We are so tired of answering them with all the possible answers to ensure that they understand it better. Yet, the fear has not moved away. So we thought of writing a blog with an object of making everyone know what will happen to his or her money and whether MF is risky or not!
                <ul className="ul-reset">
                        <li>
                            <strong>Point 1</strong>- Never put your money anywhere for a period of 20 to 25 years with the intention of protecting your capital alone.
                        </li>
                        <li>
                            <strong>Point 2</strong> - By doing so, you are forcing your money to lose its value.
                        </li>
                        <li>
                            <strong>Point 3</strong> - You have invested 1 lakh and after 25 years you get the exact 1 lakh, which means you have lost the value of money.
                        </li>
                    </ul>
                </p>
                <p>
                    <i>"Below para will help you understand how Rs. 1 lakh loses its value over time if it is kept as such”.</i>
                </p>

                <p>
                    Let us look at how much it costs to pursue MBA at IIFor the academic year 2004, the cost of an MBA degree at IIM was Rs. 1.5 lakhs and <strong> for the academic year 2019, it costs Rs. 27 lakhs. The fee went up 18 times in the last 15 years. Any idea what is the rate of inflation here? It’s a whopping 21.5%. 21.5%.</strong> So, next time never think of preserving capital alone if you are investing for 15+ years. Your money should yield better returns to ensure your purchasing power is intact. As a thumb rule, understand inflation and know how it deteriorates the value of money over a period.
</p>

                <p>
                    OK, now we will get back to answering the other questions. To clear all your doubts with facts, we have chosen a fund, which is in existence for over 20 years.
</p>

                <strong>Let us assume Mr. Droplet started to invest Rs. 3000 per month in Reliance growth fund from January 1996 and is continuing the same till today.</strong>

                <p>
                    Before we take you to today. Let's look at the "Market Crashes" in the last 23 Years.
                      <img src="/images/Droplet_Market Crashes.jpg" alt="Market Crashes" className="img-center" />
                </p>

                <p>As you can see at different points, markets have fallen from 12% to as much as 60%. Next, we will see how the Investment made by Mr. Droplet fared during these falls.
                  <img src="/images/Droplet_Market_Crashes02.jpg" alt="Market Crashes" className="img-center" />

                </p>
                <p>
                    Droplet's answer to the Questions -
                     <ol>
                        <li><strong>Will my capital be safe?</strong> <br />
                            <strong>Yes, your capital will remain safe</strong> provided you give more time for your money to generate returns. From the above, you could see that the invested value is always lower than the market value despite the market falling close to 50%. Stay Invested for a quite long time to averse risk.</li>

                        <li><strong>Will I seriously make money?</strong> <br />
                            <strong>Yes</strong>, Period. If you still doubt you can google about Reliance Growth fund and verify the facts by yourself.</li>

                        <li><strong>How do you say I will make money if I stay invested for a long period?</strong> <br />
                        Equity is longevity. One should stay invested for a minimum of 10 years to reap benefits full time. Look at the above fund to understand how the returns are on a meager monthly investment of Rs.3000 for a period of close of 20 years. Invested - Rs. 7.14 lakhs, Returns - Rs. 84 lakhs.</li>

                        <li><strong>Mutual funds are risky right... SO WILL I LOSE ALL MY MONEY?</strong> <br />
                        It is not risky at all if you see it as a long-term investment product. The problem with most of us is, we keep our money in a fixed deposit or LIC for years together. But we do the reverse with equity/mutual funds. Ideally, we should keep our equity investments for decades. By this, you will compound your money substantially and won't lose any money at all.</li>

                    </ol>

                </p>
                <p>P.S. - The fund chosen is not a recommendation. Please, consult a financial advisor before taking any investment decision. </p>
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
export default willILoseMoney;