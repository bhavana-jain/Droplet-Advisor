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


class doMfEarnMoney extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Do Mutual Funds Make Money? Find Out!";
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
                        <h2 className="blog-details-title"><span>Do Mutual Funds Make Money?</span> Find Out! </h2>
                        <h6 className="blog-publish-info">By Admin | Nov 16, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
                    </div>
                    <div><Addthis /></div>
                </div>

                <p>
                    So this is one question everybody will have on their mind?
</p>

                <p>
                    Do Mutual Funds actually make money? After all, they are related to stock markets. So they are ideally risky and so much risky that people lose 100% of the money, Right?
</p>

                <p>
                    Warren Buffet Says - "Risk comes from not knowing what you're doing"
</p>

                <p>
                    Next time somebody says stock markets are risky tell them what Buffet says. More importantly, share with them this blog. That is, of course, after once you have read it yourself.
</p>

                <p>
                    Alright, Equities or their proxy, that is Mutual Funds are risky but one can negate the risk by staying longer in the game. Please go to google and search the return any equity mutual funds for more than any 8 year period, you will yourself know. Repeat the exercise for any 3 year period, You will yourself know.
</p>

                <p>
                    We have been researching about Mutual funds for almost 18 months now and we thought it will be useful for our readers if we can write about 2 of the Oldest mutual funds and let the readers themselves decide - "Do Mutual Funds ACTUALLY make money? "
                                      <img src="/images/mf01.jpg" alt="" className="img-center" />
                </p>
                <p>
                    As one can see, Rs 10 invested in '93 would be worth Rs 897, that is 89 times in 25 Years meaning your money grew almost 4 times each year! Is it not amazing?
                </p>

                <p>
                    The Price Chart of this fund -
                                       <img src="/images/mf02.jpg" alt="" className="img-center" />
                </p>
                <p>
                    Please <a href="https://www.franklintempletonindia.com/investor/fund-details/fund-historicalnavs/franklin-india-prima-fund-4615" target="_blank"> Click Here</a> for the historical Price data of this fund so that you can believe. </p>

                <p>
                    Remind yourself - Risk comes from not knowing what you are doing!
                                       <img src="/images/mf03.jpg" alt="" className="img-center" />
                </p>
                <p>
                    As one can see, Rs 2 invested in '94 would be worth Rs 178, Again that is 89 times in 25 Years meaning your money grew almost 4 times each year! Is it not amazing?
</p>

                <p className="text-center">
                    WOW ! ! ! Indeed Mutual funds seem to be making money after all.
                    
                </p>

<p>The Price Chart of this fund -
<img src="/images/mf04.jpg" alt="" className="img-center" /></p>

<p>
    As we write this blog, we know a lot of people who already own real estate, Gold &amp; Fixed deposit instruments but they don't own any Equity related instruments. Still, they want to invest more in Real estate or gold. Ignorance is a sin, so much true in financial planning.
</p>

<p>
                    The prime reason for this is the perceived risk. Let us tell you that if you can hold on to your equity investment as like you hold others above. Below is what happens -
                                     <img src="/images/mf05.jpg" alt="" className="img-center" />
                </p>
                <p>
                    For those of you who don't understand charts, below table shows the value of Rs 100 invested in Various assets in 1994.
                       <img src="/images/mf06.jpg" alt="" className="img-center" />
                </p>
<p>
    While your Gold &amp; Real estate have grown 7.6 &amp; 8.6 times, Look at what Equity funds have done.
</p>

<p>
    Next time you add real estate/gold for your retirement or kids, know to choose better. Well, what did Buffet Say?  "Risk comes from not knowing what you do"
</p>

<p>
    Seems he is talking about a different risk altogether! Wake up folks :)
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
export default doMfEarnMoney;