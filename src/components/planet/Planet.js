import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { fetchPlanet } from './planetActions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  attrName: {
    'font-weight': 'bold',
    'text-transform': 'capitalize'
  },
  planetImage: {
    height: '400px',
    padding: '20px',
    margin: '20px 0'
  }
});

export class Planet extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchPlanet(id);
  }

  render() {
    const { planet } = this.props;
    const { classes } = this.props;
    return (
      <div>
        {!_.isEmpty(planet) ? (
          <Grid item spacing={24} style={{ padding: 24 }}>
            <header>
              <Typography gutterBottom variant="h5" component="h2">
                Planet: {planet.name}
              </Typography>
            </header>
            <section>
              <Grid item spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.paper} elevation={2} square={true}>
                    <CardMedia
                      className={classes.planetImage}
                      image={planet.imageUrl}
                      title={planet.name}
                    />
                    <Typography component="p">{planet.description}</Typography>
                    {[
                      'price',
                      'area',
                      'radius',
                      'orbitPeriod',
                      'gravity',
                      'temperature'
                    ].map(attrName => (
                      <Typography component="p">
                        <span className={classes.attrName}>{attrName}:</span>{' '}
                        {planet[attrName].value} {planet[attrName].unit}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              </Grid>
            </section>
          </Grid>
        ) : (
          <Grid item xs={12} style={{ padding: 24 }}>
            <Paper className={classes.paper}>
              <Typography color="error" variant="h5" component="h2">
                Planet not found!
              </Typography>
            </Paper>
          </Grid>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { planet } = state.planetReducer;
  return {
    planet
  };
};

const mapDispatchToProps = {
  fetchPlanet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Planet));
