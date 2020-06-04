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

class wealthCreatorsEpi2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Wealth Creators - Episode 2";
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
                        <h2 className="blog-details-title"><span>Wealth Creators - Episode 2</span></h2>
                        <h6 className="blog-publish-info">By Admin | May 15, 2018| Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis />  </div>
                </div>
                <p>
                    Couple of weeks back, we promised to bring to our readers common publicly famous companies that have made tremendous wealth for the investors. In keeping with that promise, we will see another company this week that is so common and has made huge wealth for its investors. But.But. Before we go ahead, there is something we <strong>DON'T WANT</strong> you to understand from this blog. That is -
                </p>

                <ul><li>
                    If you had invested in shares of these companies you would have made so much money too.
</li>
                    <li>
                        That any common company that you know today will also create so much wealth in future.
</li></ul>
                <p>
                    Now that we have told you what you should not take away from this blog, let us also tell you what you should take away from this blog. That is -
                                     <ul>
                        <li>
                            <strong>Risk</strong> - The moment any body thinks about shares/share market, they perceive it to be risky but it is not so much risky. As long as you get in to markets thinking you will be rich in one or two years, it is <strike>risky</strike>. It is <strike>highly risky</strike>. It is very highly risky. Otherwise, its the best place for wealth creation
                        </li>
                        <li>
                            <strong>Price will go up</strong> - If you have some excess money and you are going to buy something thinking that the prices will go up. Prices will of course go up but dont you think you are smart, Prices go up because of Inflation and not your smartness :(. So you should invest you excess money in such assets whose price will increase more than Inflation. In the long run, <strong>Equity is the Usain Bolt that wins the sprint against inflation</strong>.
                        </li>

                    </ul>
                    <p>Now that we have painted you with the wisdom, lets get going. So what is this week's company that has made so much wealth for its investors. We will do it like this,
                    <ul><li>
                            First let us tell you how much money it has made for its investors
                    </li>
                            <li>
                                Then a little history about the company and
                    </li>
                            <li>
                                Finally, the name of the company
                    </li></ul></p>

                </p>
                <p>
                    I guess i already slipped in a clue there!
                </p>

                <p>
                    How much Wealth did it make?
</p>

                <p>
                    The price of the share in Jan 2003 was about Rs 22 and today it is 1285. See below -
                     <img src="/images/Shareprice.jpg" className="img-center" alt="" />
                </p>
                <p>
                    So what does it mean? it means that an investor's money would have grown at rate of ~28% compounded every year! how much does one lakh become in 15 years if it grows at 28% every years.. Rub your eyes and see below -
                      <img src="/images/carg.jpg" className="img-center" alt="" />

                </p>

                <p>
                    Yes, it would be worth 40 lacs now. (Homework - Check out with people near/around you as where else you would have made equal or more than this.)
</p>

                <p>
                    The Story gets more interesting if some one had invested 5K each month in this for past 15 Years. She/He would be a crorepati now.
                                     <img src="/images/cagr28.jpg" className="img-center" alt="" />
                </p>
                <p>
                    A little history about the company-
                    <ul><li>
                        It was incorporated in 1945
                    </li>
                        <li>
                            It is India's largest and Asia's fourth largest producer of Paints
                    </li>
                        <li>
                            Was available for public investing in 1975 (got listed)
                    </li>
                        <li>
                            Has employee base of 6,000
                    </li>
                        <li>
                            Earned a net income of 1,779 Crores last year.
                    </li>
                        <li>
                            Has offices/branches in all the 5 continents.
                    </li>
                        <li>
                            Its logo is called "Gattu" (although its no more used to represent the company)
                    </li></ul>

                </p>
                <p>
                    <strong>The name of the company -</strong>
                    <img src="/images/gattu.jpg" className="img-center" alt="" />
                    <div className="text-center">Remember this boy ?</div>

                </p>
                <p>Yes, the company that we are talking about is Asian Paints.
                  <img src="/images/asianPaintsLogo.jpg" className="img-center" alt="" />
                </p>
                <p>
                    Since its listing, Asian Paints has been a incredible wealth creator for all its investors. For the lack of information, we have just put the last 15 year's story which in itself is incredible!
                </p>

                <p>
                    <i>So Guys! Equity investing is NOT RISKY as long as you have long term horizon and stick on the good companies which grows year after year. Asian paints is another example to prove our point.</i>
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
export default wealthCreatorsEpi2;