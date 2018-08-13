import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Segment from './Segment';

const styles = theme => ({

});

function Content({ classes }) {
  return (
    <List style={{}}>
      <Segment />
      <Segment />
      <Segment />
      <Segment />
      <Segment />
    </List>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);