import Header2 from './Components/Header2';
import Footer from './Components/Footer';
import './Style/site.css';
import './Style/team.css';
import Laura from "./Photos/Headshots/LauraHeadshot.jpg";
import Brynn from "./Photos/Headshots/BrynnHeadshot.jpg";
import Haley from "./Photos/Headshots/HaleyHeadshot.png";
import Kyan from "./Photos/Headshots/KyanHeadshot.jpg";
import Maddie from "./Photos/Headshots/MaddieHeadshot.jpg";
import Hannah from "./Photos/Headshots/HannahHeadshot.jpg";

function Team() {
    return (
        <div>
            <Header2 />
            <div className="section skateHeader">
                <div className="statement">
                    <h1>Meet the Team</h1>
                </div>
                <br />
            </div>

            <div className="spotlight section">
                <h6 style={{ color: "white" }}>
                    The individuals behind it all. ELEVATE Synchronized Skating is composed of 
                    passionate and driven student athletes who work year-round to make this organization 
                    possible. They are the backbone of our organization and are dedicated to making our 
                    mission a reality!
                </h6>
            </div>

            {/* team intros*/}
            <div className="section" style={{marginTop: "-7vh"}}>
                <div className="row">
                    <div className="col">
                        <div className="section">
                            <div className="card">
                                <img src={Laura} className="card-img-top"
                                    alt="Laura Nicula's Headshot" />
                                <div className="card-body">
                                    <h5 className="card-title">Laura Nicula</h5>
                                    <p className="card-text">Laura Nicula, Founder of ELEVATE Synchronized Skating, is a third-year
                                        member of the Haydenettes and a junior Weissman Scholar at Babson College. Prior to
                                        skating for the Haydenettes, Laura skated on Saint Louis Synergy's Junior and Juvenile
                                        level synchronized skating teams. Her favorite synchro memory is competing the Long
                                        Program at the 2022 World Championships in Hamilton, Canada. When she's on the ice,
                                        Laura loves coaching skating skills and drills!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="section">
                            <div className="card">
                                <img src={Brynn} className="card-img-top"
                                    alt="Brynn LaMear's Headshot" />
                                <div className="card-body">
                                    <h5 className="card-title">Brynn LaMear</h5>
                                    <p className="card-text">Brynn LaMear is a Founder of ELEVATE Synchronized Skating and is a
                                        first-year member of Miami University's Senior Varsity Synchronized Skating team. Brynn
                                        skated with Miami University's Collegiate team for two seasons, taking home the national
                                        championship title in 2022. Growing up, Brynn skated for Saint Louis Synergy where she
                                        discovered her love for synchro and coaching. Her favorite element is the pivot block!
                                        Brynn's favorite synchro memory is skating the free program at her first international
                                        competition in Salzburg, Austria. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="section">
                            <div className="card">
                                <img src={Maddie} className="card-img-top"
                                    alt="Maddie Beery's Headshot" />
                                <div className="card-body">
                                    <h5 className="card-title">Maddie Beery</h5>
                                    <p className="card-text">Maddie Beery is a second-year member of the Haydenettes and a
                                        sophomore
                                        at Boston University's Questrom School of Business. Prior to moving to Boston, she
                                        lived
                                        in Glen Ellyn, IL and skated for the Starlights Synchronized Skating organization.
                                        Her
                                        favorite synchro memory is being part of the first Starlights Junior team to
                                        represent
                                        the U.S. at the 2019 Junior World Synchronized Skating Championships. Maddie's
                                        favorite
                                        elements to teach are Moves in the Field, especially spirals!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="section">
                            <div className="card">
                                <img src={Kyan} className="card-img-top"
                                    alt="Kyan LaMear's Headshot" />
                                <div className="card-body">
                                    <h5 className="card-title">Kyan LaMear</h5>
                                    <p className="card-text">Kyan LaMear has skated for Saint Louis Synergy for eleven seasons and
                                        spent her last four on the Saint Louis Synergy Junior Team. She is a senior in high
                                        school at Visitation Academy. Her favorite synchro memory is from 2019, when she
                                        competed at the junior level for the first time in Anaheim, California. The twizzles and
                                        moves elements are some of her favorites to skate. A fun fact about her is that she has
                                        two guinea pigs!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="section">
                            <div className="card">
                                <img src={Hannah} className="card-img-top"
                                    alt="Hannah McDougall's headshot" />
                                <div className="card-body">
                                    <h5 className="card-title">Hannah McDougall</h5>
                                    <p className="card-text">Hannah McDougall is a third-year member of Miami University Senior
                                        Varsity Synchronized Skating Team. She is majoring in computer science and engineering
                                        physics and made this website! Prior to Miami, she skated with Starlights Synchronized
                                        Skating Teams for eight seasons, competing Preliminary through Junior. Her favorite
                                        skating memory is qualifying for Junior Worlds with Starlights in 2019. Hannah currently
                                        coaches Team Precision Edge Pre-Juvenile.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="section">
                            <div className="card">
                                <img src={Haley} className="card-img-top"
                                    alt="Haley Weilbacher's headshot" />
                                <div className="card-body">
                                    <h5 className="card-title">Haley Weilbacher</h5>
                                    <p className="card-text">Haley Weilbacher is a second-year member of the Hayden Synchronized
                                        Skating organization. She currently skates for Hayden Select, the first Elite 12 team in
                                        the United States, and was a member of the Lexettes the year prior. Haley also skated
                                        for Saint Louis Synergy for 12 seasons and spent her last three years on Saint Louis
                                        Synergy Junior. She is currently a sophomore at Northeastern University studying
                                        chemical engineering. Her favorite element is the twizzles, and her favorite synchro
                                        memory is winning her first national medal at the 2022 U.S. Synchronized Skating
                                        Championships in Colorado Springs, CO. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Team;