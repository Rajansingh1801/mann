import React from "react";
import Home from "./pages/home/home";
import Profile from "./pages/profille/profile";
import { Route, Switch } from "react-router-dom";
import Login_page from "./pages/login-page/login_page";
import Reg from "./pages/regs_page/reg";

function Router() {
    return (
        <>
            <Switch>
                {
                    <>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login_page} />
                        <Route path="/reg" exact component={Reg} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/profile" exact component={Profile} />
                        {/* <Route path="/share" exact component={Share} /> */}
                    </>
                }
            </Switch>
        </>
    );
}

export default Router;
