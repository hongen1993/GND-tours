import { FaDiagnoses } from 'react-icons/fa'
import { GiDiamondTrophy } from 'react-icons/gi'
import { Ri24HoursFill } from 'react-icons/ri'
import { TbFileCertificate } from 'react-icons/tb'

import FeatureBox from "../../components/FeatureBox/FeatureBox"

const Features = () => {

    const iconA = <FaDiagnoses className="feature-box__icon" />
    const iconB = <GiDiamondTrophy className="feature-box__icon" />
    const iconC = <Ri24HoursFill className="feature-box__icon" />
    const iconD = <TbFileCertificate className="feature-box__icon" />

    const titleA = 'Profesional'
    const titleB = 'Exclusive'
    const titleC = 'Unique support'
    const titleD = 'Certified'

    const textA = 'Our guides have +15 years of experience in the tourism area, they know everything you would like to know!'
    const textB = 'We only work with luxury hotels that are also best placed. We are here to make your holidays perfect!'
    const textC = 'We have 24/7 assistance, we truly care about our customers needs. Feel free to contact us!'
    const textD = 'We are certified the number 1 tour in Granada, we are the one and only tour that has 5 stars in all reviews.'

    return (
        <section className="section-features" id="section-features">
            <div className="row">
                <div className="col-1-of-4">
                    <FeatureBox icon={iconA} title={titleA} text={textA} />
                </div>
                <div className="col-1-of-4">
                    <FeatureBox icon={iconB} title={titleB} text={textB} />
                </div>
                <div className="col-1-of-4">
                    <FeatureBox icon={iconC} title={titleC} text={textC} />
                </div>
                <div className="col-1-of-4">
                    <FeatureBox icon={iconD} title={titleD} text={textD} />
                </div>
            </div>
        </section >
    )
}

export default Features