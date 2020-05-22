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

const SubscribeBlog = () => {
    const mailChimpLoaded = () => {
        window.dojoRequire(["mojo/signup-forms/Loader"], function (L) { L.start({ "baseUrl": "mc.us8.list-manage.com", "uuid": "55126eebce7574436da9b2b2f", "lid": "52f2193bbd", "uniqueMethods": true }) });
        console.clear();
        console.log("mailchimp loaded")
    }
    return (
        <div>
            <LoadScript url="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false" onLoad={mailChimpLoaded} />
        </div>
    )
}


class oldAgeStory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Being a hare? Being a tortoise? Read, Decide!";
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
                        <h2 className="blog-details-title"><span>Being a hare? Being a tortoise?</span> Read, Decide!</h2>
                        <h6 className="blog-publish-info">By Admin | Oct 25, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
                    </div>
                    <div><Addthis /> <SubscribeBlog /> </div>
                </div>

                <p>
                    Tortoise and Hare were friends, but as different as chalk and cheese. Tortoise liked to play it safe, while Hare enjoyed taking risks. Both started investing Rs 10,000 a month when they got their first pay cheques. And both of them were as different as different can be. Hare was drawn to the stock market. He wanted to invest his money in equity mutual funds and even thought of buying a few stocks. Tortoise was a conservative investor. He put his money in the safety of fixed deposits and opened a PPF account.
</p>
                <p>
                    Tortoise was unfazed by the jibe. He smiled and shook his head slowly, and continued putting money in the PPF.
</p>
                <p>
                    Hare watched the market with a keen eye. He acted fast when he saw an opportunity, investing in equity funds through SIPs. He lined his demat account with bluechips. Whereas Tortoise invested methodically. He increased his investment by 10% every year.
</p>
                <p>
                    After 10 years of investing, hare looked at his portfolio. He had earned compunded returns of 15% and accumulated Rs 28 lakh. "I've come a long way. Now I can indulge myself a little. Go on a vacation buy the sports car I've been eyeing for age," thought hare.
                </p>
                <p>
                    However, tortoise thought otherwise. "Hare doesn't realise what he's doing. He'll fall short when he retires if he stops investing now. As for me, I'll keep putting money away like I always have, and retire comfortably," he said. Tortoise continued to put money in his EPF account, PPF and bank deposits. He had to make some lifestyle sacrifices to ensure that his savings rate didn't falter.
                    Meanwhile, Hare was enjoying life to the fullest. He had not put in any money after the first 10 years.

                     <img src="/images/oldAgeStory.jpg" alt="Investment story" className="img-center" />
                </p>
                <p>
                    Eventually retirement rolled around for both. As they chatted about retirement, Tortoise listened to Hare's grandiose plans for travelling and upgrading his home skeptically. His jaw dropped when Hare mentioned how big his nest egg was.
                </p>
                <p>"But...but that's almost equal to what I have saved up! How is that possible? I invested regularly, while you stopped. In fact, I increased my investment every year. I made so many sacrifices while you enjoyed life! How can you have as much money as I do?," tortoise said furiously. "Yes, but I invested in the right instruments. My wealth grew at 15%, while yours rose 8%," replied hare.
So, the moral of the story is: It's good to save regularly, but you must choose the right investments. Low-yield options like FDs and PPF can't win the retirement race.</p>
                <p>
                    Be wise. Stay wealthy. Save more and invest regularly.
                </p>

                <p>
                    Courtesy - ET
                </p>
                <p>
                    <strong>Caution</strong> - Mutual fund investements are subject to market risk.
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
export default oldAgeStory;