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

class goldMediaInvestors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Gold, Media & Investors";
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
                        <h2 className="blog-details-title"><span>Gold, Media &amp; Investors</span></h2>
                        <h6 className="blog-publish-info">By Admin | May 28, 2020 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis />  </div>
                </div>
                <img src="/images/goldMedia.jpg" alt="" className="img-center" />
Ever since the Gold started soaring my twitter timeline is filled with Social media "experts" calling out Gold as winner against Amar, Akbar &amp; Anthony, i.e., Stocks, debts &amp; Real Estate. Okay, so I now switched on to News Channel and they too were running headlines like - "Gold outshines bla bla..." I was like - Ye Tu, Brute? We thought that this too shall pass. But then started a galore of news pieces that called the doom for most of other asset classes. We said, enough, lets try and add some common sense to this non-sense!

                <p>
                    The 1st thing that we noticed is that the 20 Year returns of Gold is shown against the 20 Year returns of Equities. So it looks like this -
                     <img src="/images/goldVsEquity.jpg" className="img-center" alt="Gold Vs Equity" />
                </p>
                <p>
                    So Yes over 20 Years looks like Gold has given better returns than Equities. But wait this is a twisted narrative. To know why lets press the rewind button and go to 1997. In 1997, the Price of Gold was Rs 5100 and Nifty was trading @ 998. Between 1997 to 2000, The Gold had corrected (fallen)15% vs Nifty went up by 60%
                     <img src="/images/goldFallenAsset.jpg" className="img-center" alt="" />
                </p>
                <p>
                    So by taking 2000 as base year for comparison, we are ideally comparing a inflated asset (Equity up 60%) with deflated asset (Gold down 15%). This we believe is not the right comparison at all.

                </p>
                <p>
                    A more appropriate comparison would be returns from High to High as shown below.
 <img src="/images/goldComparison.jpg" className="img-center" alt="" />
                </p>
                <p>
                    We would see that Equities have outdone Gold. As simple as that. The hype around can be simply ignored as media hype since we switch on the TV to know something sensational and hence this jump in gold is sensationalized.
</p>

                <p>
                    At this point we would like to clarify that we neither suggest to investing in gold nor suggest moving away from Gold altogether. It is prudent to stick to a healthy asset allocation.
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
export default goldMediaInvestors;