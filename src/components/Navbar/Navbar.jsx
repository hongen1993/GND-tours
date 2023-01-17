import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import NavbarItem from "../NavbarItem/NavbarItem";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const listLink1 = '#section-header'
  const listLink2 = '#section-features'
  const listLink3 = '#section-tours'
  const listLink4 = '#section-stories'
  const listLink5 = '#section-stories'
  const listLink6 = '#section-stories'

  const listText1 = 'Home'
  const listText2 = 'About us'
  const listText3 = 'Tours'
  const listText4 = 'Stories'
  const listText5 = 'Privacy policy'
  const listText6 = 'Terms'

  return (
    <nav>
      {isLoggedIn && (
        <>
          <div className="navbar">
            <input type="checkbox" className="navbar__checkbox" id="navbar-toggle" />
            <label htmlFor="navbar-toggle" className="navbar__button">
              <span className="navbar__icon">&nbsp;</span>
            </label>

            <div className="navbar__background">&nbsp;</div>

            <nav className="navbar__nav">
              <ul className="navbar__list">
                <NavbarItem navLink={listLink1} children={listText1} />
                <NavbarItem navLink={listLink2} children={listText2} />
                <NavbarItem navLink={listLink3} children={listText3} />
                <NavbarItem navLink={listLink4} children={listText4} />
                <NavbarItem navLink={listLink5} children={listText5} />
                <NavbarItem navLink={listLink6} children={listText6} />
              </ul>
            </nav>
          </div>
          {/* <button onClick={logOutUser}>Logout</button>

          <Link to="/profile">
            <button>Profile</button>
            { <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> }
          </Link>

          <span>{user && user.name}</span> */}
        </>
      )}

      {!isLoggedIn && (
        <>
          <div className="navbar">
            <input type="checkbox" className="navbar__checkbox" id="navbar-toggle" />
            <label htmlFor="navbar-toggle" className="navbar__button">
              <span className="navbar__icon">&nbsp;</span>
            </label>

            <div className="navbar__background">&nbsp;</div>

            <nav className="navbar__nav">
              <ul className="navbar__list">
                <NavbarItem navLink={listLink1} children={listText1} />
                <NavbarItem navLink={listLink2} children={listText2} />
                <NavbarItem navLink={listLink3} children={listText3} />
                <NavbarItem navLink={listLink4} children={listText4} />
                <NavbarItem navLink={listLink5} children={listText5} />
                <NavbarItem navLink={listLink6} children={listText6} />
              </ul>
            </nav>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
