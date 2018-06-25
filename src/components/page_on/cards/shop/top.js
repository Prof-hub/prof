import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const dabaseTast = [
  {
    id: 1,
    post_shop_top: {
      user_img: 'N',
      user_name: 'nutthapat',
      date: 'September 14, 2016',
      content_img: '',
      content_head: 'Test Item 1',
      content_text: 'Hello'
    }
  },
  {
    id: 2,
    post_shop_top: {
      user_img: 'J',
      user_name: 'jo lee',
      date: 'September 14, 2016',
      content_img: '',
      content_head: 'Test Item 2',
      content_text: 'Test'
    }
  }
]

class Top extends React.Component {
  state = {
    items: dabaseTast.slice(0, 1000),
  }

  render() {
    const { classes } = this.props;
    const { items } = this.state;

    return (
      <div>
        {items.map(item => (
          <Card
            className={classes.card}
            key={item.id}
            style={{ marginTop: '10px' }}>
            <CardMedia
              className={classes.media}
              image={item.post_shop_top.content_img}
              title="Contemplative Reptile"
              style={{ paddingTop: 0 }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="headline"
                component="h2"
              >{item.post_shop_top.content_head}</Typography>
              <Typography component="p">
                {item.post_shop_top.content_text}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
              >Share</Button>
              <Button
                size="small"
                color="primary"
              > Learn More</Button>
            </CardActions>
          </Card>
        ))}

      </div>
    );
  }
}

Top.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Top);