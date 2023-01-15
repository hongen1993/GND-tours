import "./AboutTours.scss"

import photoA from "../../assets/images/Alhambra/alhambra-5.jpg"
import photoB from "../../assets/images/Bosque/bosque-3.jpg"
import photoC from "../../assets/images/Sierra/sierra-nevada-2.jpg"



const AboutTours = () => {
    return (
        <section class="section-about" id="section-about">
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    The beautiful city that you will not regret visiting
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <h3 class="heading-tertiary u-margin-bottom-small">You will fall in love with its natural landscapes</h3>
                    <p class="paragraph">
                        Is home to a few prized natural parks that are deserving of any traveler’s bucket list
                    </p>

                    <h3 class="heading-tertiary u-margin-bottom-small">Discover its history</h3>
                    <p class="paragraph">
                        {/* Increasingly we believe the world needs more meaningful,
                        real-life connections between curious travellers keen to explore the world in a more responsible way.
                        That is why we have intensively curated a collection of premium small-group trips as an invitation to meet and connect */}
                        A land with a long and ancient history, has a rich artistic and cultural heritage left behind by the Muslims and Christians.
                        The wide variety of artistic styles, the high quality of the musical and theatrical legacy,
                        and the rich traditions that define its people, give culture an important place in the province being one of its biggest attractions.
                    </p>

                    <a href="#" class="btn-text">Learn more &rarr;</a>
                </div>
                <div class="col-1-of-2">
                    <div class="composition">
                        <img
                            src={photoB}
                            // srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                            sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 18.75em" alt="Bosque"
                            class="composition__photo composition__photo--p1" />

                        <img
                            src={photoC}
                            // srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                            sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 18.75em" alt="Sierra nevada"
                            class="composition__photo composition__photo--p2" />

                        <img
                            src={photoA}
                            // srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                            sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 18.75em" alt="Alhambra"
                            class="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTours