import "./Story.scss"
import Heading from "../Heading/Heading"

const Story = ({ profile, imageAlt, name, storyTitle, story }) => {
    return (
        <div className="story" >
            <figure className="story__shape" >

                <img src={profile} alt={imageAlt} className="story__img" />
                <figcaption className="story__caption" >{name}</figcaption >

            </figure >
            <div className="story__text" >

                <Heading HeadingNum={'h3'} headingClass={"tertiary u-margin-bottom-small"} children={storyTitle} />
                <p>{story}</p>
            </div >

        </div >
    )
}

export default Story