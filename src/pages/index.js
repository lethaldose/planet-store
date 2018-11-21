import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import NavBar from '../components/navbar/NavBar';
import PlanetList from '../components/planet/PlanetList';
import Planet from '../components/planet/Planet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const styles = theme => ({});

class Index extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <NavBar classes={classes} />
        <BrowserRouter>
          <Switch>
            <Route path="/planet/:id" classes={classes} component={Planet} />
            <Route path="/" component={PlanetList} classes={classes} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
