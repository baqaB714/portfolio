import React from 'react';
import AOS from 'aos';

const Main = () => {
    return (
        <main className="main">

            {/*------------banner start----------------*/}
            <section id="hero" className="hero section">
                <img src="assets/img/hero-bg.jpg" alt="" className="" />
                <div className="container" data-aos-delay="100">
                    <h2>Bassaki</h2>
                    <p>We are <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
                </div>
            </section>
            {/*------------banner end----------------*/}

            {/*------------about start----------------*/}
            <section id="about" className="about section">

                <div className="container section-title"
                //  data-aos="fade-up"
                >
                    <h2>About</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="container"
                // data-aos="fade-up" data-aos-delay="100"
                >

                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img src="assets/img/my-profile-img.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 content">
                            <h2>UI/UX Designer &amp; Web Developer.</h2>
                            <p className="fst-italic py-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="py-3">
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                            </p>
                        </div>
                    </div>

                </div>

            </section>
            {/*------------about end----------------*/}


            {/* ---------Stats Start ---------- */}
            <section id="stats" className="stats section">

                <div className="container"
                // data-aos="fade-up" data-aos-delay="100"
                >

                    <div className="row gy-4">

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-emoji-smile"></i>
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">232</span>
                                <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-journal-richtext"></i>
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">521</span>
                                <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-headset"></i>
                                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter">1453</span>
                                <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-people"></i>
                                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter">32</span>
                                <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            {/* ---------Stats end ---------- */}
            {/* ---------Skills start ---------- */}
            <section id="skills" className="skills section">

                <div className="container section-title" 
                // data-aos="fade-up"
                >
                    <h2>Skills</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container" 
                data-aos="fade-up" data-aos-delay="100"
                >

                    <div className="row skills-content skills-animation">

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" 
                                    // role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill"><span>PHP</span> <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ---------Skill end ---------- */}


        </main>

    );
}

export default Main;
