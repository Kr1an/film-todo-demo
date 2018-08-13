import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import classnames from 'classnames';
import Card from 'material-ui/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardContent from 'material-ui/Card/CardContent';
import CardActions from 'material-ui/Card/CardActions';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';
import red from 'material-ui/colors/red';
import {
  hideForm,
  openForm,
  toggleForm,
} from '../reducer';

import {
    MdShare as ShareIcon,
    MdFavorite as FavoriteIcon,
    MdExpandMore as ExpandMoreIcon,
    MdMoreVert as MoreVertIcon,
    MdEdit,
    MdMyLocation,
} from 'react-icons/md'

const styles = theme => ({
  card: {
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Segment extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const {
      classes,
      toggleForm,
    } = this.props;

    return (
      <ListItem>
        <Card className={classes.card}>
          <CardHeader
            avatar={
                <MdMyLocation size={30} />
            }
            action={
              <IconButton onClick={toggleForm}>
                <MdEdit />
              </IconButton>
            }
            title="Location"
          />
          <CardContent>
          <List>
            <ListItem>
              <Avatar>
                <MdEdit />
              </Avatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
              <Avatar>
                <MdEdit />
              </Avatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <Avatar>
                <MdEdit />
              </Avatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
          </CardContent>
        </Card>
      </ListItem>
    );
  }
}

Segment.propTypes = {
  classes: PropTypes.object.isRequired,
  showEdit: PropTypes.boolean,
  toggleForm: PropTypes.func,
};

const mapState = (state) => ({
  showEdit: state.form.showForm
})
const mapDispatch = {
  hideForm,
  openForm,
  toggleForm
}

const styled = withStyles(styles);
const connected = connect(mapState, mapDispatch);

export default compose(
  styled,
  connected,
)(Segment);