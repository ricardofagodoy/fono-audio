import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../components/app/App'
import FinoGrosso from '../components/atividades/FinoGrosso'

const Routes = () => (
    <Router>
        <Route exact path="/" component={App}/>
        <Route exact path="/finogrosso" component={FinoGrosso} />
  </Router>
)

export default Routes