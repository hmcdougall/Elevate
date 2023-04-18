import '../Style/site.css';
import './Style/footer.css';
import logo from "./Photos/Logo.png";

function Footer() {
    return (
        <footer>
            <div className="menu">
                <img src={logo}
                    alt="Elevate Logo: Three overlapping mountains are arranged over the word Elevate" />
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="navbar-nav">
                            <a className="nav-link" href="../home">Home</a>
                            <a className="nav-link" href="../mission">Our Mission</a>
                            <a className="nav-link" href="../team">The Team</a>
                            <a className="nav-link" href="../camps">Camps</a><a className="nav-link"
                                href="https://www.instagram.com/elevatesynchro/"><i className="fa-brands fa-instagram"></i></a>
                            <a className="nav-link" href="https://www.facebook.com/elevatesynchro/"><i
                                className="fa-brands fa-facebook-f"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
            <p>&copy; Elevate Synchronized Skating 2023. All Rights Reserved</p>
            <p><small>Site by Hannah McDougall &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;Feature Photo Credits
                Elissa Kempisty</small></p>
        </footer>
    );
}

export default Footer;