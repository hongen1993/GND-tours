import "./Features.scss"
import { FaDiagnoses } from 'react-icons/fa'
import { GiDiamondTrophy } from 'react-icons/gi'
import { Ri24HoursFill } from 'react-icons/ri'
import { TbFileCertificate } from 'react-icons/tb'



const Features = () => {
    return (

        <section className="section-features" id="section-features">
            <div className="row">
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <FaDiagnoses className="feature-box__icon" />
                        <h3 className="heading-tertiary u-margin-bottom-small">Professional</h3>
                        <p className="feature-box__text ">
                            Our guides have +15 years of experience in the tourism area, they know everything you would like to know!
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <GiDiamondTrophy className="feature-box__icon" />
                        <h3 className="heading-tertiary u-margin-bottom-small">Exclusive</h3>
                        <p className="feature-box__text ">
                            We only work with luxury hotels that are also best placed. We are here to make your holidays perfect!
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <Ri24HoursFill className="feature-box__icon" />
                        <h3 className="heading-tertiary u-margin-bottom-small">Unique support</h3>
                        <p className="feature-box__text ">
                            We have 24/7 assistance, we truly care about our customers needs. Feel free to contact us!
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <TbFileCertificate className="feature-box__icon" />
                        <h3 className="heading-tertiary u-margin-bottom-small">Certified</h3>
                        <p className="feature-box__text ">
                            We are certified the number 1 tour in Granada, we are the one and only tour that has 5 stars in all reviews.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Features