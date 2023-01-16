import "./Heading.scss"

const Heading = ({ HeadingNum, headingClass, children }) => {
    return (
        <HeadingNum className={`heading-${headingClass}`}>{children}</HeadingNum>
    )
}

export default Heading