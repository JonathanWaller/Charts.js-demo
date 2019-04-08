import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home/Home';
import Charts from './components/Charts/Charts';
import BigDoughnut from './components/Charts/BigDoughnut';
import Chart2 from './components/Charts/BigDoughnut';


export default (
    <Switch>
        <Route exact path='/' component = { Home } />
        {/* <Route path = '/charts' component = { Charts } /> */}
        <Route 
            path='/charts'
            render = { () => (
                <div>
                    <Charts />
                    <div>
                        <Link to ='/charts/BigDoughnut'>Big Doughnut</Link>
                        <Link to ='/charts/Chart2'>Chart 2</Link>
                    </div>
                    <Switch>
                        <Route path='/charts' exact component={BigDoughnut} />
                        <Route path='/charts/chart2' exact component={Chart2} />
                    </Switch>
                </div>
            )}
        / >
    </Switch>
)