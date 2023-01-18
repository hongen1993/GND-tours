import "./FooterItem.scss"

import { HashLink } from 'react-router-hash-link';

const FooterItem = ({ listLink, listText }) => {

    return (
        <li className="footer__item"><HashLink to={listLink} className="footer__link">{listText}</HashLink></li>
    )
}

export default FooterItem