import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div style={{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%,-50%)"}}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);