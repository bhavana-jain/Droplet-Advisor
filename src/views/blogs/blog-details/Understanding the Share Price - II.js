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

class understandingSharePrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Understanding the Share Price - II";
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
                        <h2 className="blog-details-title"><span>Understanding the Share Price - II</span></h2>
                        <h6 className="blog-publish-info">By Admin | Aug 19, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis />  </div>
                </div>

                <p>
                    In the earlier <a href="javascript:;">blog</a>, we saw that share price of a company is the function of the Profits that the company makes and the no of equity shares it has. Lower Equity shares and higher profits would mean a very high share price (MRF, EIcher Motors) and vice versa.  As simple as it can get.
                </p>

                <p>
                    Now we will see why the share price goes up and down putting its holders on a roller coaster, a ride that not many are adept handling.
</p>

                <p>
                    As said earlier, If a company is earning 10 per share and an investor is ready to pay 10 times its earnings ( i.e.,) then the share price will work out to be 100. But World and life is not so simple and as are markets. Life, world and markets are all built on hopes. Hope that tomorrow will be better than today, hope that one's view of things will be win over other's view of same thing.
</p>

                <p>
                    Lets look at how things work in actual world by looking two different companies.
                      <img src="/images/Vakranjee.jpg" alt="" className="img-center" />
                </p>

                <p>
                    If you see the share price of this company was only Rs 44 in Dec 2013. This was 4 month before the new govt came in to effect. As soon as the new govt came was sworn in, there was a wave of hope for New India to be born. One such "New" things Indians were expecting was digitization. bingo, Vakranjee was at the Right and at the right place or so to say.
                </p>

                <p>
                    Because Vakrangee was operating franchisee network of more than 37,000 centers known as “Vakrangee Kendras” in 16 states of India. These centers undertake a mix of tasks, from voter ids, aadhaar registration, as well as white label ATMs (ATM machines used by different banks) Most of its centers act as <strong>"last-mile retail points of sale"</strong> and are located in the rural, semi-urban and urban areas that do not have access to technology and often electricity.
</p>

                <p>
                    So there you go a company specially helping all of Rural and Semi rural India to be digitized, Exactly what the Government wants. Now look at the right side of the chart, by the end of 2017, the share price was 500. This is because a lot of people thought that the company will keep on earning higher profits because they will have 100 Crore customers at any point of time, you know what i mean.
</p>

                <p>
                    Alas, Rome was not build in a day! Soon both the Citizens and Investors of the company realized this, The Ever Increasing Earnings that everyone was expecting never came!
</p>

                <p>
                    Look what happened! The Sky fell...
                      <img src="/images/Vakranjee2.jpg" alt="" className="img-center" />
                </p>

                <p>
                    From a price of 500, it has fallen back to Rs 44 today.  That is because the Company reported a Earning per Share (EPS) of 10 paisa  for FY 2018 compared to Rs 1.24 FY 2017. Makes sense?
</p>

                <p>
                    <strong>11 times fall in EPS, 11 times fall in share price</strong>. Easy-chessy.
</p>

                <p>
                    Next lets look at another company  -
</p>

                <p className="bold">
                    TANFAC -
</p>

                <p>
                    Tanfac is a Tamil Nadu based company producing Aluminium. The company is primarily owned by Birla Group &amp; TN Govt.
</p>

                <p>
                    The share price of the company was only Rs 15 in 2015 with a negative EPS. Basically a loss making company. However the company was trying to improve its operations and become profitable.
</p>

                <p>
                    lets look at the chart -
                                     <img src="/images/Tanfac.jpg" alt="" className="img-center" />
                </p>

                <p>
                    The Price indeed was Rs 13. Come 2018, the company reported a EPS of Rs 20.
</p>


                <p>
                    So  the  price  went  to sky, of-Course!
     </p>

                <p>
                    Look below  -
                       <img src="/images/Tanfac02.jpg" alt="" className="img-center" />
                </p>

                <p>
                    From Rs 13 to Rs 238, thats a whopping 18 times return, that is because? Because the EPS went up!
</p>

                <p>
                    In the long term, all that matters is the Profits that the company earns!
</p>

                <p>
                    So Dear Friends, next time somebody asks you to buy a share, Ask them - "How much EPS is the company making? And where do you see the EPS in future".
</p>

                <p>
                    I am sure 9 out of 10 of them wont come near you! Ha ha!
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
export default understandingSharePrice;