import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../components/home/Home'

/** Atividades **/
import FinoGrosso from '../components/atividades/finogrosso/FinoGrosso'

const Routes = () => (
    <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/finogrosso" component={FinoGrosso} />
  </Router>
)

export default Routes