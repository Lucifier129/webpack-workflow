import React, { Component } from 'react'
import { Link } from 'react-router'

export default class A extends Component {
	render() {
		return (<div className="page active">
					<h2>name: c</h2>
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