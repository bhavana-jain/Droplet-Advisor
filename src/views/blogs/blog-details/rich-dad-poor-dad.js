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


class richDadPoorDad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            likes: ''
        }
        this.likePost = this.likePost.bind(this);
    }
    componentWillMount() {
        document.title = "Rich Dad. Poor Dad";
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
                        <h2 className="blog-details-title"><span>Rich Dad. Poor Dad</span></h2>
                        <h6 className="blog-publish-info">By Admin | Dec 07, 2018 | Uncategorized | 0 comments</h6>
                        <div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
                    </div>
                    <div><Addthis /></div>
                </div>
                <p>Disclaimer - This blog has nothing to do with the below book. But it has got everything to do with "Rich Dad &amp; Poor Dad".
                <img src="/images/rich_poor_dad.jpg" alt="Rich dad poor dad book" className="img-center" /></p>
                <p>
                    We all want to be rich but hardly 1% actually make it there. At Droplet our endeavor is to make every person investing with us to be Rich. Because, believe us, becoming rich is not that tough, it's very simple and boring. But most of us blame it on our Parents for not giving us the kind of launchpad (Like inheritance, Degree from Fancy college, things, etc.,) to become rich. Include those of you who say "Avanukku enna, avanga Appa sambachu-vechu irukkaaru..."
</p>


                <p>
                    Before we proceed to say anything we want to bring to you 2 real stories from our beloved place ie., the Stock Market.
</p>

                <p>
                    Of course one of the companies is Rich Dad's and Another is Poor Dad's.
                    
</p>

                <p>
                    Below is the Sales that these companies have recorded in the last 10 Years.
                     <img src="/images/profitSurplus.jpg" alt="Rich dad poor dad book" className="img-center" />
                </p>
                <p>
                    As you can see the 1st company had started with huge sales figures and gradually improved its sales but the 2nd company started with a very meager sales figure and did grow tremendously but still would not go near the 1st company's nos. (Quick Work- Imagine the sales figures are your salaries, Note that they are raising except while one of you is getting a high salary, the other one gets an average salary)
                </p>

<p>
                    Now next let's look at the Profit of these companies. Let's assume profit is nothing but the surplus you have after you have spent all your salaries.
                                      <img src="/images/Image03.jpg" alt="Rich dad poor dad book" className="img-center" />
                </p>
                <p>Nothing special here, as expected, one of you with higher salaries is having a very high profit i.e, surplus while the other one with average salary has a limited surplus. But, but... While the surplus of the higher salaried guy has gradually decreased over the years, the average salaried guy simply continues with higher surpluses proportionate to his increasing salary. 

                </p>
                 <p>
                    Why does the higher salaried guy's profit decrease? Let's find out the answer -
                     <img src="/images/Image04.jpg" alt="Rich dad poor dad book" className="img-center" />
                </p>
            <p>
                Alas, its the debt. Although the company with high Sales (high salary) started with higher debt, it erred as it never repaid its debt or maybe for some reason was unable to. Notwithstanding this fact, it also got into new debts, the debts keep increasing. However the company with smaller sales fig (the Average Salaried) repaid all its debt and this has reflected as higher surplus that is higher profits.
            </p>

<p>
    So What do we learn from this?
</p>

<p>
    But before this let me clarify, Company 1 with higher sales (salary) is Reliance Communication while the one with lower sales (salary) is  V.Guard.
</p>

<p>
    Needless to say Reliance Communication is the "Rich dad" as it belongs to Anil Ambani, son of the Wealthiest Man of our Country, Mr.Dhirubhai Ambani, while V.Guard was started by a middle-class engineer in his backyard who lets say, had a "Poor Dad".
                </p>
                <p>
                    Below is the share price comparison of these 2 companies - 

                    <img src="/images/Image05.jpg" alt="Rich dad poor dad book" className="img-center" />
                </p>


<p>
    As can be seen The Rich Dad Son's company whose per share value was Rs 780 eventually today is Rs 15 while the Poor Dad Son's company share which started as Rs 5/share has wound up to be Rs 212/share.
</p>

<p>
    The value of V-Guard is Rs 8,000 crores while RCom is Rs 4,000 crores about half of what V-Guard is worth.
</p>

<p>What are the lessons we can draw from these 2 companies?
<ol><li>
    It does not matter whether you are born to a Rich or Poor Dad. You can become wealthy if you have the discipline and attitude to be there.
</li>
<li>
    It does not matter whether you have high or low salaries as long as you are smart enough to make a surplus and invest it judicially.
</li>
<li>
    How much ever high or low your salary may be, If you do not find a way to make surpluses, you will be as you are.
</li>
<li>
    Debt is bad as it takes away from you the ability to have surpluses -the real secret to becoming rich.
</li>
<li>
    That you don't have to do fancy things to be rich. Just simple-boring is enough. V-Guard makes stabilizers while RCom is in much fancier business - "Telecommunications'
</li></ol></p>
<p>
    That's it, Guys! We will let this soak in you and hope you understand that having surplus &amp; not having unrepayable debt is more important than having a Rich Dad in the course of Becoming &amp; Being Rich.
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
export default richDadPoorDad ;