import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Reservas from './pages/Reservas';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact Component={Home} />
            <Route path="/reservas" Component={Reservas} />
        </Switch>
    );
}