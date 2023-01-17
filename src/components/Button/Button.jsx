import "./Button.scss"

import { HashLink } from 'react-router-hash-link';

const Button = ({ link, color, children }) => {
    return (
        <HashLink to={link} className={`btn btn--${color} btn--animated`}>
            {children}
        </HashLink>
    )
}

export default Button