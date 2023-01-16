import "./Paragraph.scss"

const Paragraph = ({ children, paragraphText }) => {
    return (
        <p className="paragraph">{paragraphText}</p>
    )
}

export default Paragraph