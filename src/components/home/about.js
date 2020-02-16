import React from "React"

import BackgroundImg from '../misc/backgroundImage'
import MyPic from '../../images/me.jpeg'

const AboutMe = () => {
    return(
        <BackgroundImg index={0} className="About-Me">
            <div className="Container">
                <div className="Picture">
                    <img src={MyPic}/>
                </div>
                <div className="Body">
                    <div className="Header">
                        <h3>Vision, Creativity, Execution</h3>
                    </div>
                    <div className="Text">
                        <p>My names Anthony Gayflor, and im a freelance Web Developer from Indianapolis, IN. Web development is how I utilize a passion for creativity and problem solving to help brands and individuals take their vision from ideation to realization. I write code that gives power back to clients over how they manage their websites by combining the experince of a traditional CMS like wordpress and with a full range of custimization like a traditional website. The products i develop are easy to use for users, simple to manage for owners, elegant for the eyes, and fast in browser. There's no need to sacrifice a less restricted approach and performance for easy to manage content when you can have both. I enjoy working closely with clients, and following the process of: </p>
                        <br />
                        <p>    1. <span style={{color: "#f5deb3"}}>Visualizating</span> what the desired end goal we are working together to achieve</p>
                        <p>    2. <span style={{color: "#f5deb3"}}>Creatively</span> strategizing the most efficient manner to get there</p>
                        <p>    3. <span style={{color: "#f5deb3"}}>Executing</span> the plan we agreed on, to deliver product that achieves the desired goal</p>
                        <br />
                        <p>We live in an age where it's more possible than ever to bring your ideas to life over the web, and I want to be an asset for anyone with the determination to live out their purpose. By working together, let’s help you crush your objectives so the world can see your vision.</p>
                    </div>     
                </div>
                   
            </div>
        </BackgroundImg>
    )
}

export default AboutMe