//Importo React y Proptypes
import React from "react";
import PropTypes from "prop-types";

//Creo el menú de navegación
export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a
					className="navbar-brand d-flex justify-content-start"
					href="#">
					Bootstrap start
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse d-md-flex justify-content-end"
					id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Service
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

//Creo el Jumbotron

export const Jumbotron = () => {
	return (
		<div className="jumbotron bg-light">
			<h1 className="display-4">A warm welcome!</h1>
			<p className="lead text-justify">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Tempora aperiam rerum adipisci non voluptates ratione deleniti
				inventore quis voluptas reprehenderit animi saepe eaque
				necessitatibus, itaque expedita vitae totam neque ad.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to Action!
				</a>
			</p>
		</div>
	);
};

//Creo el modelo de tarjetas

export const Tarjeta = ({ imgUrl, titulo, descripcion }) => {
	return (
		<div className="card col-2 mb-5">
			<img className="card-img-top" src={imgUrl} alt="Card image cap" />
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{titulo}</h5>
				<p className="card-text lead text-justify">{descripcion}</p>
				<a href="#" className="btn btn-primary text-wrap mt-auto">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

//Creo el pie de la página

export const Footer = () => {
	return (
		<div className="footer text-center py-3 bg-dark">
			<p className="text-white">Copywrite @ Your Website 2019</p>
		</div>
	);
};

// Estas son las variables de las Tarjetas

Tarjeta.propTypes = {
	imgUrl: PropTypes.string,
	titulo: PropTypes.string,
	descripcion: PropTypes.string
};
