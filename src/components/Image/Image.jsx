import "./Image.scss"

const Image = ({ photo, alt, number }) => {
    return (
        <img
            src={photo}
            sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 18.75em" alt={alt}
            className={`composition__photo composition__photo--p${number}`} />
    )
}
export default Image