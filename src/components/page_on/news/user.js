import React from 'react';

// ui
import { Button, Menu, Modal } from 'semantic-ui-react';

// css
import 'semantic-ui-css/semantic.min.css';

// form page
import Post_Status from '../post_status';

import Card_User from '../cards/card_user';

export default class News_User extends React.Component {
    state = {
        open: false,
    }

    show = dimmer => () => this.setState({ dimmer, open: true })

    close = () => this.setState({ open: false })

    render() {
        const { dimmer, open } = this.state;

        return (
            <div >
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
                        <Card_User />
                    </div>
                </div>

                <Button
                    circular
                    icon='pencil'
                    style={{
                        overflowY: 'hidden',
                        fontSize: '20px',
                        position: 'absolute',
                        zIndix: 10,
                        bottom: '15px',
                        right: '15px'
                    }}
                    onClick={this.show(false)}
                />

                <Modal
                    style={{
                        marginTop: '0px',
                        left: '0',
                        height: '100%',
                        top: '0',
                        width: '100%'
                    }}
                    dimmer={dimmer}
                    open={open}
                    onClose={this.close}
                >
                    <Menu
                        style={{
                            margin: 0,
                            position: 'absolute',
                            zIndex: 10,
                            width: '100%',
                            height: '42px'
                        }}
                    >

                        <Button.Group >
                            <Button
                                style={{
                                    margin: 0
                                }}
                                icon='arrow left'
                                basic onClick={this.close}
                            />
                        </Button.Group >
                        <div style={{ width: '100%' }}></div>
                        <Button.Group >
                            <Button style={{ margin: 0 }} basic onClick={this.close} >Post</Button>
                        </Button.Group>
                    </Menu>

                    <div style={{ marginTop: '41px' }}>
                        <Post_Status />
                    </div>
                </Modal>
            </div>
        )
    }
}