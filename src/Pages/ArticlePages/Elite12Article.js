import Header2 from "../Components/Header2"
import Footer from "../Components/Footer"
import '../Style/site.css'
import '../Style/article.css'
import Medals from "../Photos/SelectFrenchMedals.jpg"
import EiffelTower from "../Photos/SelectEiffelTower.jpg"
import Champion from "../Photos/HaleyNationalChamp.jpg"

function Elite12Article() {
    return (
        <div>
            <Header2 />

            <div className="section skateHeader">
                <h1>Elite 12: Paving the Way for Synchronized Skating's Olympic Dreams</h1>
            </div>

            <div className="section">
                <div className="article">
                    <br />
                    <div className="spotlight section">
                        <h6 style={{ color: "white" }}>
                            We asked our own ELEVATE team member Haley Weilbacher about her first season skating on an Elite 12 synchro team. From overcoming capacity issues to breaking new ground in creativity and athleticism, Haley discusses how Elite 12 is paving the way for the future of synchronized skating.
                        </h6>
                    </div>
                    <br />

                    <div>
                        <div>
                            <img id="image1" src={Champion}
                                alt="The coaches smile, standing in a semicircle on the ice" />
                        </div>
                        <p>
                        Every four years, I gather with friends and family to cheer on the world’s greatest athletes at the Winter Olympic Games. Throughout my adolescence, I would continuously tell my parents that I was “Beijing Bound” or that they would see me on the ice in Sochi or wherever the next Winter Olympics were being held. While these comments were made with the true desire to become an Olympian, they were always said in a joking manner because synchronized skating was never on the list of sports included in the Games. As the International Olympic Committee (IOC) met after each Winter Olympics to determine the sports that would be added and removed for the next Games, I waited anxiously for the announcement that synchronized skating would be allowed to take part. Instead, I would see my social media pages flooded with “#whynotsynchro” and feel a sense of defeat. The sport that I had dedicated the greater part of my life to would once again be hidden from the world.
                        </p>
                        <p>
                        After each IOC meeting, we were told that the Olympic village was not capable of housing the number of athletes that synchronized skating would bring. Year after year, I hoped the IOC would create a plan for a larger Olympic village as I was unsure how else the capacity issue could be resolved.
                        </p>
                    </div>

                    <p>
                    During my senior year of high school, I heard about a plan to create a senior-level team with 12 people instead of 16. I didn’t pay much attention, figuring that it would not make it past the idea phase. However, I remained hopeful because it was a possible solution to the Olympic village housing crisis. I realized hopes became reality when the Hayden Synchronized Skating Organization unveiled its plan to field a team in this division. The first year that tryouts were held for Elite 12, the team did not even have a name. However, I was excited that the first steps toward getting synchro into the Olympics were being taken.
                    </p>
                    <p>
                    I skated on Lexettes, Hayden Synchro’s junior team, during Hayden Select’s inaugural season. 
                    </p>
                    <div>
                        <img id="image2" src={EiffelTower} alt="Coach Adam Blake explains choreography to young skaters" />
                    </div>
                    <p>
                        I watched in admiration as they acted as trailblazers.
                    </p>
                    <p>
                        During the 2021-22 season, the team competed in and won the first-ever Elite 12 competition in Rouen, France. They also exhibited their program at nationals for a live audience. Despite the many exciting “firsts” achieved in the prior season, I knew there was still room to grow when I joined the team for the 2022-23 season. 
                    </p>
                    <p>
                        An exciting advancement for the Elite 12 division for this season was the addition of a short program. Having both a short and free program put the Elite 12 division alongside the junior and senior levels, the only levels that represented Team USA for synchronized skating in the 2021-22 season. Another important step for Elite 12 was the commitment from a second U.S. team to compete in the division. The Crystallettes announced the creation of their Elite 12 team in the summer of 2022, helping the division move from an exhibition to a competition.
                    </p>
                    <p>
                        At the Boston Synchronized Skating Classic held in November 2022, in Norwood, Massachusetts, both Crystallettes Elite and Hayden Select achieved a qualifying score and were named Team USA for the 2022-23 season. This marked the first time in U.S. Figure Skating history that the Elite 12 division was a part of Team USA. Crystallettes Elite and Hayden Select also became the first Elite 12 teams to represent the United States at a challenger series event when they attended the Mozart Cup in Salzburg, Austria, in January 2023. To cap off the season, both teams competed at the 2023 U.S. Synchronized Skating Championships in Peoria, Illinois, which was the first time the Elite 12 division was included as a competition at this event. Hayden Select went on to win the event, becoming the first Elite 12 national champions.
                    </p>
                    <p>
                    Looking back on this year, I remember the feelings of uncertainty at the start of the season. We were unsure if we would be able to compete at the National Championships, let alone represent Team USA abroad. However, we stayed true to our collective goal of pushing synchronized skating toward a new future. I feel very honored to be a part of Hayden Select and to be able to make history with my teammates every single day. We have helped create a new avenue for synchronized skating as it vyes for a spot in the Olympic Games. Not only does Elite 12 accommodate the capacity issues at the Olympic Village, but it also increases the creativity and athleticism necessary for synchronized skating. Elite 12 teams compete in the same rinks as 16-person teams, meaning we do not naturally cover the same amount of ice. This has pushed us to increase our speed and has changed the way we choreograph our programs. We have more freedom because we do not have to account for as many skaters as a traditional senior team. We have been able to create more innovative and exciting transitions this season and plan to continue to push the boundaries of synchronized skating in the coming seasons.
                    </p>
                    <div className="section">
                        <img id="image3" src={Medals}
                            alt="All campers gather behind sitting coaches" />
                    </div>
                    <p>
                        Each year, the Elite 12 division expands and conquers new milestones. From being named to Team USA for the first time, to becoming the first Elite 12 national champions, I am grateful to be a part of this history-making journey. It has not been easy, but knowing that I am helping inspire the next generation of synchronized skaters and pushing the sport I love toward the Olympics makes it all worth it.
                    </p>
                    <h5><br />Love, <br /> Haley Weilbacher</h5>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Elite12Article;