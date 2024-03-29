import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import '../Style/site.css';
import '../Style/article.css';
import Adam from "../Photos/Adam.png";
import Coaches from "../Photos/coaches.jpg";
import Group from "../Photos/groupphoto.jpg";

function July2022Article() {
    return (
        <div>
            <Header2 />

            <div className="section skateHeader">
                <h1>2022 in Rewind: The First ELEVATE Summer Camp</h1>
            </div>

            <div className="section">
                <div className="article">
                    <br />
                    <div className="spotlight section">
                        <h6 style={{color: "white"}}>
                            As 2022-2023 synchro season comes to a close, it is only right to reflect on our first
                            ELEVATE
                            Synchronized Skating Camp. Founded by Haydenette Laura Nicula and Miami Senior member Brynn
                            LaMear, ELEVATE brought together hard-working athletes and world-renowned coaches to create
                            a lasting impact on the synchronized skating community of the greater St. Louis area.
                        </h6>
                    </div>
                    <br />

                    <div>
                        <div>
                            <img id="image1" src={Coaches}
                                alt="The coaches smile, standing in a semicircle on the ice" />
                        </div>
                        <p>ELEVATE welcomed athletes of all ages and skill levels by dividing skaters into two groups to
                            better
                            accommodate each individual's strengths and goals. Group White and Group Pink attended both
                            on and
                            off-ice
                            sessions to develop the techniques and mental toughness needed for competitions.
                        </p>
                        <p>During the off-ice portion of the camp, skaters met with Miami University Senior Varsity
                            Synchronized
                            Skating Team members Brynn LaMear, Justine Ferrer, and Hannah McDougall to discuss the
                            importance of
                            goal-setting. Skaters learned the three types of goals and how to maximize their
                            goal-setting
                            efforts
                            using
                            the S.M.A.R.T. method. Skaters were even able to brainstorm and pitch ideas for their own
                            synchro
                            program!
                        </p>
                    </div>

                    <p>In a session focusing on positive mindset, skaters were taught by Hayden Synchro members Laura
                        Nicula,
                        Maddie Beery, and Haley Weilbacher to utilize self-talk as a way to reinforce a growth mindset.
                        Overcoming a
                        fixed mindset is critical to maintaining a healthy relationship with skating, and it instills a
                        sense of
                        perseverance that can be relied on during challenging times.
                    </p>
                    <p>The groups also attended an off-ice skating class where they were taught the no-hold element
                        from
                        the
                        Haydenettes 2021-2022 short program “Sweet Dreams”. This was a fun and unique way to encourage
                        skaters
                        to
                        fully mimic what they do on the ice when they are off the ice. Practicing programs off the ice can
                        be an
                        effective way to reinforce arms, head guides, and extensions so that on-ice time can be used to
                        practice
                        elements rather than “the little details”.
                    </p>
                    <div>
                        <img id="image2" src={Adam} alt="Coach Adam Blake explains choreography to young skaters" />
                    </div>
                    <p>The final two off-ice classes of the ELEVATE 2022 Camp were dancing and interpretive movement
                        followed
                        by stretching and recovery. The first of these two classes focused on improving the skaters'
                        component
                        score. In the component score, skaters are graded on their performance and their musical
                        interpretation.
                        Skaters performed exercises to enhance their awareness of different pieces of music. They were also
                        asked to
                        create their own off-ice routine! Skaters then transitioned to the stretching and recovery class
                        where
                        they
                        were introduced to new stretches to target muscles throughout the body, and the importance of taking
                        care of
                        one's body after a long week of training was emphasized.
                    </p>
                    <p>While the off-ice classes were helpful, the on-ice sessions were where the real fun began!
                        ELEVATE
                        started with a skating skills and drills class to build a strong foundation that skaters could add
                        to
                        throughout the duration of the camp. Skaters performed drills that concentrated on knee and ankle
                        bend,
                        as
                        well as body alignment. Skaters later attended a second skills and drills session aimed at enhancing
                        their
                        “synchro skills”. This session was dedicated to tracking and presentation, both of which are crucial
                        for
                        a
                        strong technical and artistic program.
                    </p>
                    <p>During the final two days of camp, skaters worked to strengthen specific aspects of their
                        skating.
                        Attendees were informed of the importance of having clean turns and twizzles in their program. They
                        were
                        also given the opportunity to perform these skills and receive feedback on how to improve them. To
                        ensure
                        every area of their skating was improved upon, campers attended sessions focusing on posture and
                        carriage,
                        as well as generating power with each push. They were taught effective drills that current Team USA
                        athletes
                        use to better their own skating.
                    </p>
                    <p>ELEVATE also feels so fortunate to have had guest coaches Sharon Neff and Adam Blake in
                        attendance!
                        Sharon is a former Haydenette, 2x World Medalist, and 5x National Champion. She led skaters in a fun
                        pair
                        elements and tricks class! Adam Blake is a world-renowned choreographer and head coach of the best
                        Theater
                        on Ice team in the US. He served as an assistant coach of the Haydenettes for two years and has
                        worked
                        with
                        Disney on Ice. In an exciting on-ice session that combined both groups, he taught skaters a unique
                        hip-hop
                        choreography sequence to a popular K-pop song!
                    </p>
                    <p>While both skaters and coaches had an amazing three days together, ELEVATE left an impact
                        lasting
                        months
                        beyond the camp. Skaters were given a half-zip bearing the ELEVATE logo, in addition to a folder to
                        store
                        all of their goals and motivational tips to help them throughout the long synchro season. ELEVATE,
                        however,
                        is most proud of the creation of the ELEVATE fund through the Metro Edge Figure Skating Club. This
                        fund
                        stores the proceeds from the camp and was able to be used toward the Saint Louis Synergy Junior
                        Team's
                        expenses during the 2022-2023 season.
                    </p>
                    <div className="section">
                        <img id="image3" src={Group}
                            alt="All campers gather behind sitting coaches" />
                    </div>
                    <p>From every member of ELEVATE, we thank you for attending our 2022 camp. We hope that you have
                        taken
                        away
                        positive experiences and feel that your skating left better than it started. We feel so honored to
                        have
                        worked with eager and talented young athletes, and we hope to do so again this summer! Remember to
                        keep
                        working hard and dreaming big!
                    </p>
                    <h5><br />Love, <br /> The ELEVATE Team</h5>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default July2022Article;