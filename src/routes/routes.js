import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../pages/MainPage/index'

const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="" component={MainPage} />
            </Switch>
        </>
    )
}

export default Routes;