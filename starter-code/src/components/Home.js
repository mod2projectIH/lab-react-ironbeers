import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="Home">

    <Link to="/list">
			<div>

				<img src="images/beers.png" alt="..."></img>
				<h1>All beers</h1>
				<p>Lorem ipsum</p>
			</div>
      </Link> 
      <Link to="/random">
			<div>
				<img src="images/random-beer.png" alt="..."></img>
				<h1>Random Beer</h1>
				<p>Lorem ipsum</p>
			</div>
      </Link>
      <Link to="/new">
			<div>
				<img src="images/new-beer.png" alt="..."></img>
				<h1>New Beer</h1>
				<p>Lorem ipsum</p>
			</div>
      </Link>
		</div>
	);
};

export default Home;
