import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { PrivacyPolicy, Admin } from 'lyra-library';
import Home from '../home/Home';
import Contact from '../Contact';
import Playground from '../Playground';
import ResultNavigation from '../result/Navigation';


const Navigation = () => (
    <div>
        <Switch>
            <Route path="/playground" component={Playground} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy" component={PrivacyPolicy} />
            <Route path="/admin" component={Admin} />
            <Route path="/r/:token/" component={ResultNavigation} />
            <Route path="/" component={Home} />
        </Switch>
    </div>
);
export default withRouter(Navigation);
