import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Planet from '../components/Planet'

const dummyPlanets = [{
  name: 'Mars',
  description: 'The best planet',
  imageUrl: 'http://image-url',
  price: {
    amount: '111.40', currency: 'AUD'
  }
}];

class PlanetList extends Component {
    state = {
        planets: [...dummyPlanets],
        searchString: ''
    }
    // constructor() {
    //   super()
    // }
    getPlanets = () => {
      console.log('getPlanets');
      console.log(dummyPlanets);
      this.setState({planets: [...dummyPlanets]})
    }
    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getPlanets()
    }
    render() {
        return (
            <div>
            { this.state.planets ? (
                <div>
                <TextField style={{padding: 24}}
                id="searchInput"
                placeholder="Search for Planet"
                margin="normal"
                onChange={this.onSearchInputChange}
                />
                <Grid container spacing={24} style={{padding: 24}}>
                { this.state.planets.map(planet => (
                    <Grid item key={planet.name} xs={12} sm={6} lg={4} xl={3}>
                    <Planet planet={planet} />
                    </Grid>
                    ))}
                </Grid>
                </div>
                ) : "No planets found" }
            </div>
            )
    }
}
export default PlanetList;