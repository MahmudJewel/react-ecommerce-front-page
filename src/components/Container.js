// combine page 
import React from "react";
import logo from '../logo.svg';

import Sub_Index from "./sub-index";
import Card from "./card";

class Container extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {/* sub index  */}
            <div className="col-md-2 border border-primary">
            <Sub_Index />
            </div>

            {/* card on body  */}
            <div className="col-md-10 border border-success ms-auto py-3 d-flex justify-content-center">
            <Card />
            <Card />
            <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Container;
