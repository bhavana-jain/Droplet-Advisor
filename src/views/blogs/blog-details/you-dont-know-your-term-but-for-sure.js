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

class limitedTerm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "You Don't Know Your Term But For Sure Your Term is Limited";
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
                        <h2 className="blog-details-title"><span>You Don't Know Your Term But For Sure Your Term is Limited</span></h2>
                        <h6 className="blog-publish-info">By Admin | June 23, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis />  </div>
                </div>
                <p>
                    Of course, we want to bring some fascinating information and deliver the same to you every weekend. So that you read it, love it, read it again, get inspired and get ready for a hectic working week ahead. But how much ever polite the Doctor might be, if the medicine is bitter then bitter it shall taste!
                </p>

                <p>
                    Alright so what is all this about?
</p>

                <p>Last week was eventful but in un-wish-able way. We wanted to do this blog but not with the way, we are doing. The week that went by bought some news that made me sit and think about it. More so to reflect that as a blog for our readers.

<ol><li>
                        Tuesday Morning I had 7 missed calls from the same number. One of my close friends called me to inform demise of Another Friend's mother.
</li>

                        <li>
                            Wednesday afternoon I got a message of a certain acquaintance passing away. This gentleman had some influence in my life, he gave me critical advice to me at difficult times in life, they have helped a lot and i still hold on to them.
</li>

                        <li>
                            Thursday, a colleague of mine was sharing a news that a friend of his who was "Super Healthy" till previous Saturday has  gone "brain Dead!"
</li></ol></p>
                <p>
                    As he was telling this, I was like - "Okay It happens!" But then he continued, until that point the Bell in my head did not ring.
</p>

                <p>
                    He said - "We guys have no cover in case something happens to us", pointing to the guy sitting across to him.
</p>

                <p>
                    I replied - "What about me, Him (point to some random) or him (another random guy.).
</p>

                <p>
                    He told - "No I am telling like, We are married and have gone the family way, hence have bigger responsibilities"
</p>

                <p>
                    I asked him - "Do you have a term?"
</p>

                <p>
                    "Nope!"
</p>

                <p>
                    I did not say anything back. Because he was not the only guy/person, whom we have met had the realizations that he has "Bigger Responsibility" but has done nothing towards accomplishing it in his absence.
</p>

                <p className="text-center bold">
                    To realize is one thing and to act on it is another.
                </p>
                <p>
                    It takes not much but just a bit of seriousness and a firm thought to keep your family's life well after you  (in case something happens to you).
                </p>

                <p>
                    In Short, We strongly advise that every working member of the family should take a <strong>Term Life Insurance</strong>.
</p>

                <p>
                    <strong>Term Life Insurance</strong> is one of the <strong>most useful and cheapest</strong> variety of the insurance available. I am not able to emphasize enough "Cheapness" in the word "CHEAP" above.
</p>

                <p>
                    Benefits of term insurance –
                    <ol><li>
                        The only life insurance – Insurance is to cover the risk of life and only term does it to the fullest. Rest all are just Jumlas.
                    </li>
                        <li>
                            Low premium – the premium one pays is very minuscule when compared to the benefits the dependents gets in case of any uncertainity.
                    </li>
                        <li>
                            Financial Security – In case of any uncertainity, huge financial liabilities had to be borne by the family. Term insurance will cover the risk &amp; dependents will not have to worry for financial support.
                    </li>
                        <li>
                            Tax Benefits – One can claim exemption under section 80C and the claim or maturity amount is tax-free as well.
                    </li>
                        <li>
                            Rider options – One can avail additional benefits by opting for riders such as Critical illness and accidental death or permanent dis-ability benefits.
                    </li></ol>


                </p>
                <p>
                    <strong>How To Go about a Life Term Policy-</strong>

                    <ol><li>
                        Take a cover 20 times of your annual salary.
                    </li>
                        <li>
                            Add an Accidental Life Cover
                    </li>
                        <li>
                            Add a Critical Illness Cover.
                     </li></ol>

                </p>
                <p className="bold">
                    How much does it Cost you?
                </p>

                <p>
                    Let us assume your monthly income is 50,000. Ideally, you need to go for a cover of 1.2 Crores. It approximately costs you only Rs 1,200 per month. Imagine, something happening to you, your family gets 1.2 Crores. Period.
</p>

                <p>
                    Before I wind up, Let me give an example of how laid back we are - A friend of mine just got his PR approved, I was so happy for him. However, I thought its better he has a cover just in case and without hesitation I pinged him, he said he would get back to me, only leaving me to post my disappointment here. We pinged him and likewise we have written this blog, Wisdom of Action is yours!
</p>

                <p>
                    People pay more attention to pay their two /four wheeler insurance in order to protect their vehicle from any uncertainty (could be because of strict laws). However, they fail to do so when it come to their lives. This is how ignorant we are.
</p>

                <p>
                    All we can say is - Go on, get your <strong>life</strong> covered, it is the <strong>most valuable thing you have</strong>!
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
export default limitedTerm;