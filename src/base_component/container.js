import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

export default class Viewport extends Component {
  render() {
    return (
    	<div className="main">
    		<RouteHandler {...this.props} />
    	</div>
    	)
  }
}
