import React from 'react'
import { Route, DefaultRoute, NotFoundRoute, HashLocation, run } from 'react-router'
import asyncComponent from './asyncComponent'

import Container from './container'
import Home from './home'
import NotFound from './notfound'
import A from 'bundle?lazy&name=a!./a'
import B from 'bundle?lazy&name=b!./b'
import C from 'bundle?lazy&name=c!./c'
import D from 'bundle?lazy&name=d!./d'

let routes = (
  
)


run(routes, HashLocation, (Root, state) => {
  React.render(<Root/>, document.getElementById('container'));
})

export default class App {
	constructor(config = {}) {
		this.config = config
	}
	getRoutes() {
		let routes = (
			)
	}
}