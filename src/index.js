import React from "react";
import ReactDOM from "react-dom";
import { Router ,  } from "@reach/router";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.4.0";
import "assets/css/demo.css";
import "./assets/css/custom.css";

import AdminLayout from "layouts/Admin.js";
import Home from "./pages/Home";
import Nav from "./components/Navbars/nav";

const App = () => {
	return (
		<section>
			<Nav />
			<Router>
				<Home path="/" />
				<AdminLayout path="/admin" />
			</Router>
		</section>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
