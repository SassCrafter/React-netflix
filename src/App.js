import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages/";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks/";

function App() {
    const user = useAuthListener();
    console.log(user);
    return (
        <Router>
            <IsUserRedirect
                exact
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_IN}
            >
                <Signin />
            </IsUserRedirect>
            <IsUserRedirect
                exact
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_UP}
            >
                <Signup />
            </IsUserRedirect>
            <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
                <Browse />
            </ProtectedRoute>

            <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
                exact
                path={ROUTES.HOME}
            >
                <Home />
            </IsUserRedirect>
        </Router>
    );
}

export default App;
