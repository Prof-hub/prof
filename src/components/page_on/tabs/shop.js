import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// form page
import Card_Shop_Sell from '../cards/shop/sell';
import Card_Shop_New from '../cards/shop/new';
import Card_Shop_Top from '../cards/shop/top';

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
});

class Tab_Shop extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root} style={{ width: '100%', marginTop: '14px' }}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="Sell" />
                        <Tab label="New" />
                        <Tab label="Top" />
                    </Tabs>
                </AppBar>
                
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}><Card_Shop_Sell /></TabContainer>
                    <TabContainer dir={theme.direction}><Card_Shop_New /></TabContainer>
                    <TabContainer dir={theme.direction}><Card_Shop_Top /></TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

Tab_Shop.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Tab_Shop);