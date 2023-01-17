import "./AboutToursSection.scss"

import Heading from "../../components/Heading/Heading"
import Paragraph from "../../components/Paragraph/Paragraph"
import Image from "../../components/Image/Image"

import photoA from "../../assets/images/Bosque/bosque-1.jpeg"
import photoB from "../../assets/images/Alhambra/alhambra-3.jpg"
import photoC from "../../assets/images/Sierra/sierra-nevada-1.jpg"

const AboutTours = () => {

    const sectionTitle = 'The beautiful city that you will not regret visiting'
    const colTitle = 'Discover the history behind'
    const colTitleB = 'You will fall in love with its natural landscapes'

    const paragraph1 =
        'A land with a long and ancient history, has a rich artistic and cultural heritage left behind by the Muslims and Christians.The wide variety of artistic styles and the rich traditions are one of its biggest attractions.'
    const paragraph2 =
        'Is home to a few prized natural parks where you can see winters beauty, the snow in Sierra Nevada or enjoy challenging trails in Sierra de Castril, no doubt they deserve to be in any traveler"s bucket list.'

    const buttonLink = 'https://www.lovegranada.com/granada/'
    const buttonBText = 'Learn more '

    const imageAAlt = 'Forest'
    const imageBAlt = 'Sierra nevada'
    const imageCAlt = 'Alhambra'

    return (
        <section className="section-about" id="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <Heading HeadingNum={'h2'} headingClass={'secondary'} children={sectionTitle} />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <Heading HeadingNum={'h3'} headingClass={"tertiary u-margin-bottom-small"} children={colTitle} />
                    <Paragraph paragraphText={paragraph1} />

                    <Heading HeadingNum={'h3'} headingClass={"tertiary u-margin-bottom-small"} children={colTitleB} />
                    <Paragraph paragraphText={paragraph2} />

                    <a className="btn-text" href={buttonLink} target="_blank" rel="noopener noreferrer">{buttonBText}&rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <Image photo={photoA} srcsetImage={''} alt={imageAAlt} number={'1'} />
                        <Image photo={photoB} srcsetImage={''} alt={imageBAlt} number={'2'} />
                        <Image photo={photoC} srcsetImage={''} alt={imageCAlt} number={'3'} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AboutTours