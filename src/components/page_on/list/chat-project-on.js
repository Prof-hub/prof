import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';

const styles = theme => (
  {
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }
);

const dabaseTast = [
  {
    id: 1,
    chat_project_on: {
      user_img: 'N',
      user_name: 'nutthapat',
      date: 'September 14, 2016',
      content_img: '',
      content_head: 'nutthapat',
      content_text: 'Hello'
    }
  },
  {
    id: 2,
    chat_project_on: {
      user_img: 'J',
      user_name: 'jo lee',
      date: 'September 14, 2016',
      content_img: '',
      content_head: 'Jo Lee',
      content_text: 'Test'
    }
  }
]

class Chat_Project_On extends React.Component {
  state = {
    items: dabaseTast.slice(0, 10000),
  }

  render() {
    const { classes } = this.props;
    const { items } = this.state;

    return (
      <div className={classes.root}>
        {items.map(Item => (
          <List key={Item.id}>
            <ListItem button>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText primary={Item.chat_project_on.content_head} />
            </ListItem>
            <li>
              <Divider />
            </li>
          </List>
        ))}
      </div>
    );
  }
}

Chat_Project_On.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chat_Project_On);