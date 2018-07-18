import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./components/layoutComponents/Layout";
import Login from "./components/accountComponents/Login";
import AddBookForm from "./components/adminComponents/addBookForm";
import NotFound from "./components/layoutComponents/NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/add-book" component={AddBookForm} />
            <Route exact path="/404" component={NotFound} />
            <Route path="/" component={Layout} />
        </Switch>
    </BrowserRouter>
)

export default Router;