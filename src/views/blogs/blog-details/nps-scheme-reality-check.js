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


class npsRealityCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "NPS Scheme - A Reality Check";
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
                        <h2 className="blog-details-title"><span>NPS Scheme - </span>A Reality Check</h2>
                        <h6 className="blog-publish-info">By Admin | May 25, 2019 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
                    </div>
                    <div><Addthis /></div>
                </div>
                <p><strong>Everything is associated with Risk. Even NPS does. What matters the most is how long you stay invested. We read an interesting article about NPS and thought of sharing it with our readers. Read on -</strong>
                </p>
                <p><strong>Pension funds have marginal exposure to the distressed firm -</strong></p>
                <p>
                    Many debt funds with the mandate to invest in corporate debt securities have been left saddled with bonds issued by the indebted IL&amp;FS and Essel group companies, resulting in a sharp erosion in their net asset values (NAVs). While the exposure of mutual funds has been making headlines, the holdings of other investment vehicles have been largely been under the radar. A BusinessLine analysis shows that pension funds under the National Pension Scheme (NPS) and Atal Pension Yojana also hold these stressed assets, albeit to a smaller extent. Scheme-C of the National Pension Scheme invests primarily in the fixed income securities issued by corporates. The portfolios of the ‘Scheme-C’ from the tier-I and tier-II NPS accounts of all the eight NPS managers were scanned to see their exposure to these companies. We also included the portfolio of Atal Pension Yojana (APY) managed by LIC, UTI and SBI pension funds.
                </p>

                <p>
                    Out of the total ₹11,490 crore assets under management of these NPS schemes, around ₹26 crore or 0.2 per cent of the total AUM has been invested in NCDs issued by the distressed IL&amp;FS and Essel group companies. Mutual funds hold over ₹7,700 crore or 0.6 per cent of their ₹13 lakh crore of debt AUM in these troubled assets. Compared to MFs, the exposure of NPS funds is smaller. However, since the recovery from such defaulting assets is uncertain, this may impact the retirement kitty of investors.
</p>

                <p>
                    Of the eight NPS fund managers, Kotak Mahindra, UTI, HDFC, LIC and SBI held IL&amp;FS bonds in the scheme-C portfolios of their Tier-I account, valued between ₹30 lakh and ₹ 4.3 crore (See table). Tier-I is the primary, non-withdrawable account under the NPS, wherein the subscriber accumulates his savings for retirement.
                     <img src="/images/Droplet_NPS.jpg" alt="NPS" className="img-center" />
                </p>

                <p>
                    Subscribers in the above-mentioned funds, who are in the transition phase — moving from accumulation to distribution — are impacted, as the redemption proceeds they receive will be based on the NAV excluding the portion of the distressed assets. For instance, assuming you have accumulated your retirement corpus of ₹10 lakh under the Scheme-C in Kotak pension fund. If you choose to redeem or transfer to the annuity option now, you may lose ₹18,300 due to the presence of the distressed assets in the portfolio.
                </p>

                <p>
                    NPS managers including LIC, UTI, SBI, HDFC and Kotak Mahindra allocated a certain portion of their portfolios to the IL&FS assets in their portfolios of scheme-C under the Tier-II account too. Tier-II is an optional NPS savings account, wherein you can invest and withdraw anytime. Investors who choose to redeem their investment at this point will get the redemption amount, excluding the portion of the distressed assets. The portfolio of Atal Pension Yojana managed by LIC and UTI NPS managers also have a small exposure (around 0.1-0.3 per cent each) to the IL&amp;FS debt worth ₹2.3 crore and ₹6.9 crore, respectively. APY is a government of India scheme guaranteeing a monthly pension ranging from ₹1,000 to ₹5,000.
</p>

                <p>
                    LIC’s APY portfolio also holds the distressed debt securities of the Essel group worth around ₹7.2 crore. <strong>Exposure to such troubled papers may make it difficult for the scheme to fulfill its promise of a guaranteed pension.</strong>
                </p>
                <p className="text-tiny">Source - Above article is reproduced from Businessline.</p>

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
export default npsRealityCheck;