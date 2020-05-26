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

class beingFinanciallyFit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Being financially FIT!";
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
                        <h2 className="blog-details-title"><span>Being financially FIT!</span></h2>
                        <h6 className="blog-publish-info">By Admin | July 01, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
                    </div>
                    <div><Addthis />  </div>
                </div>
                <p>
                    Most of us give a serious thought to physical fitness only when we cross the 60% of life milestone or when we are forced to be FIT post a medical diagnosis. For instance, I have seen many people who does not care about anything and live a junk lifestyle and one fine day when the unfortunate event occurs such as diagnosis of diabetics or any other, only then their blood, veins, heart and brain starts thinking about having a better and healthy lifestyle.
                </p>

                <p>
                    The significance of physical fitness comes first as one grows older, as one cannot ignore it to lead a healthier life. So is the financial fitness. We pay attention only when there is a need, be it health or wealth.
</p>

                <p>
                    A typical Indian life cycle is all-simple. Learn, earn and retire. It all starts from the day you are born, your parents decides what you wanted to become. You get your graduation completed, have a job, get married, and then you want to buy a home as early as possible on EMI. In between, we never ever think whether we are financially fit. What we do is, just follow the process and then tie ourselves to huge debt.
</p>

                <p>
                    Life is not to just follow as it comes along. Every one of us will have aspirations about his own life. However, the moment we start our career we miss it all the way and move on with life as it comes, as we are satisfied with our monthly pay cheques and get ourselves into spending mode as if the life ends tomorrow. Aspiration is the one best way to chalk out the purpose of your life and once you have a clarity about it, then an appropriate financial plan can be in place.
</p>

                <p>
                    Ideally, one should start the financial plan the moment he starts his career. We have few questions for you; see how many “yes” you have answered to, this will help you understand how financially FIT you are –
                     <ol>
                        <li>
                            Do you have a financial plan in place?
                        </li>
                        <li>
                            Do you save 10 to 30% of your monthly take home salary?
                        </li>
                        <li>
                            Do you have 6 months’ salary as emergency fund?
                        </li>
                        <li>
                            Is the emergency fund liquid?
                        </li>
                        <li>
                            Are your loan re-payments less than 40% of your net salary?
                        </li>
                        <li>
                            Are your insurance and investment separate?
                        </li>
                        <li>
                            Do you have adequate health insurance plan?
                        </li>
                        <li>
                            Is your life insurance (Term) sufficient for dependents?
                        </li>
                        <li>
                            Is your portfolio balanced and risk assessed?
                        </li>
                        <li>
                            Are you aware of the taxation of your investments?
                     </li></ol>
                </p>
<p className="bold">
    Let us now assess where you stand –
</p>

               <p>Below is your financial fitness based on your number “YES” to above questions –
               
               <ol><li>
                   9-10: You are financially FIT
               </li>
               <li>
                   6-8: FIT but some more effort needed.
               </li>
               <li>
                   3-5: You have just began and need to work harder.
               </li>
               <li>
                   0-2: You need to start immediately.
               </li></ol></p>
                <p>The problem with most of us is, either it is health or wealth; we do not give importance at the early stage of life (when we are at our 20+). What we should ideally do is, start early, start small, continue to do what you have been doing and ensure you contribute more as you grow stronger (both your time at gym and your investments). The moment you delay by 2 or 5 years it will have a significant impact in your FITNESS – meaning compounding (we will cover it in our future blogs). </p>



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
export default beingFinanciallyFit;