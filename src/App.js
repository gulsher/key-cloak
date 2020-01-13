import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Secured from "./Secured";
import Manager from "./Manager";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 sidebar">
              <ul>
                <li>
                  <Link to="/" className="text-white">
                    public component
                  </Link>
                </li>
                <li>
                  <Link to="/secured" className="text-white">
                    secured component
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-10 right-bar">
              <Route exact path="/" component={Welcome} />
              <Route path="/secured" component={Secured} />
              <Route exact path="/manager" component={Manager} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
