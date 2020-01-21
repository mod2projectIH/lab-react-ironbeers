import React, { Component } from "react";
import BeerService from "../services/BeerService";
import BeerItem from "./BeerItem";
import Header from "./Header";

class ListBeer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			beers: [],
		};
	}

	async componentDidMount() {
		try {
			const beers = await BeerService.list();
			this.setState({ beers: beers });
		} catch (error) {
			console.warn("Error receiving beers list => ", error);
		}
		// BeerService.list()
		//   .then((data) =>  this.setState({ beers: data }))
		//   .catch(error => console.warn('Error receiving beers list => ', error))
	}

	render() {
		return (
			<div>
				<Header />
				{this.state.beers.map((beer, i) => (
					<BeerItem
            key={i}
            id={beer._id}
						img={beer.image_url}
						name={beer.name}
						tag={beer.tagline}
						contributed={beer.contributed_by}
					/>
				))}
			</div>
		);
	}
}

export default ListBeer;
