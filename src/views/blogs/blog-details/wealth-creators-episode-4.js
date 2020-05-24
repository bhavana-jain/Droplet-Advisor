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

class wealthCreatorsEpi4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Wealth Creators - Episode 4";
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
                        <h2 className="blog-details-title"><span>Wealth Creators</span> - Episode 4</h2>
                        <h6 className="blog-publish-info">By Admin | Aug 25, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
                    </div>
                    <div><Addthis />  </div>
                </div>

                <p>
                    A IT company, A Paint Company, A Bank and what now? Look around your house, You will find one. Above the Air conditioner that conditions the temperature of your room, near that LED TV, may be next to the refrigerator... That Saucer plate like thing gadget that guards your electrical appliances from the shocks by stabilizing the power supply..
                </p>

                <p>
                    Please guess what I am talking about! Okay, Here is another clue -
                                      <img src="/images/VGuard.jpg" alt="V Guard product" className="img-center" />
                </p>
                <p>
                    Oh yeah! The Stabilizer and today's Wealth Creator is <strong>V-Guard Industries</strong>. I myself did not know so much about this company until my Ex-Manager popped up this name. This is his Ex-company. Ex-Manager's Ex-Company, Weird ?!? Aaargh!
                </p>

                <p>A Look into the history of V-Guard -
                
 <ul><li>
     Started in 1977, when <strong>Kochouseph Chittilappilly</strong> set out to build a brand in the Indian electric and electronic goods industry
 </li>
                    <li>
                        Started with a small manufacturing unit for voltage stabilizers, a capital of Rs.100,000 and two employees
                    </li>
                    <li>
                        The company now has over 500 distributors, 30,000 retailers, and branches across India
                    </li>
                    <li>
                        Got listed in 2008 (Available for public investments)
                    </li>
                    <li>
                        Company had a sales of Rs 200 Crores in 2008 and since then has shown solid growth.
                    </li>
                    <li>
                        In 2017-2018, V-Guard has <strong>revenue of Rs 2,300 Crores earning a net profit of Rs 133 Crores.</strong>
                    </li>
                    	           
                    <li>
                        It also Owns Wonderla, the amusement park
                    </li>
 <li>
                            It employs 2,096 FTE.
 </li></ul></p>
                <p>
                    The Journey of the Share Price  - 
                      <img src="/images/VGuard02.jpg" alt="V Guard share price" className="img-center" />
                </p>
                <p>
                    When the Company got listed, Each share was available for measly sum of Rs ~4. Over the years, the Price has grown tremendously and today is quoting @ Rs 214 and absolute profit of Rs 210 per share in just about 10 Years.
                </p>

<p>Lets assume that somebody applied for the shares during the IPO and held on to it since then...
                A Investment of 100,000 would have become - 
                     <img src="/images/VGuard03.jpg" alt="Share price estimate" className="img-center" />
                </p> 
                <p>Yes, It would have grown into <strong>53 lacs</strong>. The rate at which the company share price has grown is 48% and most importantly look at this 
                    <img src="/images/VGuard04.jpg" alt="Share price estimate" className="img-center" />
                </p>
                <p>It is the dividends the company has paid since 2012. Sum it up, It comes to Rs 24 approximately. 
                 <img src="/images/VGuard05.jpg" alt="Share price estimate" className="img-center" />
                    So you see only the dividends are enough to beat the FD returns handsomely. Basically all it means for us is that we have got our 1 lac investment back and the 50 lacs worth of shares we have is free.. May be, it seems, there is a thing called "Free Lunch" after all. </p>

<p>
    We really hope you understand that investing in FD/Gold is not all a wise choice when you have better avenues to invest in.
</p>

<p>
    Choose Wise.
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
export default wealthCreatorsEpi4;