import React, { Component } from 'react'
import { Route, DefaultRoute, NotFoundRoute, HistoryLocation, HashLocation } from 'react-router'

export default class Router extends Component {
	render() {
		let routes = this.props.routes
		return (<Route path="/" handler={Container}>
					<DefaultRoute name="home" handler={Home}/>
			    	<Route name="aa" path="a" handler={asyncComponent(A)}/>
			    	<Route name="bb" path="b" handler={asyncComponent(B)}/>
			    	<Route name="cc" path="c" handler={asyncComponent(C)}/>
			    	<Route name="dd" path="d" handler={asyncComponent(D)}/>
			    	<NotFoundRoute handler={NotFound} />
				</Route>)
	}
}