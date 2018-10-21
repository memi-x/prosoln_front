import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import Routes from './routes/index';

class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </div>
      </Fragment>
    );
  }
}

export default App;
