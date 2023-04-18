import MainHeader from "./Components/MainHeader";
import Footer from "./Components/Footer";
import './Style/site.css';
import './Style/home.css';
import groupPhoto from "./Photos/groupphoto.jpg";

function Home() {
    return (
        <div>
            <MainHeader />

            <div className="section dedication">
                <h4 className="quote">Dedicated to inspiring and educating the next generation of synchronized skaters</h4>
            </div>
            <br />

            <hr />

            <div className="section">
                <div id="news">
                    <h4 style={{paddingBottom: "0%"}}>&mdash; Stay in the Loop &mdash;</h4>
                    <h6>Check out our article!</h6>
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
                </div>
            </div>

            <br />
            <Footer />
        </div>
    );
}

export default Home;