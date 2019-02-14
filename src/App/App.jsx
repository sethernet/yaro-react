import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from '../components';
import { Home } from '../Home';
import { Login } from '../Login';
import { Practices } from '../Practices';


class App extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router>
                            <div>
                                <PrivateRoute exact path="/" component={Home} />
                                <PrivateRoute exact path="/practices" component={Practices} />
                                <Route path="/login" component={Login} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export { App }; 