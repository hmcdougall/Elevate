import Header2 from './Components/Header2';
import Footer from './Components/Footer';
import './Style/site.css';
import './Style/mission.css';
import medals from './Photos/LauraBrynnNationals2023.jpg';

function Mission() {
    return (
        <div>
                <Header2 />
                <div>
                    <div className="section skateHeader">
                        <h2>Our Mission</h2>

                        <div className="statement">
                            <h4>To inspire, empower, and educate synchronized figure skaters by providing them with
                                tools, knowledge, and support to achieve their goals and reach their full potential.</h4>
                        </div>
                        <br />
                    </div>
                </div>

                <div className='gradient'>
                    {/* mission info */}
                    <div className="container section" id="mission">
                        <div className="row align-items-start">
                            <div id="highlight">
                                <div className="col-md-6">
                                    <img src={medals} alt="Brynn and Laura hold up national gold medals" />
                                </div>
                                <div className="col-md-6">
                                    <h3>&mdash; The Founders &mdash;</h3>
                                    <br />
                                    <h5><strong>Co-founders Brynn LaMear and Laura Nicula had a dream: to represent Team USA
                                        Synchronized Skating at the senior level in college.
                                    </strong></h5>
                                    <div className="section">
                                        <h6>
                                            Both originally from St. Louis, MO, their friendship began in 2013 when the two became
                                            teammates. They spent the majority of their high school days training and competing for
                                            Saint Louis Synergy Junior Synchronized Skating Team and working tirelessly to
                                            accomplish their personal goals. In June of 2020, the duo parted ways to follow their dreams.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <p>
                                    Laura moved to Boston, Massachusetts to skate for the Haydenettes, the reigning 29-time US.
                                    Synchronized Skating National Champions and 5-time World Bronze Medalists, and attend Babson
                                    College as a Weissman Scholar. At the same time, Brynn committed to Miami University of
                                    Ohio's D1 Collegiate Varsity Synchronized Skating Team.</p>
                                <p>
                                    <strong>Despite the distance, the two remained best friends.</strong>
                                </p>
                                <p>
                                    In February of 2022, Laura and Brynn saw they were in a unique position to give back to the
                                    community that helped them accomplish their dreams. They wanted to share lessons learned,
                                    both on and off the ice, while training with the best.</p>
                                <p>
                                    <strong>In light of this rare opportunity, a new dream was born.</strong>
                                </p>
                                <p>
                                    With the support of Babson College's Weissman Scholarship, the Metro Edge Figure Skating
                                    Club, and Saint Louis Synergy Synchronized Skating Teams, the first ELEVATE Synchronized
                                    Skating Skills Camp took place in Webster Groves, MO in July of 2022.</p>
                                <p><strong>The inaugural camp was a huge success. </strong></p>
                                <p>Camp instructors included members from Miami University and the Haydenettes senior level synchronized skating teams. Campers also had the privilege of working with guest instructor Adam Blake, world-renowned choreographer and performance expert. Each of the three days were jam-packed with new skills and training tips to help our campers</p>
                                <p><strong>We wanted to do it again, but better!</strong></p>
                                <p>Our camp received incredibly positive feedback from Saint Louis Synergy Synchronized Skating Teams, and coaches in the greater St. Louis area requested that we organized another camp for the following summer. This experience helped us realize that we could positively impact the entire synchronized skating community. If we wanted to take our ideas to the next level, we had to make it official.</p>
                                <p><strong>After months of consideration and planning, ELEVATE Synchronized Skating came to life as a non-profit corporation in January of 2023.</strong></p>
                                <p>Brynn, Laura, and the entire team are extremely excited for the future of this non-profit corporation. We are tirelessly working behind the scenes to release <strong>relevant, educational</strong> content and ensure that your skaters experience a <strong>high-quality, affordable</strong> synchronized skating training camp.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
        </div >
    );
}

export default Mission;