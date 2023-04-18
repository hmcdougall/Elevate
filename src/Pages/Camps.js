import Header2 from './Components/Header2';
import Footer from './Components/Footer';
import './Style/site.css';
import './Style/camps.css';
import coaches from "./Photos/CoachesClose.jpg";

function Camps() {
    return (
        <div>
            <Header2 />
            <div className="section skateHeader">
                <h1>Camps</h1>
            </div>

            <div className="section">
                <br />
                <h2> Upcoming Camps</h2>
                <br />
                    <div>
                        <div id="highlight">
                            <div className="col-md-6">
                                <img src={coaches} alt="The coaches pose on the ice" />
                            </div>
                            <div className="col-md-6">
                                <h4>Mark your calendars! The 2023 ELEVATE Synchronized Skating Camp will be held in Saint Louis,
                                    Missouri on July 7-9th. We can't wait to see you there for three days of skating, fun, and
                                    education. Stay tuned for more information as we continue to finalize the details.</h4>
                                {/* <button type="button" className="btn btn-std">REGISTER HERE</button> */}
                            </div>
                        </div>
                    </div>
            </div>

            <br />

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
                                        <h5>Can I sign up for just one day of camp?</h5>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingOpen">
                                    <div className="accordion-body">
                                        Yes you can! We encourage skaters to attend every session since there is such a wide range
                                        of material to cover, but we understand if your schedule might not permit it.
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