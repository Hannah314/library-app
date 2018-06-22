import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./components/layoutComponents/Layout";
import SignIn from "./components/accountComponents/SignIn";
import NotFound from "./components/layoutComponents/NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/404" component={NotFound} />
            <Route path="/" component={Layout} />
        </Switch>
    </BrowserRouter>
)

export default Router;