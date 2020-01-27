import React from "react";
import BeerService from "../services/BeerService";

export default class SearchBeer extends React.Component {
	state = {
		search: "",
	};

	handleChange(event) {
		let beer = { ...this.state.name };
		beer[event.target.name] = event.target.value;
		this.setState({
			name: beer,
		});
	}

  getBeer(event){
    
    console.log(event.target.value, this.state.name)

  }

	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<form className="form-inline">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search beer"
						aria-label="Search"
						name="search"
						onChange={this.handleChange}
					/>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit"
						onSubmit={this.getBeer}
					>
						Search
					</button>
				</form>
			</nav>
		);
	}
}
