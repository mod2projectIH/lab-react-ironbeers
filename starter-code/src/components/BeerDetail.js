import React from "react"
import BeerService from "../services/BeerService";
import BeerItem from "./BeerItem";
import BeerItemExtra from "./BeerItemExtra";


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
			
					<BeerItem
						key={this.state.beer._id}
						img={this.state.beer.image_url}
						name={this.state.beer.name}
						tag={this.state.beer.tagline}
						contributed={this.state.beer.contributed_by}
					/>
          <BeerItemExtra
            {...this.state.beer}
          />		
			</div>
		);
	}



}


export default BeerDetail