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


class wealthCreators extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Wealth Creator - Episode 5";
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
                        <h2 className="blog-details-title"><span>Wealth Creator </span> - Episode 5</h2>
                        <h6 className="blog-publish-info">By Admin | May 04, 2019 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
                    </div>
                    <div><Addthis /></div>
                </div>
                <img src="/images/Droplet_TTK Book.jpg" alt="Wealth Creators blog banner" className="img-center" />
                <p>
                    We have seen 4 of them, A IT Company, A Paint Company, A Electronics company, A Bank.What is next? Droplets said let's get into your kitchens. Kitchen? Is wealth there too? Wealth says I'm there too as long as you want to create me. How magnanimous? Recently, there was a book published about how this company became a 6,500 Crore company. Imagine our selves just holding .1% of this company. How much is that going to be? Well, that will be a cool sum of 6.5 Crores. That is the <strong>power of equities and Power of Compounding</strong>.
                </p>
                <p>
                    What company is that? As usual, there is a clue in there.
                </p>

                <p>A Small History of the Company - </p>
                <p>
                    <ol><li>
                        It was incorporated as a private limited company on October 22, 1955, in Madras
</li>
                        <li>
                            It is known for its innovative marketing strategy, be it distributing pamphlet from a helicopter in the fifties or introducing the exchange scheme
</li>
                        <li>
                            Became a deemed public company on June 15th, 1988. (Meaning available for public investment)
</li>
                        <li>
                            Announces landmark achievement of 10 years &amp; 500 stores of Smart Kitchen in 2013.
</li>
                        <li>
                            In 2019, It announces bonus of 5 shares against one share held by the Investor.
                        </li>
                    </ol>
                </p>
                <p>So what company are we talking about ?
                 <img src="/images/Droplet_Prestige Logo.jpg" alt="prestige Logo" className="img-center" />
                </p>
                <p>
                    Now let's mean Business, As an investor, we are sure you will also be interested to know how much money Prestige has made for its investors?
                    <img src="/images/Droplet_SP.jpg" alt="prestige Logo" className="img-center" />
                </p>
                <p>
                    From a share price of Rs 10 in Feb 2003, It has gone all the way up to Rs 8160 today, that is 816 times raise... That is an astounding return of 52% Year on Year..
                </p>

                <p>
                    To make it further explanatory, A sum of Rs 10,000 invested would have become Rs EIGHTY-ONE LAKHS! in 16 Years
</p>

                <p>
                    or let's just assume if one had invested a humble sum of Rs 100 in this company, even that would have amounted to Rs 23 lakhs today!
</p>

                <p>
                    We again wish that our readers take time and digest this piece. The more clients we meet, the more we see that a lot of them have not considered about savings and those that have taken the 1st step, still think that a Meagre sum saved in a Bank RD is gonna help them. We seriously hope that this piece helps to awake both the categories from their slumber.
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
export default wealthCreators;