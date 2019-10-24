import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Form from './components/Form';
import FormSubmit from './components/FormSubmit';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route path="/submit">
              <FormSubmit />
            </Route>
            <Route path="/">
              <Form />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
