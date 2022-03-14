import React, { Component } from "react";


class Home extends Component {
    render () {
        return (
            <React.Fragment>
                
                <div className="case">
                    <div className="row">
                        <div className="col">
                            <h1>Home</h1>
                            <img className="my-5" src="/assets/images/ScienceBodyLogo.jpg" alt="science body logo" height="500" width="1000"></img>
                        </div>
                    </div>
                </div>            
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <p>Welcome to Science Body. Here our mission is to build healthier bodies through science. The goal of this website is to dispel some of the confusion surrounding exercise and nutrition. Here at Science Body, we will be discussing how you can build a healthier you through science. We will also be going over some of my own experiences throughout the years in hopes that it will help you reach your goals.</p>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Home;