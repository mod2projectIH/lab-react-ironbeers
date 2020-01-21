import React, { Component } from "react";
import "./App.css";
import ListBeer from "./components/ListBeer";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import BeerDetail from "./components/BeerDetail";

class App extends Component {
	render() {
		return (
			<div className="App">



				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/list" component={ListBeer} />
          <Route exact path="/random" component={RandomBeer}/>
          <Route exact path="/list/:id" component={BeerDetail} />
          <Route exact path="/new" component={NewBeer}/>

					<Redirect to="/" />
				</Switch>
			</div>
		);
	}
}

export default App;
