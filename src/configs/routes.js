import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App'

const routes = () => {
	return (
		<Router>
			<Route exact path="/" component={App} />
		</Router>
	)
}

export default routes

