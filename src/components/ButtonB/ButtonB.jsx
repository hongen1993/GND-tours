import "./ButtonB.scss"

import { Link } from "react-router-dom";

const ButtonB = ({ link, children }) => {
    return (
        <Link to={link} className="btn-text" >{children}&rarr;</Link >
    )
}

export default ButtonB