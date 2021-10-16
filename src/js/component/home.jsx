import React from "react";
import PropTypes from "prop-types";

//create your first component
export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
			<div className="container w-75">
				<div>
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div
					className="collapse navbar-collapse d-flex flex-row-reverse"
					id="navbarSupportedContent ">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
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

export const Jumbotron = () => {
	return (
		<div className="jumbotron bg-light mx-5 p-5 mb-3">
			<h1 className="display-4">A warm welcome!</h1>
			<p className="lead">
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

export const Tarjeta = ({ imgUrl }) => {
	return (
		<div className="card col-2 mb-5">
			<img className="card-img-top" src={imgUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary text-wrap">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

export const Footer = () => {
	return (
		<div className="footer text-center py-3 bg-dark">
			<p className="text-white">Copywrite @ Your Website 2019</p>
		</div>
	);
};

Tarjeta.propTypes = {
	imgUrl: PropTypes.string
};
