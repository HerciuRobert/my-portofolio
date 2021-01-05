import React from 'react';
import home1 from '../img/home1.png';

const AboutSection = () => {
    return (
        <div className="descrpition">
            <div className="title">
                <div className="hide">
                    <h2>We create to make</h2>
                </div>
                <div className="hide">
                    <h2>your <span>dreams</span> become</h2>
                </div>
                <div className="hide">
                    <h2>a reality</h2>
                </div>
                <p>A person with a new idea is a crank until the idea succeeds. - Mark Twain</p>
                <button>Let's create</button>
                <div className="image">
                    <img src={home1} alt="dude with camera for now"/>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;