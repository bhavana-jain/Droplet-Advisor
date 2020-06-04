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

class arjunReddyStock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Stock Name - Arjun Reddy Ltd - Stock Returns - 10 times in 2 months!";
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
                        <h2 className="blog-details-title">Stock Name - Arjun Reddy Ltd - <span>Stock Returns - 10 times in 2 months!</span></h2>
                        <h6 className="blog-publish-info">By Admin | Sep 16, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis />  </div>
                </div>

                <p>
                    Being an Indian, I wanted to extract the maximum juice out of my Netflix trial account. I had just completed watching Narcos, All the 3 seasons, 30 Episodes, all done within few weeks amidst a hectic work schedule. Having seen blood and gore, I wanted to wind up my Netfilx experience with something nice and that ended me in watching "Arjun Reddy"
                </p>


                <p>
                    I had heard of the movie but only as Taboo. Well, let me tell you something, Time justifies a lot of taboos, Time - one hell of a thing it is. The 1st kissing scene, the Director had just nailed it. Money's worth returned.
               </p>
                <br /> <br />
                <p className="bold">-------Break--------</p>
                <br /> <br />
                <p>
                    I wondered who the director was.  I "Wikipedia-d"
                </p>

                <p>
                    Being a Bhaniya, naturally, my eyes caught this  -
                      <img src="/images/arjunReddy.jpg" alt="Arjun reddy movie info" className="img-center" />
                </p>
                <p>
                    Oh my God! In just about 2 months, an investment of about 4 crores turned out to be 51 crores. 12 times, Wow! It is so easy to make money <a href="https://www.google.co.in/search?q=%E2%80%9CIt%E2%80%99s+not+supposed+to+be+easy.+Anyone+who+finds+it+easy+is+stupid.%E2%80%9D&rlz=1C1GGRV_en__784__784&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidovfR_6fdAhVDeisKHcqGDxAQ_AUICigB&biw=1920&bih=943" target="_blank">here</a> I thought.
</p>

                <p>
                    I just told myself - "Hey! you did not come to see this here". Alright, I started reading about Sandeep Vanga, the Director of this movie. I read this -
                      <img src="/images/develop_wiki.jpg" alt="Development Definition" className="img-center" />
                </p>
                <p>
                    So this gentlemen with all his passion took 2 full years to write the script and then spent 4-5 years to find people who would produce it... That's almost 6 years, plus add another year in producing the film, that's a total of 7 Years or so.
</p>

                <p>
                    <strong>Did I say 12 times return in 2 months?</strong>  😲 how silly I said to myself.
</p>

                <p>
                    Then I realized that almost anybody who gets into the stock markets also has the same mentality because they see the price in that 4-5 months when it shoots up. Well, the seeds are sown long back Dear Friends and Generally, we don't get to see that.
</p>

                <p>
                    Mind you, even with so much passion and patience, all the Movies don't turn out to be Super-hits, some turn duds as well. So it is with your stocks, some may well turn dead while others might do extraordinarily well. That is the reason why we suggest that 1st-time investors take the mutual fund route to invest equities since mutual funds do not tie your luck to one movie aka stock, you get to be apart of more than a dozen companies even though your investments are small.
</p>


                <p>
                    There may not be a great similarity between your investments and a super hit move but there are not many differences either.
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
export default arjunReddyStock;