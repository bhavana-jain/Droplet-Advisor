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

class investorMistakes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "The Common Mistakes of an Investor!";
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
                        <h2 className="blog-details-title"><span>The Common Mistakes of an Investor!</span></h2>
                        <h6 className="blog-publish-info">By Admin | May 16, 2020 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis />  </div>
                </div>
                <img src="/images/investorMistake.jpg" alt="blog banner image" className="img-center" />
                <p>
                    Investing is a simple yet complicated. That's the precise reason we see a lot of people losing the game altogether. Only a handful of Investor really do it well. All others hop in, hop off and never come back again after losing big time. Blaming the markets for their own mistakes. In today's blog we will be looking at the common mistakes that people repeatedly make in investing .

                </p>
                <ol>
                    <li>
                        <strong>Choosing a Mutual Fund based on Star Rating -</strong> The first and worst mistake every investor does is Investing in a mutual fund based on star rating. The star rating of a mutual fund changes weekly, monthly or quarterly as updated by the rating agencies or websites offering the ratings. Investing based on ratings is a disaster by itself. Don't pay too much attention to the ratings when you invest. Even if you were to consider the ratings, just take it as pinch of salt.
                    </li>

                    <li>
                        <strong>Investing based on last year performance -</strong> Few of our clients do know a little about mutual funds and as an advisor when we advice them to invest in a fund, they would look at last year fund performance and question us - why did you chose a fund which had given negative returns last year. Technically every fund goes thorough periods of positive and negative returns.  Similarly a wanna be client of us, redeemed all his investments from small cap fund and invested in large cap fund last year because small funds gave negative returns for the last two years whereas large cap funds returned positive returns. Never look at last year returns and decide your investment. It should be more than that. You can read more on hopping here.
                 </li>

                    <li>
                        <strong>Investing based on colleague/friends advice</strong> - ONE of the bad thing to do is investing based on colleague's advice. Even if your friend or colleague advises you to buy something don't do it blindly. Either you do your own research if you have the ability to do so or reach out to an advisor who can help you choosing the right fund based on your risk appetite.
                    </li>

                    <li>
                        <strong>Not understanding the nature of the fund -</strong> Based on the discussion we had with several people we met in the last few years, One thing we understood is that almost everyone believe mutual fund is just equity. To them Equity, Debt, balanced, Dyanmic Asset etc., remains the same. In reality all these are completely different in nature and carries different risk.
                    </li>

                    <li>
                        <strong>Investing without risk assessment -</strong> people start investing without assessing their own risk. Before making any investment, one should know their risk appetite and invest accordingly. Equity is a volatile asset class and carries risk and so every investor should understand their risk capacity considering various factors such as age, salary, investment time horizon, returns expectations and so before making any investment decision.
                    </li>

                    <li>
                        <strong>Not having right Asset Allocation mix -</strong> Warren Buffett's most thought-out quote - "Don't put all your eggs in one basket". So while making investments one should consider having good asset allocation. Typically an Indian would have invested all of his money in three asset classes - majority of it would be in Real estate, little in Gold and the final small portion would be in debt (PF - Provident Fund) which is part of salary. We typically don't go beyond this. An individual should have a right Asset Allocation mix in his portfolio for returns, liquidation and Wealth creation.
                    </li>

                    <li>
                        <strong>Investing without any goal/plan in place -</strong> whenever we sit with a client for discussion the first thing they would say is, I will invest so n so money. When we ask why so n so money, the standard answer we get is - wanted to test with small amount and/or this is what I have thought out in my mind. They will have the capacity to invest more, but they won't do just because they would have not tied their investments towards a goal(s). Each of us will have different golas - such as wedding, education, car, house, retirement and so. All your investments should be aligned to your goals. If not, it leads to extreme dismay.
                    </li>
                </ol>
                <p>
                    In the end its your hard earned money. Do due diligence before making an investment decision. Hope this blog helps you avoid the most common mistakes and losses.
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
export default investorMistakes;