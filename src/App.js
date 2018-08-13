import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Slide } from 'material-ui';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import {
  hideForm,
  openForm,
} from './reducer';
import Content from './components/Content';
import EditForm from './components/EditForm';

import logo from './logo.svg';
import './App.css';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flex: 1,
  },
  formColumn: {
    transition: 'all 0s ease',
  },
  fixedContainer: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: '12px 24px',
  }
});

const editFormWidth = 400;

const App = ({ classes, showEdit, openForm }) => (
  <div className={classes.root}>
    <div className={classes.content}>
      <Content />
    </div>
    <div className={classes.formColumn} style={{ width: showEdit ? `${editFormWidth}px` : 0}}>
      <Slide
        timeout={{
          enter: 200,
          exit: 0,
        }}
        direction="left" in={showEdit} mountOnEnter unmountOnExit>
        <div
          className={classes.fixedContainer}
          style={{ width: `${editFormWidth}px` }}
        >
          <EditForm />
        </div>
      </Slide>
    </div>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
  showEdit: PropTypes.boolean,
};

const mapState = (state) => ({
  showEdit: state.form.showForm
})
const mapDispatch = {
  hideForm,
  openForm,
}

const styled = withStyles(styles);
const connected = connect(mapState, mapDispatch);

export default compose(
  styled,
  connected,
)(App);
