import React, { Component } from 'react'
import {connect} from "react-redux";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Planet from './Planet'
import { fetchPlanets } from "./planetActions";

class PlanetList extends Component {
    componentWillMount() {
      this.props.fetchPlanets()
    }

    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
    }
    render() {
        const { planets } = this.props;
        return (
            <div>
            { planets ? (
                <div>
                <TextField style={{padding: 24}}
                id="searchInput"
                placeholder="Search for Planet"
                margin="normal"
                onChange={this.onSearchInputChange}
                />
                <Grid container spacing={24} style={{padding: 24}}>
                { planets.map(planet => (
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

const mapStateToProps = (state) => {
  const { planets } = state.planetReducer;
  return {
    planets,
  };
};

const mapDispatchToProps = {
  fetchPlanets,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetList)