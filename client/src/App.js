import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  //old
  // const App = ({ checkUserSession, currentUser }) => {

  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
  // const isHidden = useSelector((state) => state.cart.hidden);
  // console.log("isHidden", isHidden);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   checkUserSession: () => dispatch(checkUserSession()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default App;
