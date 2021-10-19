//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Navbar, Jumbotron, Tarjeta, Footer } from "./component/home.jsx";

// Armo el HTML con los compornentes de home.jsx

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="tarjetas d-flex justify-content-between flex-wrap">
					<Tarjeta
						imgUrl="https://picsum.photos/id/203/500/325"
						titulo="Titulo1"
						descripcion="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
					/>
					<Tarjeta
						imgUrl="https://picsum.photos/id/1003/500/325"
						titulo="Titulo2"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
					/>
					<Tarjeta
						imgUrl="https://picsum.photos/id/200/500/325"
						titulo="Titulo3"
						descripcion="Etiam erat velit scelerisque in dictum non consectetur a erat"
					/>
					<Tarjeta
						imgUrl="https://picsum.photos/id/143/500/325"
						titulo="Titulo4"
						descripcion="Faucibus nisl tincidunt eget nullam non. Scelerisque purus"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
}

//render your react application

ReactDOM.render(<App />, document.querySelector("#app"));
