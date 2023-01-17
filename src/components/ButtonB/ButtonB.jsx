import "./ButtonB.scss"

import { HashLink } from 'react-router-hash-link';

const ButtonB = ({ link, children }) => {
    return (
        <HashLink to={link} className="btn-text" >{children}&rarr;</HashLink >
    )
}

export default ButtonB