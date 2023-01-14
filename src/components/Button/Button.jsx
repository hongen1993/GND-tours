import "./Button.scss"

const Button = ({ children }) => {
    return (
        <a href="#section-tours" className="btn btn--white btn--animated">
            {children}
        </a>
    )
}

export default Button