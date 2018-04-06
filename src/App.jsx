import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Button } from './components';

import SingleComponents from './layouts/examples/SingleComponents';
import MapExample from './layouts/examples/Map';

const App = () => (
  <Router>
    <div>
      <Link to="/" ><Button>Single Components example</Button></Link>
      <Link to="/map-example" ><Button>Map example</Button></Link>

      <Route exact path="/" component={SingleComponents} />
      <Route path="/map-example" component={MapExample} />
    </div>
  </Router>
)

export default App;
