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


class costOfDelay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Cost of DELAY!";
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
                        <h2 className="blog-details-title"><span>Cost of DELAY!</span></h2>
                        <h6 className="blog-publish-info">By Admin | Nov 03, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis /></div>
                </div>
                

                <p>Since day one, we have met over and above 150+ clients who have approached us for financial planning and investments needs. Interestingly, almost 60% of people have answered at the end of our discussion as below-

                 <ol>
                        <li>“I'm interested in investing but have some other commitments so let’s do it later point in time"

                        <br /> <br />
                            <div className="text-center">or</div>
                            <br /> <br />
                        </li>

                        <li>
                            "Let me try investing little now for a couple of years and then will kick start my investments based on the returns we see in these invested years”
                 </li></ol>
                </p>
                <p>
                    It appears that people have not given a serious thought about asset allocation &amp; diversification. Even today, real estate and gold are the only asset class in one’s wealth. People never think equity as an asset class. To them, equity is just buying today selling tomorrow and becoming filthy rich overnight. If you think like that, then you have a very bad perception about equities. Equities should be tied to your goals and should always be like a piece of land that you buy and keep for years.
           </p>

                <p>
                    As most of the people, whom we have met have not given a serious thought about investing or are investing very little to see the benefits, are losing out big. We tried our best in educating the power of compounding and starting early. Yet, they find it difficult to understand, so came the idea of writing this blog. Let us look at how delaying the investment will cost you in terms of returns.
           </p>

                <p>For illustration purpose, we have chosen SBI Magnum small-cap fund with the investment started in two different periods.
                
                <ol><li>
                    Investment of ONE lakh made in the <strong>Year 2009</strong>.
                </li>
                <li>
                            Investment of ONE lakh made in the <strong>Year 2015</strong>
                            <img src="/images/SBIMAgnum.jpg" alt="" className="img-center" />
                            <img src="/images/Returns.jpg" alt="" className="img-center" />
                </li>'</ol>.</p>

<p>
    For all those who give vague reasons and delay the investments will lose out huge and miss out the compounding effect. In the above case, a sum of one lakh rupees invested in the end of 2009 had grown to Rs. 8.16 lakhs. Those who waited for 4 long years and invested in the same fund after looking at the 2014 super returns of 127.59% had lost a whopping Rs. 5.67 lakhs.
</p>

<p>
    Now let us see how compounding works in both the cases if left untouched for next 25 years. Investment started in the year 2010 would have fetched Rs. 1.38 crore whereas the investment made in 2015 would have fetched you only Rs. 42.26 lakhs.
</p>
            
            <p>
                Hope now you would have understood the cost of delaying and power of compounding. Never delay good things in life.
            </p>

<p className="text-center">
    “The best time to start is NOW”.
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
export default costOfDelay;