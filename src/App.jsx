import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Button } from './components';

import SingleComponents from './layouts/examples/SingleComponents';

// import { circleMenuRandomData1, circleMenuRandomData2 } from './data/circleMenuRandomData';

// import castleImg from './data/pictures/castle.png';

class App extends React.Component {
  render() {
    return (
    <Router>
      <div>
        <Button><Link to="/single-components" >Single Components example</Link></Button>

        <Route path="/single-components" component={SingleComponents} />
      </div>
    </Router>
    )
  }
}

export default App;
