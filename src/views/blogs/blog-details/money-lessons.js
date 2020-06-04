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


class moneyLessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Money Lessons!";
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
                        <h2 className="blog-details-title"><span>Money Lessons!</span></h2>
                        <h6 className="blog-publish-info">By Admin | May 18, 2019 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis /></div>
                </div>
                <img src="/images/lessons.jpg" alt="money Lessons blog banner" className="img-center" />
                <p>
                    You need money to make money. Alternatively, you need a disruptive idea to make money for yourself and others. Not everyone would become an entrepreneur like Steve Jobs, Gates or Zuckerberg and hence let us say one needs money to make money. That is the critical resource more than anything is for those who aspire to retire and follow your passion or live a decent life post retirement. This is the reason why we say make your money work for you the moment you start earning!
                </p>

                <p>
                    A millennial approached us for investment with an expectation of 15% risk free returns. We said, there is risk associated with it and you should invest quite long time (5 to 7 years) and should be OK to adjust for a year or two in case of any uncertainty. And we asked, do you have any savings? NO. Any loans? YES. End of the conversation the millennial said, will get back. After a month the millennial called us and said I'm not ready to take risk and cannot invest now. The conversation ended there. Exactly a week later, the millennial bought an iPhone XS for a lakh who is earning less than 40k/month. This blog is for all those millennial's who are on a spending spree as if there is no tomorrow!
               </p>

                <p><strong>Prudent Savings –</strong> <br />
Living within your means, means a lot! A considerable amount of savings (let’s say minimum 30% of your earnings) should be made available for savings. However, most of the young millennials are on a spending spree as if there is no tomorrow. Interestingly they spend on things that they never wanted. They buy out just because their colleagues at work place, a friend, or a celebrity owns or endorses it. They have this undying desire towards anything and everything. Ask your parents how savings have helped them during the rainy days; they will for sure give you n number of lifetime stories (struggles). I have asked my mom, she used to save a little month on month and it has helped us a lot whenever we ran short of money (instances like medical emergencies or budget shortfall). Those small pennies have helped us a lot during the blood bath. Go start saving from today. Even 1000 bucks is worth to start with. Eventually you will understand the significance of savings. No excuses.</p>

                <p><strong>Debt Trap –</strong> <br />
I just read an article on how the millennials are chasing debt for everything. We have seen people taking personal loan for closing their Credit card outstanding, EMI for mobiles phones or electronic gadgets, wedding and so on. However, the millennials are far ahead. In the last 24 months, the millennials have taken significant personal loan to fund for their dream trip. Yes, you read it right, people are chasing banks and banks are ready to offer loans for people to travel across the globe. Millennials are fond of instant gratification. However, they fail to understand how painful it would be to repay them in years to come. By chasing debt, you would become a slave for the rest of your life. You will be forced to live a life rather choosing a life you dreamt about. Remember, debt is a modern slavery!</p>

                <p><strong>Spend for what you need –</strong> <br />
There is significant difference between need and want. Needs are essentials for everyone to live their life. On the contrary, wants are nothing but the desires. We all are completely obsessed with our desires and spend a lot of money towards it without even realizing. For instance, I know few people who constantly upgrade their mobile phones once in every 2 years or buy a smart watch or a smart speaker, which is of no use to them. After spending for all these unwanted stuff, they would take a loan for their wedding and find it difficult to get over their lifestyle post marriage and few are struggling to coupe of their life style.</p>

                <p><strong>Have a plan in place –</strong> <br />
Almost all the client whomever we have spoken with asks us one question, hey do you people mean to say we should not spend and live our life as we wish? NO, you can live your life as you wish, but not on debt. SIMPLE. The problem is most of the people misunderstand spending money from their own pocket and spending on debt, spending for necessity and luxury. Any one time spending which is over and above your 3 months’ savings is a “LUXURY SPENDING”. For instance if you save 10K each and wanted to buy an iPhone which is Rs. 60K+ or you wanted to go for a holiday trip to Europe which costs 5 lakhs. In such cases have a plan in place. Start saving from the day you have made a decision to spend.</p>

                <p>
                    Compounding is eighth wonder of the world. We are not sure whether Einstein or someone else said it. However, it is by far the eighth wonder of the world. Understand compounding and make use of it extensively.
</p>

                <p>
                    Of all those who read, only 10% of people will give, a serious thought about it and in the end it is only 2% who implement what is said. We are happy that our learnings are helping the 2% of our readers.
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
export default moneyLessons;