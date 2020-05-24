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

class ruleOf15 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "The Rule of 15!";
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
                        <h2 className="blog-details-title"><span>The Rule of 15!</span></h2>
                        <h6 className="blog-publish-info">By Admin | Aug 05, 2018| Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
                    </div>
                    <div><Addthis />  </div>
                </div>
                <p>
                    Nothing gives you more joy than doing you what you love to do. The joy increases many-fold when people follow up on you to do the most lovable thing you do! You feel special. Last week, We missed to publish our blog. That's when we realized that "Silence is louder than noise". This time our silence was returned by noise of our beloved readers asking - " Where is this week's blog? Did you forget to it share with me? " When the noise is made by readers that counts upwards of 10,000, the Love is "heart-deafening", we should tell you. Before I move on, thanks to everyone of the 10,000 readers for following us and supporting our "Droplet" like small venture.  More than this, there are couple of friends who ping us to check whether the blog is up for the week and few go an extra mile by providing unbiased view of the blog, You guys are fantastic!
                </p>

                <p>
                    Whats up for this week then -
</p>

                <p>
                    Sticking to 10,000 still, in a book called <strong>“Gurus of Chaos”</strong> by Saurabh Mukherjea, the very first chapter talks about “10,000 something”. This chapter has inspired us ever since we read it. Because its tells us that
                     <ul><li>
                        We  need not have talented parents to become a talented Person
                     </li>
                        <li>
                            We need not have rich parents to become a rich person
                     </li>
                        <li>
                            It gives us the secret of being successful, Being rich, Being all that we want to be. Its the Rule of "10,000".
                     </li>
                    </ul>

                </p>
                <p>Saurabh in his book referred an American author Gladwell and UK’s number one Table btennis player turned author Matthew Syed who pointed out that success arises from a mixture of immense application – usually thousands of hours of practice – and social circumstances, for example being born to right parents, in the right place and at the right time. They have proved that the super talented achievers are not born talented. The success of the super talents arises from the rule of 10,000 –

   <ol><li>
                        <strong>10,000 hours of practice</strong> - From art to science and from board games to tennis, it has been found that a minimum of ten years is required to reach world-class status in anything you do. The author’s points out that the top performers practice religiously and master in what they do to achieve.
   </li>
                        <li>
                            The guidance of coaches and institutions, which encourages the rigorous practice. The whole process of disciplined practice and growth becomes more efficient if done under the guidance of experts, who can spot the mistakes and take them to the right path in achieving their stardom status.
                    </li>

                        <li>
                            Finally, an enabling and empowered environment will facilitate the young people in achieving more and creating more and more future super achievers.
</li></ol>
                </p>

                <p>Let us now see how shall we apply this in investing – the rule of 15 is something similar to rule of 10,000…
                
                
                 <ol><li>
                     The 15 rule – Rs. 15,000 SIP compounding at <strong>15%</strong> CAGR for <strong>15</strong> years can give you a return of approximately <strong>1 crore</strong>. One should have the practice of religiously following the rule without breaking it. The early one starts, it helps in compounding money better and can achieve financial independence.
                 </li>
                
                <li>
                    The guidance of financial planners/advisers will help you in reaching your goal at ease. We help you in shaping your behavior towards market movements and guide investors in making an informed and right decision.
                </li>
                
                <li>
                    Finally, we (Indians) believe that equity is risky. Others that actually invest in Equities think they can fetch any returns. However, we as planners/advisors will help you break both the myths and educate you all and make you understand that equity is the only asset class, which gives not only better returns but far superior returns if held for a long term with proper guidance.
                </li></ol></p>

                <p>Note – The equity exposure in India is just 5%. Whereas the same in other developed markets, it is over 95%. We have a lot to catch and I believe we will do it in the near future.</p>




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
export default ruleOf15;