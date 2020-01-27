import React, { Component } from "react";
import "./App.css";
import ListBeer from "./components/ListBeer";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import BeerDetail from "./components/BeerDetail";
import Header from "./components/Header";
import SearchBeer from "./components/SearchBeer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<SearchBeer/>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/list" component={ListBeer} />
					<Route exact path="/random" component={RandomBeer} />
					<Route exact path="/new" component={NewBeer} />
					<Route exact path="/list/:id" component={BeerDetail} />
					

					<Redirect to="/" />
				</Switch>
			</div>
		);
	}
}

export default App;
