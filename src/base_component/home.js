import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
	render() {
		return (<div>
					<h2>home</h2>
					<ul>
						<li><Link to="aa">a</Link></li>
						<li><Link to="bb">b</Link></li>
						<li><Link to="cc">c</Link></li>
						<li><Link to="dd">d</Link></li>
					</ul>
				</div>)
	}
}