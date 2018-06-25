import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
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
    chat_shop: {
      user_img: 'N',
      user_name: 'nutthapat',
      date: 'September 14, 2016',
      content_img: '',
      content_head: 'Item1',
      content_text: 'Hello'
    }
  },
  {
    id: 2,
    chat_shop: {
      user_img: 'J',
      user_name: 'jo lee',
      date: 'September 14, 2016',
      content_img: '',
      content_head: 'Item2',
      content_text: 'Test'
    }
  }
]

class Chat_Shop extends React.Component {
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
                <BeachAccessIcon />
              </Avatar>
              <ListItemText
                primary={Item.chat_shop.content_head}
                secondary={Item.chat_shop.date}
              />
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

Chat_Shop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chat_Shop);