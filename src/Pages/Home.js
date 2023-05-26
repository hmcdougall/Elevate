import MainHeader from "./Components/MainHeader"
import Footer from "./Components/Footer"
import './Style/site.css'
import './Style/home.css'
import groupPhoto from "./Photos/groupphoto.jpg"
import save from './Photos/SavetheDate.jpg'
import elite12Header from "./Photos/SelectNationalMedal.jpg"


function Home() {
    return (
        <div>
            <MainHeader />

            <div className="section dedication">
                <h4 className="quote">Dedicated to inspiring and educating the next generation of synchronized skaters</h4>
            </div>
            <br />

            <div className="section">
                <h2>Our 2023 Camp is on the way!</h2>
                <div className="graphic">
                    {/* <div className="col-outside">
                        <img src={circle} />
                    </div> */}
                    <div className="col-inside">
                        <img src={save}
                            alt="Save the date flyer: Camp 2023" />
                    </div>
                    {/* <div className="col-outside">
                        <img src={circle}/>
                    </div> */}
                </div>
                <br />
                <button type="button" className="btn btn-std">
                    <a className="nav-link" href="camps">Click here for more info</a>
                </button>
            </div>

            <hr />

            <div className="section">
                <div id="news">
                    <h4 style={{ paddingBottom: "0%" }}>&mdash; Stay in the Loop &mdash;</h4>
                    <h6>Check out our articles!</h6>
                    <div className="col">
                        <div className="card" style={{ width: "22rem" }}>
                            <img src={groupPhoto} className="card-img-top"
                                alt="All camp skaters gather behind coaches" />
                            <div className="card-body">
                                <h5 className="card-title">July 2022 Camp</h5>
                                <p className="card-text">As 2022-2023 synchro season comes to a close, it is only right to
                                    reflect on our first ELEVATE Synchronized Skating Camp.
                                </p>
                                <a href="articles/july2022camp" className="btn btn-std">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{ width: "22rem" }}>
                            <img src={elite12Header} className="card-img-top"
                                alt="All camp skaters gather behind coaches" />
                            <div className="card-body">
                                <h5 className="card-title">Reflecting on Elite 12</h5>
                                <p className="card-text">Haley Weilbacher reflects on her season skating for Hayden Select and the future of synchronized skating.
                                </p>
                                <a href="articles/elite12" className="btn btn-std">Read More</a>
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

export default Home;