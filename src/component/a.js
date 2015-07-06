import React, { Component } from 'react'
import { Link } from 'react-router'

export default class A extends Component {
	static willTransitionTo(transition, params, query) {
		console.log(transition, params, query, 'transition to')
	}
	static willTransitionFrom(transition, component) {
		console.log(transition, component, 'transition from')
	}
	render() {
		return (<div className="page active">
					<h2>name: a</h2>
					<ul>
						<li><Link to="aa">a</Link></li>
						<li><Link to="bb">b</Link></li>
						<li><Link to="cc">c</Link></li>
						<li><Link to="dd">d</Link></li>
						<li><Link to="home">back to home</Link></li>
					</ul>
					<div>{JSON.stringify(this.props)}</div>
				</div>)
	}
}