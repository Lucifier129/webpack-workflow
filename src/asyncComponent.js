import React, { Component } from 'react'
import Loading from './component/loading'

export default (request, Loading = Loading) => {
	return class ComponentLoader extends Component {
		constructor() {
			super()
			this.state = {
				Component: null
			}
		}
		componentDidMount() {
			request((Component) => {
				this.setState({
					Component: Component
				})
			})
		}
		render() {
			let Component = this.state.Component
			return Component ? <Component {...this.props} /> : <Loading />
		}
	}
}