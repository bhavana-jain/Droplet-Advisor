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

class deferringYouthLuxury extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Deferring luxury vs Deferring youth.";
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
                        <h2 className="blog-details-title"><span>Deferring luxury vs Deferring youth.   </span></h2>
                        <h6 className="blog-publish-info">By Admin | June 17, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
                    </div>
                    <div><Addthis />  </div>
                </div>
                <img src="/images/" alt="" className="img-center" />
                <p>
                    A fine Friday evening, the weekend mood was already set in, yet I was not able to move myself out of my seat, as I had to attend a meeting until 8.30pm and had to complete few tasks for the week as the dead line was approaching. It was almost 11pm, when I reached home after a tiring day at work. My kid was eagerly waiting for me and she wrapped me with her arms the moment I stepped in to the home, you know what, nothing in the world is so magical than this. And this is what happiness and luxury to me!
 </p>

                <p>
                    These days I am finding it little difficult to manage multiple things. As I have crossed half way through the retirement age, my brain is literally working and most of the time it tells me I’m aging and need to catch up a lot with my life and aspirations. The aspiration to move on and the persistence to do what I love to do is what keeping me going and I hope it does to you as well.
</p>

                <p>Being an insomnia is equally good and bad. I find more time to read and browse through something that interests me all over the night (sometimes up until 3.30 AM). This Friday midnight or Saturday early morning, I got a chance to read an interesting article on the importance of savings and deferring your unnecessary spending. Which initiated me to think seriously about deferring the spending on luxury. I thought of spreading the same thought to others through a WhatsApp status as follows – <br />
“Deferring your consumption in luxury and investing in equities in the first 10 years of your earning life, would give you an unassailable lead in wealth building...” and looking at the status few of my friends asked why one should forego his young age and should save for his future.
The problem with most of us is, we do not read between the lines and understand the significance of it. There is a subtle difference between sacrificing your youth and sacrificing luxury.
                    <img src="/images/youth_luxury.jpg" alt="sacrificing Youth Vs Luxury" className="img-center" />
                </p>
                <p>Whenever I talk to people about investments and savings right from the start of the careers or early twenties. The first thing that comes from them is life is to live and not to struggle now and think about future as well as forego the luxury that I enjoy today. People misunderstand a lot of things let me try to tell you what luxury exactly mean –
                <ol><li>
                        Luxury is, dining out &amp; watching movies every weekend.
                </li>
                        <li>
                            Luxury is, using your plastic card (credit) for every penny that you spend.
                </li>
                        <li>
                            Luxury is, buying a car that is over &amp; above your 6 months take home salary.
                </li>
                        <li>
                            Luxury is, thinking only about immediate gratification or happiness.
                </li>
                        <li>
                            Luxury is, not thinking about future at all.
                </li>
                        <li>
                            Luxury is, being ignorant and lavish.
                </li>
                        <li>
                            Luxury is, ignoring the importance of savings when you are young.
                </li>
                        <li>
                            Luxury is, spending above your means.
                </li>
                        <li>
                            Luxury is, pledging your gold for down payment of your new car.
                </li>
                        <li>
                            Luxury is, taking a personal loan for paying your outstanding credit card bill.
                </li>
                        <li>
                            Luxury is, falling in the debt thinking living every moment of your life is just spending.
                </li></ol></p>
                <p>
                    If you closely look at the lifestyle of our yester generation you will notice, they did live happily within their means. To them spending little and saving more for the difficult times or future needs was the only motive. And to everyone’s surprise most of the yester generations are government employees who receive pension even today after retirement. But most of the current generations are least bothered about the future and underestimate the need of income after 60 years of age.
</p>

                <p>
                    With the technological advancement in medical space, the expected life expectancy would be over 100+ years in the coming years. So, if you are someone like who thinks, we never know what happens tomorrow why I should save, remember only 2 to 5 out of 100 go to heaven even before reaching 60. The rest 95 stays to live in this world and struggle.
</p>

                <p>
                    So, what one should do to generate and have humongous wealth post retirement? It is very simple, cut down all your luxury spending. Have enough courage to tell “NO” to yourself and/or your kids/wife/parents if you strongly believe that a spending can be deferred.
</p>

                <p>
                    All one should do is, save at least 10% and maximum of 30% of your total earnings every momth and invest in the asset classes which has the ability to generate inflation beating returns. Typically, someone earning 50K per month should save a minimum of 5K a month and a maximum of 15K a month.
                </p>
                <p>What we suggest to the luxury spender who is 30 years old –
                
                <ol><li>
                Save 15,000 every month and invest the same for next five years.
                </li>
                <li>
                The monthly investment of 15K would have grown to 13 lakhs compounding at 15%.
                </li>
                <li>
                If you still feel luxury is all about spending, then you can stop your investments at end of 5th year. However, we strongly do not recommend this.
                </li>
                <li>
                If you had stopped the investments – the same at the end of 20 years would have given you a wealth of 2.14 crores and if the same is left as is for another 5 years, you will have a wealth of 4.31 crores (both figures compounding at 15%)
                </li>
                <li>
                However, one should remember the value of money in the next 20 or 25 years will be 1/3rd of what it is today meaning Rs 100  of today will be worth Rs 30 in 25 years
                </li>.</ol></p>





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
export default deferringYouthLuxury;