import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => (
  {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }
);

function Project_Graphic(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={180}
        className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={2}
          style={{ height: 'auto' }}>
        </GridListTile>
      </GridList>
    </div>
  );
}

Project_Graphic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project_Graphic);