import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrowLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart-context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrowLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            <div>Shop</div>
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              <div>Sign In</div>
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
