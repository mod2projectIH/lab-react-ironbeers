import React from "react"
import BeerService from "../services/BeerService";
import Header from "./Header";
import BeerItem from "./BeerItem";


class BeerDetail extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      beer: {}  };
  }

  async componentDidMount() {
    try {
      const beerId = this.props.match.params.id
      const beer = await BeerService.detail(beerId)
      console.log(beerId)
      this.setState({beer: beer} )
    } catch(error) {
      console.warn('Error receiving beers list => ', error)
    }
    // BeerService.list()
    //   .then((data) =>  this.setState({ beers: data }))
    //   .catch(error => console.warn('Error receiving beers list => ', error))
  }
	
	render() {

		return (
			<div>
        <Header />
			
					<BeerItem
						key={this.state.beer._id}
						img={this.state.beer.image_url}
						name={this.state.beer.name}
						tag={this.state.beer.tagline}
						contributed={this.state.beer.contributed_by}
					/>
          
			
			</div>
		);
	}



}


export default BeerDetail