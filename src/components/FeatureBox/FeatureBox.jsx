import "./FeatureBox.scss"
import Heading from "../Heading/Heading"

const FeatureBox = ({ icon, title, text }) => {
    return (
        <div className="feature-box">
            {icon}
            <Heading HeadingNum={'h3'} headingClass={'tertiary u-margin-bottom-small'}>{title}</Heading>
            <p className="feature-box__text ">
                {text}
            </p>
        </div>
    )
}

export default FeatureBox