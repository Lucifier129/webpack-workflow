import React from 'react'
import asyncComponent from './asyncComponent'
import ReactRouter, { Route, DefaultRoute, NotFoundRoute, HashLocation, run } from 'react-router'
import { NotFound, Container, Home, A, B, C, D } from 'component'

let routes = (
  <Route path="/" handler={Container}>
    <DefaultRoute name="home" handler={asyncComponent(Home)}/>
    <Route name="aa" path="a" handler={asyncComponent(A)}/>
    <Route name="bb" path="b" handler={asyncComponent(B)}/>
    <Route name="cc" path="c" handler={asyncComponent(C)}/>
    <Route name="dd" path="d" handler={asyncComponent(D)}/>
    <NotFoundRoute handler={NotFound} />
  </Route>
)


window.router = run(routes, HashLocation, (Root, state) => {
	React.render(<Root />, document.getElementById('container'))
})
window.routes = routes
window.ReactRouter = ReactRouter