import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Dashboard from '../components/Dashboard';
import Restaurant from '../components/Restaurant';
import SearchPage from '../components/searchPage/SearchPage';
import PaymentPage from '../components/payment/Payment';

export default function Routes() {
    const { authToken } = useSelector((state) => state.auth);
    return (
        <div>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={(props) =>
                        authToken === '' ? (
                            <Home {...props}></Home>
                        ) : (
                            <Redirect to="/lets-eat" />
                        )
                    }
                ></Route>
                <Route
                    path="/signup"
                    render={() =>
                        authToken === '' ? (
                            <Signup />
                        ) : (
                            <Redirect to="/lets-eat" />
                        )
                    }
                ></Route>
                <Route
                    path="/login"
                    render={() =>
                        authToken === '' ? (
                            <Login />
                        ) : (
                            <Redirect to="/lets-eat" />
                        )
                    }
                ></Route>
                <Route
                    path="/lets-eat"
                    render={() =>
                        authToken !== '' ? (
                            <Dashboard />
                        ) : (
                            <Redirect to="/login" />
                        )
                    }
                ></Route>
                <Route
                    path="/restaurant"
                    render={() => <Restaurant></Restaurant>}
                ></Route>
                <Route
                    path="/search"
                    render={() => <SearchPage></SearchPage>}
                ></Route>
                <Route exact path="/checkout" render={() => <PaymentPage />} />
            </Switch>
        </div>
    );
}
