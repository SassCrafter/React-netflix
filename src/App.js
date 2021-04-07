import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { Home, Browse, Signin, Signup } from './pages/'
import { IsUserRedirect } from './helpers/routes'

function App() {
  const user = {};
  return (
    <Router>
        <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
            <Signin />
        </IsUserRedirect>
    	<IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
            <Signup />
        </IsUserRedirect>
    	<Route exact path={ROUTES.BROWSE} >
    		<Browse />
    	</Route>
    	<Route exact path={ROUTES.HOME}>
    		<Home />
    	</Route>
    </Router>
  );
}

export default App;
