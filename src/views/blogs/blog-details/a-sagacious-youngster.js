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

class sagaciousYoungster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "A sagacious Youngster";
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
                        <h2 className="blog-details-title"><span>A sagacious Youngster</span></h2>
                        <h6 className="blog-publish-info">By Admin | Sep 08, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis />  </div>
                </div>
                <img src="/images/" alt="" className="img-center" />
                <p>
                    <strong>Sagacious</strong> - I first read this in a newspaper article. The word stood out and stick on to my "Cockroach Brain"
                </p>

                <p>
                    <strong>Sagacious Decision</strong> - I used this in a mail, I was trolled, readers were awed. Anyways, the word stood out.
                    <img src="/images/sagacious.jpg" alt="Sagacious Definition" className="img-center" />
                </p>
                <p>
                    Well we happened to come across a Sagacious Investor. Why sagacious? Because he is young yet he has got his financial stuff all sorted out which is very rare to see in today's youth. We thought that what better thing than to get our readers a peep into his thinking and Ideas.
</p>

                <p>
                    The Chap's name is Pramod. He hails from a middle class family, born and bought up in Hosur, Tamil Nadu. His Father runs a Groceries Store and Mom is house wife. He has elder brother who works with a reputed IT company.
</p>

                <h4 className="underline">
                    Pramod's Interview follows -
                </h4>
                <p><strong>Tell us Pramod - What made you invest in equities?</strong> <br />
                I started my career in 2012, I joined a reputed organization right after my college with an average pay. I was young and naïve, forget about investments I never had an idea or mindset to save I never planned my income. Time went just like that, got promotions and hikes at the same time my expenses and need for unwanted luxury exceeded. One fine day I looked back 5 odd years passed all I had was a half paid loan, I was worried about my future and financial instability. As a typical Indian my first idea was to invest money in a piece of land or house, but thankfully I did not have the initial capital. I thought of bank RD/FD/just keeping the money in a savings account, then my brother pitched in and gave me "Gyan" saying banks interest rates will not be adequate to acquire funds over and above inflation, therefore, directed me through equities, I did my research and begun my investing career in 2018.</p>

                <p><strong>How did people around you react when you said you’re investing money in equities?</strong><br />
As soon as I had this idea to invest in equities, I contacted a couple of my friends to discuss the idea, I was disappointed to know none of us had much knowledge about share market and mutual funds, all we remembered was that mutual funds advertisement where a person reads disclaimer at lightning speed, “Mutual fund investments are subject to market risks. Please read the offer document carefully before investing.” my friends' advice was to save money for some years and invest it in real estate by taking a housing loan or by buying a piece of land. I decided to dig it up a bit and understood about the risk that I was talking, we consulted a financial advisor after that we were convinced that equities are one of the best options to get good returns. Especially if you are long term investor</p>

                <p><strong>How long have you been invested in equity related products?</strong><br />
My first investment was on 17th January 2018, and thankfully it is still continuing.</p>

                <p><strong>Do any of your family or friends have exposure towards equities?</strong><br />
My brother was the one who directed me to equities and now I know a handful of active investors in equity.</p>

                <p><strong>What is the purpose of you investing in equity-related products?</strong><br />
Initially, the purpose was to inculcate the habit of saving and investing money and to change my mind from the formula “income-expenses=savings” to a famous and effective formula “income-saving/investment=expenses”, now I am investing in equities for tax planning, retirement plan, to acquire short-term funds and to create emergency funds!</p>

                <p><strong>How do you see other asset classes compared to equities?</strong><br />
Other asset classes like Gold, Real estate, PPF, Bank FD and ULIP generate much lesser returns compared to equities and we have a huge range to choose in equities and there are more flexible options.</p>

                <p><strong>How many of your friends/family invest in equities vs real estate vs gold?</strong><br />
Most of my friends are investing in real estate, a handful of them are investing in gold, sadly very less are investing in equities.</p>


                <p><strong>What are your long term goals ?</strong><br />
As of now, my aim is to achieve a corpus of 1 crore in 15 Years' time. I hope to cross the bridge sooner.</p>

                <p><strong>What corpus would you be comfortable with on your retirement, How do you plan to be there -</strong><br />
A honest answer would be - "I dont know". I believe in being content with what i have. So i cannot surmise a number and point my finger to it. More importantly i want to clarify that in the process of creating wealth for future, i dont want to give this minute's joy and happiness. I am not planning anything significant for retirement, lets 1st cross the 1 crore bridge I mentioned and then worry about the other bridge.</p>


                <p>
                    What we wish to achieve through this blog is that better late than never. Wisdom has no age. We wish all our readers start looking at their financial lifestyle and make necessary changes. And ofcourse, we are there to help you.
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
export default sagaciousYoungster;