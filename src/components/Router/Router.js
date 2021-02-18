import React from 'react';
import { Switch, Route} from 'react-router';
// import DashBoard from '../DashBoard';
// import LogIn from '../Login';
// import NavBar from '../NavBar';
import App from '../../App';
import DashBoard from '../DashBoard';


const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/dash' component={DashBoard} />
        </Switch>
    )
}
export default Router;