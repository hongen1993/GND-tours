import "./StoriesSection.scss"
import sierraNevadaVideo from "../../assets/images/Sierra/sierra-nevada-video.mp4"
import sierraNevadaVideoB from "../../assets/images/Sierra/sierra-nevada-video.webm"

const StoriesSection = () => {
    return (
        <section className="section-stories" id="section-stories" >
            <div className="bg-video" >
                <video className="bg-video__content" autoPlay muted loop >
                    <source src={sierraNevadaVideo} type="video/mp4" />
                    <source src={sierraNevadaVideoB} type="video/webm" />
                    Your browser is not supported!
                </video >
            </div >
            <div className="u-center-text u-margin-bottom-big" >
                <h2 className="heading-secondary" >
                    We make people genuinely happy
                </h2 >
            </div >
            <div className="row" >
                <div className="story" >
                    <figure className="story__shape" >
                        <img src="img/nat-8.jpg" alt="Person on a tour" className="story__img" />
                        <figcaption className="story__caption" >
                            Mary Smith
                        </figcaption >
                    </figure >
                    <div className="story__text" >
                        <h3 className="heading-tertiary u-margin-bottom-small" > I had the best week ever with my family</h3 >
                        <p>
                            Logiat ipsum impedit nulla molestias quod expedita excepturi quisquam perspiciatis ullam
                            maxime, consectetur iusto nulla molestias quod expedita excepturi quisquam perspiciatis
                            ullam
                            maxime, consectetur iusto.
                        </p>
                    </div >
                </div >
            </div >
            <div className="row" >
                <div className="story" >
                    <figure className="story__shape" >
                        <img src="img/nat-9.jpg" alt="Person on a tour" className="story__img" />
                        <figcaption className="story__caption" >
                            Jack Wilson
                        </figcaption >
                    </figure >
                    <div className="story__text" >
                        <h3 className="heading-tertiary u-margin-bottom-small" > WOW! My life is completely different right
                            now</h3 >
                        <p>
                            Logiat ipsum impedit nulla molestias quod expedita excepturi quisquam perspiciatis ullam
                            maxime, consectetur iusto nulla molestias quod expedita excepturi quisquam perspiciatis
                            ullam
                            maxime, consectetur iusto.
                        </p>
                    </div >
                </div >
            </div >
            <div className="u-center-text .u-margin-top-huge" >
                <a href="#" className="btn-text" > Read all stories & rarr;</a >
            </div >
        </section >
    )
}

export default StoriesSection