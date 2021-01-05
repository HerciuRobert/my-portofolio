import React from 'react';
//import icons
import home2 from '../img/home2.png';
import design from '../img/design.svg';
import branding from '../img/branding.svg';
import developer from '../img/developer.svg';

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>
                    High <span>quality</span> services.
                </h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={design} alt="designer"/>
                            <h3>UX Designer</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={branding} alt="branding"/>
                            <h3>Branding Designer</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={developer} alt="developer"/>
                            <h3>Frontend Developer</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="img">
                <img src={home2} alt="to be changed"/>
            </div>
        </div>
    )
}

export default ServicesSection;