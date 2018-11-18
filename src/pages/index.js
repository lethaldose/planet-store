import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import NavBar from '../components/NavBar'
import PlanetList from '../components/PlanetList'

const styles = theme => ({
  // root: {
  //   textAlign: 'center',
  //   paddingTop: theme.spacing.unit * 20,
  // },
});

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <NavBar classes={classes}/>
        <PlanetList/>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
