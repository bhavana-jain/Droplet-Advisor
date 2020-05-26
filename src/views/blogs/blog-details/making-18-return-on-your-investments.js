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

class returnOnInvestment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Making a 18% Return on your Investments";
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
                        <h2 className="blog-details-title">Making a  <span>18% Return on your Investments</span></h2>
                        <h6 className="blog-publish-info">By Admin | July 08, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
                    </div>
                    <div><Addthis />  </div>
                </div>

                <p>
                    We are here to help your money make more money. But can money make more money all by itself? No, It can never, the world never runs on auto mode, you need somebody to run it all the time. So who is going to make your money work harder so that it makes you more money? <strong>It is, of course you!</strong>  So today we are going to teach you a very simple and very easy way to make a 18% return on your money.
                </p>

                <p>
                    But before that lets understand what a 18% return on money would do your we
                      <img src="/images/retuenOnmoney.jpg" alt="" className="img-center" />
                </p>
                <p>
                    Basically you are paying yourself 13 months salary in a 12 month year, good to have extra month salary without actually "working" for it right?
                </p>

                <p>
                    If you are wondering that next we will ask you to invest in equities, no we are not! Remember we told very simple &amp; easy? Equities are not so simple/easy, there are labors of pain you have to go through before equities make you filthy rich. Anyways moving on..
                </p>
                <p className="bold">
                    How to earn a 18% Return -
                </p>

                <p>
                    We all know then that in next 3 years there is always a BIG EXPENSE that's coming up, most of the times we just dont predict it right but the expense comes anyways alright. For a bachelor, it might be his marriage, for a newly married couple, it might be a expected Baby, for 1st time parents, it might the kid's school capitation fee and by the time this circle is over, our house might need some new things, may be a new fridge, a new TV, a new coat of paint or may a be a car! This cycle on...
                            </p>

                <p>
                    Out of some random survey we found out that generally the 1st personal loan a  person takes is for 3 lacs. Such loans are repaid in 3 years, the EMI working out to be appr. 10,000 every month. (Now you know where the 10,000 came from in the above table).
                           </p>

                <p>
                    We advice that instead of taking a loan @ 11% interest(current PL rates), simply start assuming that you already have a loan, shove the EMI amount into a liquid fund. The liquid funds have generally given a return of 6-7%. This way you will 1st make a return of 7% on your investment which is risk free and also saves you interest of 11% that you will pay on your Personal loan thus earning you a 18% return (7+11).
                         </p>

                <p>By planning things this way -

<ol><li>
                        You make higher return without taking any risks, just a little discipline.
</li>
                        <li>
                            You save yourselves from Debt.
                     </li>
                        <li>

                            The problem with debt is it has dominoes effect, one leads to another putting you into a debt trap.</li>


                        <li>
                            Having no debt, helps you be the Boss of Your Money!
 </li></ol></p>

                <p>
                    Once you realize the power of being the 'Boss of your Money", the same dominoes effect  kicks in and will eventually result in you achieving financial independence soon!
</p>
                <p>
                    This Financial independence is what we want to help you achieve.
</p>

                <p>
                    Get going, shove that little savings for the <strong>Year 2021. To know more about liquid fund, read </strong> <a href="javascript:;">here</a>.
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
export default returnOnInvestment;