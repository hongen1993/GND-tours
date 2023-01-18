import "./RowGroup.scss"

import Story from "../../components/Story/Story"

const RowGroup = ({ handleClass, index, profileA, profileB, nameA, nameB, storyTitleA, storyTitleB, storyA, storyB }) => {
    const showIndex = handleClass
    return (
        <div className={`row-group ${showIndex === index ? "active" : "inactive"} `} >
            <div className="row">
                <Story profile={profileA} imageAlt={nameA} name={nameA} storyTitle={storyTitleA} story={storyA} />
            </div >
            <div className="row">
                <Story profile={profileB} imageAlt={nameB} name={nameB} storyTitle={storyTitleB} story={storyB} />
            </div >
        </div>
    )
}

export default RowGroup