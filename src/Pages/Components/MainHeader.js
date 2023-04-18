import './Style/MainHeader.css';
import '../Style/site.css';

function MainHeader() {
    return (
        <div className="header1">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="home">Home</a>
                            <a className="nav-link" href="mission">Our Mission</a>
                            <a className="nav-link" href="team">The Team</a>
                            <a className="nav-link" href="camps">Camps</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="header">
                <h2 className="head title">ELEVATE</h2>
                <h5 className="head title">Synchronized Skating</h5>
            </div>
        </div>
    );
}

export default MainHeader;