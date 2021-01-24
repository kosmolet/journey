import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { authContext } from "../../store/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(authContext);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return auth.data ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
