import "./FooterItem.scss"

import { HashLink } from 'react-router-hash-link';

const FooterItem = ({ listLink, listText }) => {

    return (
        <li class="footer__item"><HashLink to={listLink} class="footer__link">{listText}</HashLink></li>
    )
}

export default FooterItem