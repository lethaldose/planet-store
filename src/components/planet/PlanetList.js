import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Planet from './Planet';
import { fetchPlanets } from './planetActions';

export class PlanetList extends Component {
  componentWillMount() {
    this.props.fetchPlanets();
  }

  render() {
    const { planets } = this.props;
    return (
      <div>
        {planets && planets.length > 0 ? (
          <div>
            <Grid container spacing={24} style={{ padding: 24 }}>
              {planets.map(planet => (
                <Grid item key={planet.name} xs={12} sm={6} lg={4} xl={3}>
                  <Planet planet={planet} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <Grid item style={{ padding: 24 }}>
            <Typography color="error" variant="h5" component="h2">
              No planets available!
            </Typography>
          </Grid>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { planets } = state.planetReducer;
  return {
    planets
  };
};

const mapDispatchToProps = {
  fetchPlanets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetList);
