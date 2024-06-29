import React from 'react';

const BannerSection = () => {
    return (
        <div>
            <section id="hero" className="hero section">
                <img src="assets/img/hero-bg.jpg" alt="" className="" />
                <div className="container" data-aos-delay="100">
                    <h2>Bassaki</h2>
                    <p>We are <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
                </div>
            </section>
        </div>
    );
}

export default BannerSection;
