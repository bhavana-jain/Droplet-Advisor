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

class eatYourMoney extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "I  Eat your Money But you still DONT CARE!";
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
                        <h2 className="blog-details-title"><span>I  Eat your Money But you still DONT CARE!</span></h2>
                        <h6 className="blog-publish-info">By Admin | May 06, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis />  </div>
                </div>
                <p>If in recent memory, there is one public servant that we did not have the option to select but were happy to see at work, then that has to be this Gentleman-
                 <img src="/images/RR01.jpg" alt="Raghuram Rajan" className="img-center" />
                </p>
                <p>
                    Most of you would know him already. He was the Governor of RBI, our central Bank. His name is Raghuram Govind Rajan. He was also known as Rockstar Banker. Apart from working for Government. he also worked for Droplet Wealth Advisors. Now you know why was Droplet happy to see him at work? Yes, he kept speaking about the most important thing that Droplet gives most importance to?
                </p>

                <p>
                    Well now connect the dots - Banker/Wealth Advisors. Oh.. So both of us give importance to MONEY.. So Rajan was talking about MONEY. WRONG.. FULL WRONG Guess. Its like We are trying to make you Dhoni, you want to become Saha.. then one Big Swaaaha for you!
</p>

                <p>
                    Alright lets cut the crap now. He spoke about INFLATION. We told he is important to us because he gave us a very important concept - Dosanomics. to explain the effect of INFLATION
</p>

                <p>
                    Refer below -
                                     <img src="/images/Dosa.jpg" alt="'" className="img-center" />
                </p>
                <p>
                    In case you did not note what Rajan and we wanted you to note, we have put the image back here highlighting the thing to be noted -
                      <img src="/images/dosa01.jpg" alt="'" className="img-center" />
                </p>
                <p>
                    Yes, Today we want to bring to your attention this <strong>Wealth eating termite that Inflation is</strong>.
                    Inflation is such a thing that it robs your saving of the power of making you rich. Lets assume that your Parents already saved 6.50 some 35 years ago in fixed deposit. The FD generally has returned a average of 9% interest. If you were to withdraw that money today you will get Rs 132. This is a handsome return since your money has increased by 20 times. But mind you, Inflation has been there too but you have not been mindful about it. So you simply ploughed your saving into FD thinking that it will help you in retirement days. Lets look what happened -
                    <img src="/images/Amul.jpg" alt="'" className="img-center" />

                </p>
                <p>
                    Alas! With Rs 6.50 you would have bought 500 Gms of Amul butter 35 years ago. But today even after saving and letting the same Rs 6.5 grow @ 9% you will not be able to buy 500 gms of Amul with the wealth generated. Blame no one but Inflation.
                </p>

                <p>
                    Below is the list of items and how much their cost has increased over period of time due to inflation.
                      <img src="/images/InflationChart.jpg" alt="'" className="img-center" />
                </p>
                <p>
                    What do you suggest we do then? Simple. Save your hard earned money in products which gives returns that beat inflation. Be it real estate, Financial products or any other investment, Apply enough prudence and decide whether the investment will help you buy Equal Amul or Less Amul or More Amul in future.
</p>

                <p>
                    If you have got hold of this concept then you have hit Inflation for a SIX! Like what Rajan shows below-
                                     <img src="/images/rrSixer.jpg" alt="'" className="img-center" />
                </p>
                <p>Or if you continue to ignore, even if you save, Inflation will get you will get out!
 <img src="/images/rrOut.jpg" alt="'" className="img-center" />

                    <div className="text-center">
                        Ignored Inflation? Yes, you are out he says!
                    </div></p>
                <p>
                    To those feeling like below -

                    <img src="/images/rrPout.jpg" alt="'" className="img-center" />
                    What are they trying to tell, I dont understand anything, please talk to us;)


                </p>

                <p>At Droplet, we want you to help yourselves be better saver and reach financial independence.</p>

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
export default eatYourMoney;