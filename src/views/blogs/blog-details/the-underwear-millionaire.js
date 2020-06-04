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

class underwearMillionaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "The Underwear Millionaire!";
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
                        <h2 className="blog-details-title"><span>The Underwear Millionaire!</span></h2>
                        <h6 className="blog-publish-info">By Admin | Sep 01, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
                    </div>
                    <div><Addthis />  </div>
                </div>

                <p>
                    Like every other middle class youth, we too had the dream of becoming rich as early as possible. Not just rich, but filthy rich. We were looking for that Aladdin's magical lamp so that our wishes are fulfilled without overnight. We were desperately looking for this Aladdin lamp for years together to mint money and become filthy rich. Our search ended in late 2009, when we learned about equity markets after half reading about the fascinating success stories of <strong>Warren Buffet (WB), Rakesh Jhunjhunwala (RJ)</strong> and other stalwarts of stock markets like every other individual, I thought stock market is the only place to make money faster. Invested thousands of rupees without any proper knowledge and was waiting for it to turn into crores.
                </p>

                <p>
                    In the initial years (2009 - 2013), We chased penny stocks (stocks that are priced less than 10 or 20), thinking it is the cheapest available ones and will for sure make us filthy rich in couple of years. Back then, We were buying <strong>Karuthuri Golbal, Cals refineries, KingFisher</strong> and so on.
</p>

                <p>
                    The only motive we had was to make money faster and not to acquire knowledge. However, we did not make money nor acquired knowledge. The only positive thing that happened to us was we never ran away from equities despite multiple failures. We pressed the pause button for 6 months and did not invest during this period, but we started to read more about how business works and <a href="">why the prices move up and down.</a>
                </p>

                <p>
                    The reason why we penned this blog is to tell you that how <strong>we miss out good companies</strong> (by running behind penny stocks), which can create wealth in the long run and <strong>investing in stock markets will never make you rich overnight.</strong> Let us now look at one such company, which we missed in our life due to ignoranceand interest to read about it in the initial days.
</p>

                <p>
                    I came across a company named “Page Industries Ltd” in the month of July 2010 while watching a program in one of the popular English business channel. Then the stock was trading at Rs. 1,000 and I thought buying a paper company at this price is a worst idea. Just by hearing, the name “PAGE” my brain perceived it to be a paper company (such was the level of hindsight) and the price of Rs. 1,000 made me to move on like all other normal human being without any second thought. Then I never bothered to look at this company again. Years went by and I started looking at solid companies, which can compound wealth when held for long.
</p>

                <p>
                    It was December 2014 and I came across the name “Page Industries Ltd” again, to my surprise, this was the most sought out stock in Dalal Street. All the News Papers, Business Channels, Analysts and investors was chanting the Name “PAGE” for one reason, as the stock touched its lifetime high of Rs 10,000. The stock price galvanized me to dig deep about it.
</p>

                <p>
                    The moment I got to know about this company, I was like what the hell did I do all these years. I have been a consumer of this company for years together. Above all, somewhere in the year 2013 I was asking one of my friend shall we take up a distributor franchisee of this brand for our hometown? But that did not materialize as we had other priorities to look after and financial constraints.
</p>

                <p>
                    Ok, now hold your breath and look at the below price chart of this company! Price in 2010 and now.
</p>

                <p>
                    Price as on 16 July 2010 – Rs. 1,022.06

                    <img src="/images/priceJuly16.jpg" alt="" className="img-center" />
                </p>
                <p>
                    Today

                    <img src="/images/today.jpg" alt="" className="img-center" />
                </p>
                <p>
                    Yes, you read it right. The stock price is Rs. 35,685.44 today! That is 35 times returns. <strong>Had you invested a lakh 8 years backs it is 35 odd lakhs today!</strong>
                    <img src="/images/growth.jpg" alt="" className="img-center" />
                </p>

                <p>
                    If you look closely, the stock price did rise and fall in between the years. However, the business was solid and the brand had immense pricing power, which lead to growth year on year. Below chart will help you to understand how the company have been growing all these years –
                </p>
                <p>
                    In simple terms, the company made a profit of 17crores with a sales of 137 crores in the year 2007 when it got listed and today it makes a profit of 386 crores on the sales of 2670 crores. This is how businesses evolve and grow in front us. Those who identify, buy and hold on to them, will make fortunes and those who does not bother to take a serious look at it like me will miss out the opportunity!
                </p>

                <p>
                    Companies like these made us to understand penny stocks are not the cheapest ones and stocks trading at 4 digits are not the costliest ones. Growth is what determines whether the price is cheap or costlier.
</p>

                <p>
                    Remember, next time when you look at brand/product that is used or sold phenomenally try to look at it seriously. Who knows you too may become an underwear millionaire like those who looked at this brand seriously and invested in it J
</p>

                <p>
                    Like me, are you people still wondering what PAGE industries does? Click the following link to know yourself and have the same feel as I had “what the hell” - <a href="https://www.jockey.in/page/page-industries-ltd">PAGE</a>
                </p>
                <p>Have a great weekend ahead!</p>

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
export default underwearMillionaire;