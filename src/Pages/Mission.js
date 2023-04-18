import Header2 from './Components/Header2';
import Footer from './Components/Footer';
import './Style/site.css';
import './Style/mission.css';
import medals from './Photos/BrynnLauraGoldMedal.jpg';

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

            <div>
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
                                            accomplish
                                            their personal goals. In June of 2020, the duo parted ways to follow their dreams.
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Mission;