import React from "react";
import BeerService from "../services/BeerService";

class NewBeer extends React.Component {
	state = {
		data: {
			name: "",
			tagline: "",
			description: "",
			first_brewed: "",
			brewers_tips: "",
			attenuation_level: 0,
			contributed_by: "",
		},
	};

	handleChange = event => {
		let beer = { ...this.state.data };
		beer[event.target.name] = event.target.value;
		this.setState({
			data: beer,
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		const beer = this.state.data;
		BeerService.newBeer(beer)
			.then(data => console.log(data))

			.catch(error => console.warn("Error creating beer => ", error));
	};

	render() {
		return (
			<form className="NewBeer">
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Name</label>
					<input
						type="text"
						className="form-control"
						name="name"
						placeholder="Enter name"
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Tagline</label>
					<input
						type="text"
						className="form-control"
						name="tagline"
						placeholder="Beer tagline"
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Description</label>
					<textarea
						type="text"
						className="form-control"
						name="description"
						placeholder="Description"
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">First brewed</label>
					<input
						type="text"
						className="form-control"
						name="first_brewed"
						placeholder="First brewed"
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Brewer tips</label>
					<input
						type="text"
						className="form-control"
						name="brewer_tips"
						placeholder="Brewer tips"
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Attenuation level</label>
					<input
						type="number"
						className="form-control"
						name="attenuation_level"
						placeholder="Attenuation level"
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Contributed by</label>
					<input
						type="text"
						className="form-control"
						name="contributed_by"
						placeholder="Contrybuted by"
						onChange={this.handleChange}
					/>
				</div>

				<button
					type="submit"
					className="btn btn-primary w-75"
					onClick={this.handleSubmit}
				>
					Add a new beer
				</button>
			</form>
		);
	}
}

export default NewBeer;
