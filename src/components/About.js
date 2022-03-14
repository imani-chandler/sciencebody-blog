import { Component } from "react";


class About extends Component {
    render () {
        return (
            <div>
                
                <div className="case">
                    
                    <div className="row">
                        <div className="col">
                            <h1>About Us</h1>
                            <img className="my-5" src="/assets/images/ScienceMind.jpg" alt="ancientbody" height="500" width="1000" ></img>
                        </div>
                    </div>
                    
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                            <p>I am a Personal Trainer and Nutrition coach. I formerly served in the United States Army and am currently pursuing a career as a medical doctor. Over the years I have tried many of the recommended diet and exercise approaches ranging from vegan to carnivore to high intensity training to high volume training with varying degrees of success. I have tried both the intermittent fasting approach for weight loss as well as eating every few hours in hopes of building muscle. I have bought all the supplement and read all the books. I have seen family, friends, and clients succeed and fail with these approaches for a variety of reasons. I’ve come to realize that there is so much information out there, some of which is contradictory, that it is easy for many to become confused and fall short of their goals. I decided to create this website with that in mind. Here we will be looking at the science and remove the guesswork that often accompanies diet and exercise. My hope is that you don’t have to go through all the wasted time, effort, and money that many have to reach your goals.</p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default About;