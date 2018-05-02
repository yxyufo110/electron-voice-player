import React, { PropTypes } from 'react';
import { Route } from 'react-router-dom';
import { observer } from 'mobx-react';

import Header from '../components/header/header';
import Works from './works';
import User from './user';
import Home from './home';

@observer class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/works" component={Works} />
          <Route path="/user" component={User} />
        </div>
      </div>
    );
  }
}

export default Main;
