import "./FeatureBox.scss"

const FeatureBox = ({ icon, title, text }) => {
    return (
        <div className="feature-box">
            {icon}
            <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
            <p className="feature-box__text ">
                {text}
            </p>
        </div>
    )
}

export default FeatureBox