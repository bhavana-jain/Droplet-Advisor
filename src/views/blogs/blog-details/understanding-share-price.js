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

class underStandingSharePrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Understanding the share price";
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
                        <h2 className="blog-details-title"><span>Understanding the Share Price</span></h2>
                        <h6 className="blog-publish-info">By Admin | July 22, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
                    </div>
                    <div><Addthis />  </div>
                </div>

                <p className="text-center bold">
                    The Price of 1 share of MRF is Rs 76,650 <br />
                    The Price of 1 Share of Eicher Motors is Rs 27,000 <br />
                    The Price of 1 share of  Maruti Suzuki is Rs 9,300 <br />
                    The Price of  1 share of TVS Srichakra is Rs 3031 <br />
                    The Price of 1 Share of Colgate is Rs 1100 <br />
                    The Price of 1 share of State Bank of India is Rs 260
                </p>
                <p>
                    What does all this mean?
                    As indicated by Share Price alone
<ul><li>
                        Does it mean that MRF is costly and Maruti is cheaper?
</li>
                        <li>
                            Does this mean that State Bank of India is smaller than Maruti?
</li></ul>
                </p>
                <p>
                    The share price is face of the share market. Share price is the first thing that anybody who comes to stock markets sees first. This person may not know anything about the Stock markets, He -may not know Market Capitalization, may not know Gross Profit Margins, may not know bottom line, may not know top line but he will know the Price of most of these shares.
                        </p>
                <p>
                    It took us 8 Years and 6 months to understand just the face of the Market that this share price is. We will today try to educate our readers what is share Price. We will understand What does the 72,000 of MRF mean, What does the 27000 of Eicher mean, What does the 260 of SBI mean ? ? ?</p>

                <p>
                    Let us first see how much sales these companies are doing and the Profits they are making on it.
                      <img src="/images/companyProfit.jpg" alt="" className="img-center" />
                </p>
                <p>
                    MRF is making a sales of only Rs 15K crores but Maruti is making sales 5 times more than MRF, SBI is making 3 times more sales than Maruti. Alas, the Share Price tells a different story. MRF at 78K is suppose to be bigger than everybody else. Wasn't it?
                </p>

                <p>
                    So why is MRF's price so high even though it is making less profits than Maruti ?
</p>

                <p>
                    The answer to this lies in the number of Shares the company has issued in total. When a company goes public, It will issue shares that the public buys hence becoming shareholders in the company. So if company A has issued 100 shares and is making Rs 100 in profits, each share gets Re 1 as Profit (100 Rs/ 100 Shares). But if company B has issued only 10 shares and makes Rs 100 profit, then each share get Rs 10 as Profit. This Re 1 or Rs 10 profit is called Earnings Per Share (EPS).So its natural that Company B's share will be "costly" as shareholders get higher Profits (EPS) for 1 share held against one share held in company A.
                </p>
                <p>Lets look at the Profits per Share of the Companies -
                  <img src="/images/profitsPerShare.jpg" alt="" className="img-center" />
                </p>
                <p>
                    for every share of MRF you get Rs 2,564 as profits where in for Eicher you get Rs 719 while Maruti gives Rs 256 as profits. SBI does not give you any profits at all since it is making loss.
 </p>

                <p>
                    Thats alright but how is EPS and share price connected? It is connected by another fancy term called 'Price to Earnings". In other words, the number of times the Profits you are ready to pay to buy the share. Like in the above example Company A is earning 1 Re for every share. If anybody is ready to pay 10 times its earning, then the price of Company A becomes Rs 10 or if the same person buys shares of Company B, the Share Price of company B will be Rs 100 as he is ready to pay 10 times its earnings.
</p>

                <p>
                    Back to our example, Lets see how the Share price of these are derived -
                      <img src="/images/derivedSharePrice.jpg" alt="" className="img-center" />
                </p>
                <p>
                    So with earning of Rs 2,564 and the Market is ready to pay 30 times of earning, MRF has a hefty price of Rs 76K while Maruti derives its price of Rs 9K with Investors ready to pay 37 times its earning of Rs 256 and Colgate gets a price of Rs 1,124 since Buyers are ready to 45 times its earning of Rs 25.
</p>

                <p>
                    So even if MRF is Rs 76K, you only have to 30 times earnings against 37 times of Maruti or 45 times of Colgate, now you know which is costly? A share with price of 76K or A share with price of 1,124?
</p>

                <p>
                    Next time you see a share price, Ask yourselves How much does the company sell? How much profit it is making and how much shares get a part of this profit. You will know for your self if the Share is costly or not?
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
export default underStandingSharePrice;