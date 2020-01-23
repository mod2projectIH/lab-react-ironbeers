import React from "react"
import BeerService from "../services/BeerService";
import BeerItem from "./BeerItem";
import BeerItemExtra from "./BeerItemExtra";
import Header from "./Header";


class RandomBeer extends React.Component{

    constructor(props) {
      super(props)
      this.state = {
        beer: {}  };
    }
  
    async componentDidMount() {
      try {
        const beer = await BeerService.random()
        this.setState({beer: beer} )
      } catch(error) {
        console.warn('Error receiving beer => ', error)
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
            <BeerItemExtra
              {...this.state.beer}
            />		
              </div>
          );
      }
  
  
  
  }

export default RandomBeer