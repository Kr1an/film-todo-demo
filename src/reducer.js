import { combineReducers } from 'redux'
import { createAction, handleActions } from 'redux-actions';

export const hideForm = createAction('HIDE_FORM');
export const openForm = createAction('OPEN_FORM');
export const toggleForm = createAction('TOGGLE_FORM');

const form = handleActions(
  new Map([
    [
      hideForm,
      (state, action) => ({
        showForm: false,
      })
    ],
    [
      openForm,
      (state, action) => ({
        showForm: true,
      })
    ],
    [
      toggleForm,
      (state, action) => ({
        showForm: !state.showForm,
      })
    ]
  ]),
  { showForm: false }
);

export default combineReducers({
  form
})