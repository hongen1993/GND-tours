import "./Button.scss"

import { Link } from "react-router-dom";

const Button = ({ link, color, children }) => {
    return (
        <Link href={link} className={`btn btn--${color} btn--animated`}>
            {children}
        </Link>
    )
}

export default Button