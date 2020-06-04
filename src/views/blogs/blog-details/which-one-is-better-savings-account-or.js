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

class savingsAccountOrLiquidFund extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Which one is better? Savings Account or Liquid Fund!";
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
                        <h2 className="blog-details-title">Which one is better? <span> Savings Account or Liquid Fund!</span></h2>
                        <h6 className="blog-publish-info">By Admin | May 20, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis />  </div>
                </div>
                <p>
                    We have always advised our readers to have emergency funds to take care of their of monthly expenses for a minimum period of 8 to 9 months and a maximum period of 3 years; to suffice their needs in case of any unforeseen events.
                </p>
                <p>
                    For most of us, the immediate thought to park the all emergency funds will be our savings accounts. We do not think of the better alternatives that can yield better returns (a 1 or 2% higher returns has an edge over while it compounds). The reason why we do not look out for alternatives is not risk but lack of awareness about alternatives or time.
</p>
                <p>
                    Now you may be wondering and moving back to the title of the post! Yeah, of course it is Liquid funds J
</p>
                <p>Liquid funds is a good find for those who wants to park their surplus cash for short or long term as it earns far better returns than Savings accounts. Let us look in detail about liquid funds. </p>
                <p className="bold">
                    What is Liquid funds and how it works –
</p>
                <p>
                    Liquid fuds are a type of debt mutual funds. These are open-ended schemes without any lock-in. These invest in instruments such as certificate of deposit, treasury bills and bonds, which matures in 91 days. Since the money is invested in debt instruments, capital is preserved and that is the primary objective of the fund. All your money is invested only in investment grade debt instruments.
                </p>
                <p>
                    Investors are free to park their funds for a few days to months to years based on their financial needs. Liquid funds are free from exit load. It has both – Dividend and Growth option. Growth – dividend is reinvested. While in Dividend, you can take back the returns in the form of Dividend payouts.
               </p>
                <p>
                    Liquid funds provide steady returns and one can withdraw part or the entire amount within 24 hours. A redemption initiated will normally a days time for the money to get credited to your bank account.
               </p>
                <p className="bold">
                    How about the returns –
                </p>
                <p>
                    Savings account offer lower rate of return as you all know and banks are steadily reducing the savings interest rates every year. Right now, the basic interest is close to 3.5% for balances less than one lakh and 6 to 7% if you maintain quarterly average balance of more than one lakh depending on the banks (basically to appease new customers).
               </p>
                <p>
                    On the other hand, Liquid funds generate 6.5 to 8% returns irrespective of the amount you have invested.
               </p>
                <p className="bold">
                    How risky it is –
</p>
                <p>
                    You may believe your savings are safe in a bank. Virtually it is safe. Moreover, government will not let down any bank close its doors overnight.
               </p>
                <p>
                    Liquid funds are not completely risk free. It is low risk low return instrument. The returns are subject to interest rate risk and credit risk. However the fund manager takes care of investing your money in superior creditworthy instruments and ensuring your money is safe.
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
export default savingsAccountOrLiquidFund;