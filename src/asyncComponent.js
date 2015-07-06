import React, { Component } from 'react'
import { Loading } from 'component'

export default (request, PlaceHoder = Loading) => {
	if (Component.isPrototypeOf(request)) {
		return request
	}
	let staticMethod = {}
	return class ComponentLoader extends Component {
		static willTransitionTo() {
			if (typeof staticMethod.willTransitionTo === 'function') {
				staticMethod.willTransitionTo.apply(this, arguments)
			}
		}
		static willTransitionFrom() {
			if (typeof staticMethod.willTransitionFrom === 'function') {
				staticMethod.willTransitionFrom.apply(this, arguments)
			}
		}
		constructor() {
			super()
			this.state = {
				AsyncComponent: null
			}
		}
		componentDidMount() {
			request((AsyncComponent) => {
				staticMethod.willTransitionTo = AsyncComponent.willTransitionTo
				staticMethod.willTransitionFrom = AsyncComponent.willTransitionFrom
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