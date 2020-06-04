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

class wealthCreatorsiii extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Wealth Creators - Episode 3";
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
                        <h2 className="blog-details-title"><span>Wealth Creators</span>Eisode 3</h2>
                        <h6 className="blog-publish-info">By Admin | July 14, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis />  </div>
                </div>
                <p>
                    In the two episodes of Wealth Creators so far we have seen how a <a href="javascript:;">IT behemoth</a> made <strong>huge</strong> wealth even for novices like us. Then we followed it up with a <a href="javascript:;">Paint company</a> that gave <strong>humongous</strong> returns to its investors. This week again we will look at a similar business that is so common and famous yet made <strong>gargantuan</strong> wealth for its investors.
                </p>

                <p>
                    Just to not bore you with numbers all the time and to flaunt our vocabulary, lets now look at the return that these companies have made in English! Yes in English!
                     <img src="/images/KB01.jpg" alt="" className="img-center" />
                </p>
                <p>
                    But before we go on and get to know what the company is, let us 1st reveal a secret about great companies, It is their promoters. The success or the failure of the companies is highly tied to its promoters. <strong>Promoters</strong> are generally the Owners of the business and also often times the majority stake holders. Promoter is the person who starts the business and works closely with the business to help it grow, expand and eventually making it so big!
                </p>


                <p className="text-center bold" style={{ "fontSize": "18px", "fontStyle": "italic" }}>A Jamshedji for Tata, <br />
A Ghanshyam Das for Birla, <br />
A Dhirubhai for Reliance, <br />
A Narayan Murthy for Infosys and so on...</p>
                <p>
                    All big companies that we know of today are result of the Integrity, Passion and Hard work of the Promoters. Why are we talking about Promoters now? That is because the company that we are going to look at today is result of its Promoters sheer genius.
                </p>

                <p className="bold">
                    The Genius Promoter -
                     <img src="/images/uday.jpg" alt="" className="img-center" />
                    <div className="text-center bold">Mr. Uday -  an Indian Billionaire banker </div>
                </p>
                <ul><li>
                    Uday was born on 15th March,1959 in Mumbai, India.
                </li>
                    <li>
                        Uday decided to start out on his own, refusing a lucrative job option from a multinational.
                </li>
                    <li>
                        Uday made an entry into the finance business soon after his graduation. He found that banks gave depositors 6% interest on their investments but charged an interest of 16.5% from borrowers.
                </li>
                    <li>
                        In 1986, Uday established his company with an initial investment of Rs 30 lakhs and took 50% stake in the business. A huge capital was invested in his business by Anand Mahindra
                </li>
                    <li>
                        In 1990 he started with auto finance division.
                </li>
                    <li>
                        In 1995 he incorporated his Brokerage and Distribution businesses into a separate company – Securities. Also the Investment banking division was incorporated
                </li>
                    <li>
                        In 2000 He tied up his company with Old Mutual plc. for the Life Insurance business.
                </li>
                    <li>
                        On 22 March 2003, his company became the first company in India’s corporate history to receive a banking license from Reserve Bank of India.
                </li>
                    <li>
                        Forbes estimated his wealth to be 1060 Crores in 2018.
                </li>
                </ul>
                <p>So what company are we talking about ? well the clues were always there-
                </p>
                <p className="text-center">The Wealth Creator of Episode 3 is
                 <img src="/images/KB03.jpg" alt="" className="img-center" />
                </p>
                <p>
                    Share Price History -
                      <img src="/images/kb04.jpg" alt="" className="img-center" />
                </p>


                <p>
                    As one can see the price of one share of Kotak Mahindra Bank (KMB) was Rs 18 in 2004 and today it is Rs 1,405, almost 78 times!
</p>

                <p>Company Profile -

                <ul><li>
                        KMB is the 2nd largest bank in India.
                </li>
                        <li>
                            KMB  has 1,369 branches across 689 locations and 2,163 ATMs in the country
                    </li>
                        <li>
                            KMB has 33,000 direct employees.
                    </li>
                        <li>
                            KMB has revenues on 21,176 crores.
                    </li>
                        <lli>
                            KMB posted a profit of 1,789 crores in 2017-18
                    </lli>
                        <li>
                            KMB has total of 1,92,643 crores worth deposit and advanced loans worth 1,69,718 crores.
                </li></ul></p>


                <p>
                    I am sure the above numbers are phenomenal in every aspect and it is our fortune that as equity investors we get to be part of such wonderful businesses. It is due to our ignorance that we park 100% of our money in Term deposits or buy insurance/real estate which robs your money of its power to create huge wealth.
</p>

                <p>
                    That's it for now folks, Another very common &amp; famous company that if bothered to investigated about would have created a few millionaires!
</p>

                <p>
                    Before we part, nothing can signify the Power of Equities &amp; Compounding than the below headline from NDTVProfit on Kotak Mahindra Group.
                     <img src="/images/KB05.jpg" alt="" className="img-center" />
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
export default wealthCreatorsiii;