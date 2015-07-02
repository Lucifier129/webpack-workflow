import React, { Component } from 'react'
import { Loading } from 'component'

export default (request, PlaceHoder = Loading) => {
	if (Component.isPrototypeOf(request)) {
		return request
	}
	return class ComponentLoader extends Component {
		constructor() {
			super()
			this.state = {
				AsyncComponent: null
			}
		}
		componentDidMount() {
			request((AsyncComponent) => {
				this.setState({
					AsyncComponent: AsyncComponent
				})
			})
		}
		render() {
			let AsyncComponent = this.state.AsyncComponent
			return AsyncComponent ? <AsyncComponent {...this.props} /> : <PlaceHoder />
		}
	}
}