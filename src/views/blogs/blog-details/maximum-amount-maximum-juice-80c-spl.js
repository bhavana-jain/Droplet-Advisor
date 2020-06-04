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


class maximumAmountMaxJuices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Maximum Amount, Maximum Juice - 80C Spl Series";
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
                        <h2 className="blog-details-title"><span>Maximum Amount, Maximum Juice - 80C Spl Series</span></h2>
                        <h6 className="blog-publish-info">By Admin | Dec 22, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis /></div>
                </div>
                <p>
                    Very soon Google &amp; Facebook's artificial intelligence-equipped robots will throw ads that will show you can save taxes up to Rs 46,500 on investment of 1.50 lacs under 80C. The second amount of the first sentence is enough for middle-class families to forget about tax saving forever. So for those not convinced about tax saving, let Droplet tell you a few important things about Tax Savings
                     <ol>
                        <li>
                            It helps you achieve a better rate of return irrespective of the instrument. (Ask us how you will be surprised to know the answer)
                        </li>
                        <li>
                            It inculcates the habit of savings.
                        </li>
                        <li>
                            It helps in retirement planning. (Oh! Seriously)
                        </li>
                    </ol>
                </p>
                <p>Ok, what we intend to inform our readers is -

<ol><li>
                        Are they really eligible for Rs 46,500 savings on Tax
</li>
                        <li>
                            How much should they optimally invest to save Taxes under 80C.
                        </li></ol></p>
                <p>Droplets has taken the example of 3 Salary profiles here and explained how much each of them can claim under 80C and what would be there Tax savings -
                 <img src="/images/80C.jpg" alt="80C" className="img-center" />
                </p>


                <p>So as can be seen, those of you whose Annual income is less than 6 lacs need to worry about improving your income. Those that earn 7.5 lacs per annum, can save up to Rs  12,000 more by investing only Rs 67,050 and those who earn 10 lacs, can save Rs 21,000 by investing Rs 1,05,000. This category can also consider using NPS to save more taxes however NPS comes with its own <a href="javascript:;">catches</a>, beware before you choose the same.
You can use the <a href="https://drive.google.com/open?id=1h1zj32M-AxBphhn_QoKOqk9ijeyM6tz6" target="_blank">DIY Excel</a> to calculate the exact amount you need to invest.</p>

                <p>
                    So don't worry about the lakhs the Ad says, No one size fits all. More importantly, If you are a young earner, Small is big. Start small, saves taxes and learn about investing.
</p>


                <p>
                    Stay tuned in for more!
</p>


                <p>
                    PS - the exercise is done assuming the earner does not have a Home Loan.
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
export default maximumAmountMaxJuices;