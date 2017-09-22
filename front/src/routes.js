//dependencias
import React from "react";
import {Route, Switch} from "react-router-dom";

//Components

import App from "./components/App";

import P404 from "./components/Page404";
import home from "./components/Home"

import follow from "./components/Followers";
import recent from "./components/Recent"


const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/followers" component={follow}/>
            <Route path="/Recent" component={recent}/>
            <Route path="/" component={home}/>
            <Route component={P404}/>

        </Switch>
    </App>

export default AppRoutes;