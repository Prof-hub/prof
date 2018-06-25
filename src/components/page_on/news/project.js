import React from 'react';

// css
import 'semantic-ui-css/semantic.min.css';

// form page
import Card_Project from '../cards/card_project';

export default class News_Project extends React.Component {
    state = {
        open: false,
    }

    show = dimmer => () => this.setState({ dimmer, open: true })

    close = () => this.setState({ open: false })

    render() {
        return (
            <div>
                <div
                    style={{
                        position: 'absolute',
                        top: '0px',
                        width: '103%',
                        height: '100%',
                        overflowY: 'scroll'
                    }}
                >
                    <div style={{ margin: '10px 10px', height: '100%', }}>
                        <Card_Project />
                    </div>
                </div>
            </div>
        )
    }
}