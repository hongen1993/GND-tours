import "./StoriesSection.scss"
import { useState } from "react"

import sierraNevadaVideo from "../../assets/images/Alhambra/alhambra-video.mp4"
import sierraNevadaVideoB from "../../assets/images/Alhambra/alhambra-video.webm"

import sierraNevadaVideo2 from "../../assets/images/Alhambra/alhambra-video-sm.mp4"
import sierraNevadaVideoB2 from "../../assets/images/Alhambra/alhambra-video-sm.webm"

import profile1 from "../../assets/images/Stories/profile-1.png"
import profile2 from "../../assets/images/Stories/profile-2.jpg"
import profile3 from "../../assets/images/Stories/profile-3.png"
import profile4 from "../../assets/images/Stories/profile-4.jpg"
import profile5 from "../../assets/images/Stories/profile-5.png"
import profile6 from "../../assets/images/Stories/profile-6.png"
import profile7 from "../../assets/images/Stories/profile-7.jpg"
import profile8 from "../../assets/images/Stories/profile-8.png"


import Heading from "../../components/Heading/Heading"
import RowGroup from "../../components/RowGroup/RowGroup"

const StoriesSection = () => {

    const sectionTitle = 'We make people genuinely happy'

    const name1 = 'Mary Brown'
    const name2 = 'Jack Wilson'
    const name3 = 'Gina Hill'
    const name4 = 'Petter Sneddon'
    const name5 = 'Hitesh Pindoria'
    const name6 = 'Jessica Myers'
    const name7 = 'Hiren Joshi'
    const name8 = 'Moussa Gergaud'

    const storyTitle1 = 'Excellent experience with GND tour'
    const storyTitle2 = 'Recommended 100% best tour of all!'
    const storyTitle3 = 'Very luxury overall, incredible tour, it was perfect'
    const storyTitle4 = 'It was so nice, my friends and i will repeat 100%'
    const storyTitle5 = 'I had the best week ever with my family'
    const storyTitle6 = 'Choosed GND Tours and exceed our expectations'
    const storyTitle7 = 'Perfect, next time we will book the Sierra Nevada Tour!'
    const storyTitle8 = 'Incredible week at Castril guides where very friendly!'

    const story1 = 'Our 3 Days tour (Sierra de Castril) was excellent experience. Everything was just Perfect. I would highly recommend to everyone. The guide Mr Hong-en was a Highlight of the tour. He is just amazing he entertained us with jokes and songs during the journey and we just couldn"t stop laughing. If anyone is looking to plan their tours then GND tour is the answer they know their job well'
    const story2 = 'GND Tours was absolutely amazing! Booking the tour was very seamless and the whole experience was beyond by family and I expectations. Everything was done in a timely manner and didn"t have any issues at all. The bus, tour guides, hotels and everything was great. I 100% recommend using this team if you are looking to schedule a tour. Thank you again GND Tours!'
    const story3 = 'Highly recommend GND Tours. The stay, food, comfort was brilliant and definitely value for money. The tour guide was very knowledgeable and we got to see some really good places in Granada. Overall experience was amazing. We will come back for another tour with GND Tours for sure.'
    const story4 = 'Just returned from Granada. I have to say they were excellent. They were all very good at their jobs. The tour guide had information about Alhambra on the tips of his fingers and was able to answer any questions thrown at him. The itenerary was good and we saw all the main points. The staff were all polite, helpful and friendly. Had a great time. Will certainly travel with them again'
    const story5 = 'We had a fabulous trip to Sierra Nevada with GND Tour and we had an excellent time there. The hotel services was very good. My wife is very happy because this is only Tour who provide the best hotel and food. My family and me would like to thanks GND Tour. Lastly; I would like to recommend my friends and family to join with GND tours. Thank you very much from Kirit Mehta and Family'
    const story6 = 'Thanks to GND Tours. Overall the trip was excellent with good hotels and good food. Our Tour Guide, Mr. Hong-en was amazing. Our entire trip went superb with laughter and his comic jokes and songs. Jessica & Nina Meyers'
    const story7 = 'We just finished “Alhambra Tour” with GND and had a blast! Our guide and driver were both exceptional. Everything went smoothly, the information presented and the stops were exactly what we were interested in. This was such an exceptional experience we are already planning our next tour with them. I highly recommend this company'
    const story8 = 'GND Tours was really helpful in assisting me with planning my trip to Granada. I was travelling on my own, and they were great in executing the perfect itinerary that suited my needs. Thanks to the folks at GND Tours for making my time in Granada a memorable one!'

    const buttonBText = 'Show more stories '

    const [showIndex, setShowIndex] = useState(0)

    const handleClick = () => {
        showIndex < 3 ? setShowIndex(showIndex + 1) : setShowIndex(0)
    }

    return (
        <section className="section-stories" id="section-stories">
            <div className="bg-video" >
                <video className="bg-video__content" autoPlay muted loop >
                    <source src={sierraNevadaVideo}
                        srcset={`${sierraNevadaVideo2} 300w, ${sierraNevadaVideoB2} 800w`} type="video/mp4" />
                    <source src={sierraNevadaVideoB}
                        srcset={`${sierraNevadaVideoB2} 300w, ${sierraNevadaVideoB} 800w`} type="video/webm" />
                    Your browser is not supported!
                </video >
            </div >
            <div className="u-center-text u-margin-bottom-big">
                <Heading HeadingNum={'h2'} headingClass={'secondary'} children={sectionTitle} />
            </div >
            <RowGroup
                handleClass={showIndex} index={0} profileA={profile1} nameA={name1} storyTitleA={storyTitle1} storyA={story1}
                profileB={profile2} nameB={name2} storyTitleB={storyTitle2} storyB={story2}
            />
            <RowGroup
                handleClass={showIndex} index={1} profileA={profile3} imageAlt={name3} nameA={name3} storyTitleA={storyTitle3} storyA={story3}
                profileB={profile4} imageAltB={name4} nameB={name4} storyTitleB={storyTitle4} storyB={story4}
            />
            <RowGroup
                handleClass={showIndex} index={2} profileA={profile5} imageAlt={name5} nameA={name5} storyTitleA={storyTitle5} storyA={story5}
                profileB={profile6} imageAltB={name6} nameB={name6} storyTitleB={storyTitle6} storyB={story6}
            />
            <RowGroup
                handleClass={showIndex} index={3} profileA={profile7} imageAlt={name7} nameA={name7} storyTitleA={storyTitle7} storyA={story7}
                profileB={profile8} imageAltB={name8} nameB={name8} storyTitleB={storyTitle8} storyB={story8}
            />
            <div className="u-center-text .u-margin-top-huge" >
                <button onClick={handleClick} className="btn-next">{buttonBText}&rarr;</button>
            </div >
        </section >
    )
}

export default StoriesSection