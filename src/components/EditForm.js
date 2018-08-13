import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import InputAdornment from 'material-ui/Input/InputAdornment';
import FormHelperText from 'material-ui/Form/FormHelperText';
import FormControl from 'material-ui/Form/FormControl';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import Typography from 'material-ui/Typography';
import {
  hideForm,
  openForm,
  toggleForm,
} from '../reducer';

import {
  MdClose
} from 'react-icons/md'

const styles = theme => ({
  root: {
    boxShadow: '0 0 4px 0 rgba(0,0,0,0.5)',
    padding: '0px',
  },
  fullInput: {
    width: '100%',
  },
  halfInput: {
    maxWidth: '50%',
  },
  input: {
    boxSizing: 'border-box',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',
    paddingLeft: '25px',
  },
  form: {
    padding: '12px 24px',
    paddingBottom: '24px',
  },
  actions: {
    padding: '12px 24px',
  }
});

class EditForm extends React.Component {
  render() {
    const { classes, hideForm } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.options}>
          <Typography variant="subheading" gutterBottom>
            Edit Location
          </Typography>
          <IconButton onClick={hideForm}>
            <MdClose />
          </IconButton>
        </div>
        <form className={classes.form}>
          <div className={classes.fullInput}>
            <TextField
              label="Strip Title"
              size="huge"
              fullWidth
            />
          </div>
          <div className={classes.fullInput}>
            <TextField
              label="Description"
            />
          </div>
          <div className={classes.fullInput}>
            <TextField
              label="Title"
            />
          </div>
          
        </form>
        <div className={classes.actions}>
          <Button variant='raised'>
            Save
          </Button>

        </div>
      </div>
    );
  }
}

EditForm.propTypes = {
  classes: PropTypes.object.isRequired,
  hideForm: PropTypes.func,
};

const mapDispatch = {
  hideForm,
  openForm,
  toggleForm
}

const styled = withStyles(styles);
const connected = connect(null, mapDispatch);

export default compose(
  styled,
  connected,
)(EditForm);
