import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

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
                <li className="navbar__item"><Link to="/" className="navbar__link">Home</Link></li>
                <li className="navbar__item"><Link to="/profile" className="navbar__link">Profile</Link></li>
                <li className="navbar__item"><Link to="#section-about" className="navbar__link">About GND Tours</Link></li>
                <li className="navbar__item"><Link to="#section-tours" className="navbar__link">Our tours</Link></li>
                <li className="navbar__item"><Link to="#section-book" className="navbar__link">Book now</Link></li>
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

            <nav className="navigation__nav">
              <ul className="navbar__list">
                <li className="navbar__item"><Link to="/" className="navbar__link">Home</Link></li>
                <li className="navbar__item"><Link to="/login" className="navbar__link">Login</Link></li>
                <li className="navbar__item"><Link to="#section-about" className="navbar__link">About GND Tours</Link></li>
                <li className="navbar__item"><Link to="#section-tours" className="navbar__link">Our tours</Link></li>
                <li className="navbar__item"><Link to="#section-book" className="navbar__link">Book now</Link></li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
