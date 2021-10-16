//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Navbar, Jumbotron, Tarjeta, Footer } from "./component/home.jsx";

function App() {
	return (
		<>
			<Navbar />
			<div className="container w-90">
				<Jumbotron />
				<div className="d-flex justify-content-between mx-5">
					<Tarjeta imgUrl="https://picsum.photos/id/203/500/325" />
					<Tarjeta imgUrl="https://picsum.photos/id/1003/500/325" />
					<Tarjeta imgUrl="https://picsum.photos/id/200/500/325" />
					<Tarjeta imgUrl="https://picsum.photos/id/143/500/325" />
				</div>
			</div>
			<Footer />
		</>
	);
}

//render your react application

ReactDOM.render(<App />, document.querySelector("#app"));
