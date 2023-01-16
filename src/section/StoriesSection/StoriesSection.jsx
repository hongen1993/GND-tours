import "./StoriesSection.scss"

import sierraNevadaVideo from "../../assets/images/Alhambra/alhambra-video.mp4"
import sierraNevadaVideoB from "../../assets/images/Alhambra/alhambra-video.webm"

import profile1 from "../../assets/images/Stories/profile-1.png"
import profile2 from "../../assets/images/Stories/profile-2.jpg"

import Heading from "../../components/Heading/Heading"
import Story from "../../components/Story/Story"
import ButtonB from "../../components/ButtonB/ButtonB"

const StoriesSection = () => {

    const sectionTitle = 'We make people genuinely happy'

    const name1 = 'Mary Brown'
    const name2 = 'Jack Wilson'

    const storyTitle1 = 'Excellent experience with GND tour'
    const storyTitle2 = 'I had the best week ever with my family'

    const story1 = 'Our 3 Days tour (Sierra de Castril) was excellent experience. Everything was just Perfect. I would highly recommend to everyone. The guide Mr Hong-en was a Highlight of the tour. He is just amazing he entertained us with jokes and songs during the journey and we just couldn"t stop laughing. If anyone is looking to plan their tours then GND tour is the answer they know their job well'
    const story2 = 'GND Tours was absolutely amazing! Booking the tour was very seamless and the whole experience was beyond by family and I expectations. Everything was done in a timely manner and didn"t have any issues at all. The bus, tour guides, hotels and everything was great. I 100% recommend using this team if you are looking to schedule a tour. Thank you again GND Tours!'

    const buttonBText = 'Read all stories '

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
                <Heading HeadingNum={'h2'} headingClass={'secondary'} children={sectionTitle} />
            </div >
            <div className="row" >
                <Story profile={profile1} imageAlt={name1} name={name1} storyTitle={storyTitle1} story={story1} />
            </div >
            <div className="row" >
                <Story profile={profile2} imageAlt={name2} name={name2} storyTitle={storyTitle2} story={story2} />
            </div >
            <div className="u-center-text .u-margin-top-huge" >
                <ButtonB children={buttonBText}></ButtonB>
            </div >
        </section >
    )
}

export default StoriesSection