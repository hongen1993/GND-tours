import "./AboutTours.scss"

import photoA from "../../assets/images/Alhambra/alhambra-3.jpg"
import photoB from "../../assets/images/Bosque/bosque-1.jpeg"
import photoC from "../../assets/images/Sierra/sierra-nevada-1.jpg"



const AboutTours = () => {
    return (
        <section className="section-about" id="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    The beautiful city that you will not regret visiting
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">Discover its history</h3>
                    <p className="paragraph">
                        {/* Increasingly we believe the world needs more meaningful,
                        real-life connections between curious travellers keen to explore the world in a more responsible way.
                        That is why we have intensively curated a collection of premium small-group trips as an invitation to meet and connect */}
                        A land with a long and ancient history, has a rich artistic and cultural heritage left behind by the Muslims and Christians.
                        The wide variety of artistic styles and the rich traditions are one of its biggest attractions.
                    </p>
                    <h3 className="heading-tertiary u-margin-bottom-small">You will fall in love with its natural landscapes</h3>
                    <p className="paragraph">
                        Is home to a few prized natural parks where you can see winters beauty, the snow in Sierra Nevada or
                        enjoy challenging trails in Sierra de Castril, no doubt they deserve to be in any traveler's bucket list.
                    </p>
                    <a href="#" className="btn-text">Learn more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img
                            src={photoB}
                            // srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                            sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 18.75em" alt="Bosque"
                            className="composition__photo composition__photo--p1" />

                        <img
                            src={photoA}
                            // srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                            sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 18.75em" alt="Sierra nevada"
                            className="composition__photo composition__photo--p2" />

                        <img
                            src={photoC}
                            // srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                            sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 18.75em" alt="Alhambra"
                            className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTours