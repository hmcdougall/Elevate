import Header2 from './Components/Header2';
import Footer from './Components/Footer';
import './Style/site.css';
import './Style/camps.css';
import coaches from "./Photos/CoachesClose.jpg";
import stlCamp from './Photos/SaintLouisCamp.jpg';

function Camps() {
    return (
        <div>
            <Header2 />
            <div className="section skateHeader">
                <h1>Camps</h1>
            </div>

            <br />

            <div id="highlight" className='banner'>
                <div className="col-md-6">
                    <img src={stlCamp} alt="Announcment for Elevate Camp 2023" />
                </div>
                <div className="col-md-6">
                    <h3>Registration for the 2023 ELEVATE synchro camp is now open! Join us for three days of skating, fun, and education.</h3>
                    <button type="button" className="btn btn-std">
                        <a className='nav-link' href="http://comp.entryeeze.com/Home.aspx?cid=861">REGISTER HERE</a>
                    </button>
                </div>
            </div>

            <div className='sectionSpacer'> </div>

            <div className="section" id="upcoming">
                <br />
                <div>
                    <h3>&mdash; What to Expect &mdash;</h3>
                    <br />
                    <div id="highlight">
                        <div className="col-md-6">
                            <img src={coaches} alt="The coaches pose on the ice" />
                        </div>
                        <div className="col-md-6">
                            <h4>Skaters can expect each day to be filled with on-ice training, off-ice classes, and
                                team building activities with Team USA athletes. Skaters will also have the
                                opportunity to participate in Q&A sessions and learn from some of the best in the sport!</h4>
                        </div>
                    </div>

                    <div className='sectionSpacer'> </div>

                    <h3>Class Topics Will include</h3>
                    <div id='highlight'>
                        <div className='col-md-6'>
                            <h6>Turns and Twizzles</h6>
                            <h6>Stroking and Power</h6>
                            <h6>Field Moves</h6>
                            <h6>Flexibility</h6>
                        </div>
                        <div className='col-md-6'>
                            <h6>Pair Tricks and Transitions</h6>
                            <h6>Q&A Sessions</h6>
                            <h6>Recovery</h6>
                            <h6>Mental Training and Goal Setting</h6>
                        </div>
                    </div>
                    <div className='sectionSpacer'> </div>
                </div>
            </div>

            {/* FAQS */}
            <div className="section">
                <div className="divider">
                    <h2>&mdash; FAQs &mdash;</h2>
                </div>
                <br />

                <div id="faqs" className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseOne">
                                <h5>What if I can't attend a day of camp?</h5>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingOpen">
                            <div className="accordion-body">
                                Simply email us! That's not a problem at all as long as we know you'll be absent.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo">
                                <h5>What is the required skill level?</h5>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                We are accepting skaters who have passed their Pre-Juvenile Moves in the Field and above.
                                While we would prefer skaters to have synchronized skating experience, none is required.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseThree">
                                <h5>Is there anything specific I should bring with me?</h5>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                Please remember to bring a refillable water bottle and snacks.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseFour">
                                <h5>What should I wear to camp?</h5>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingFour">
                            <div className="accordion-body">
                                Black leggings and an athletic shirt/tank top. For warm up and off-ice classes, athletic
                                shoes are required.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <br />

            <Footer />
        </div>
    );
}

export default Camps;