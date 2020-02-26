import React, { Component } from 'react';
import { Provider } from "react-redux";
import PropTypes from 'prop-types';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import store from './store/configureStore';
import './App.css'
import {Router} from 'react-router-dom';

import history from "./history"
import Routes from './routes';
class App extends Component {

    static defaultProps = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };

  render = () =>  (
      <div>
        <Provider store={store}>
            <Router history={history}>
                    <div>
                        <Routes />
                    </div>
            </Router>
        </Provider>
    </div>

  )
}

export default App;