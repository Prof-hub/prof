import React from 'react';
import $ from 'jquery';

// ui
import { Button, Input, Menu, Modal } from 'semantic-ui-react';

// css
import '../css/style.css';
import 'semantic-ui-css/semantic.min.css';

// page form
import News from './news';
import Projects from './projects';
import Profile from './profile';
import Shop from './shop';
import Settings from './settings';

import ChatUser from './chats/users';
import ChatProjects from './chats/project';
import ChatShop from './chats/shop';

import WarningUser from './warning/users';
import WarningProjects from './warning/project';
import WarningShop from './warning/shop';

export default class Home extends React.Component {
    state = {
        openMenu: false,
        openWarning: false,
        openChat: false
    }

    showMenu = dimmerMenu => () => this.setState({ dimmerMenu, openMenu: true });

    showWarning = dimmerWarning => () => this.setState({ dimmerWarning, openWarning: true });

    showChat = dimmerChat => () => this.setState({ dimmerChat, openChat: true });

    closeMenu = () => this.setState({ openMenu: false });

    closeWarning = () => this.setState({ openWarning: false });

    closeChat = () => this.setState({ openChat: false });

    news = () => {
        $('#news').css("display", "block")
        $('#projects').css("display", "none")
        $('#shop').css("display", "none")
        $('#vcard').css("display", "none")
        $('#menu-bar').css("display", "block")
    };

    projects = () => {
        $('#news').css("display", "none")
        $('#projects').css("display", "block")
        $('#shop').css("display", "none")
        $('#vcard').css("display", "none")
        $('#menu-bar').css("display", "block")
    };

    shop = () => {
        $('#news').css("display", "none")
        $('#projects').css("display", "none")
        $('#shop').css("display", "block")
        $('#vcard').css("display", "none")
        $('#menu-bar').css("display", "none")
    };

    vcard = () => {
        $('#news').css("display", "none")
        $('#projects').css("display", "none")
        $('#shop').css("display", "none")
        $('#vcard').css("display", "block")
        $('#menu-bar').css("display", "none")
    };

    //in form chat 
    chatUser = () => {
        $('#chat-user').css("display", "block")
        $('#chat-project').css("display", "none")
        $('#chat-shop').css("display", "none")
    };

    chatProject = () => {
        $('#chat-user').css("display", "none")
        $('#chat-project').css("display", "block")
        $('#chat-shop').css("display", "none")
    };

    chatShop = () => {
        $('#chat-user').css("display", "none")
        $('#chat-project').css("display", "none")
        $('#chat-shop').css("display", "block")
    };

    // in form warning
    warningUser = () => {
        $('#warning-user').css("display", "block")
        $('#warning-project').css("display", "none")
        $('#warning-shop').css("display", "none")
    };

    warningProject = () => {
        $('#warning-user').css("display", "none")
        $('#warning-project').css("display", "block")
        $('#warning-shop').css("display", "none")
    };

    warningShop = () => {
        $('#warning-user').css("display", "none")
        $('#warning-project').css("display", "none")
        $('#warning-shop').css("display", "block")
    };


    render() {

        const {
            openMenu, openWarning, openChat,
            dimmerChat, dimmerWarning, dimmerMenu
        } = this.state;

        return (
            <div>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        height: '95%',
                        width: '100%',
                        overflowY: 'hidden'
                    }}
                >
                    <div style={{ display: 'block' }} id="menu-bar">
                        <Menu
                            style={{
                                margin: 0,
                                position:
                                    'absolute',
                                zIndex: 10,
                                width: '100%',
                                height: '42px'
                            }}
                        >
                            <Button.Group >
                                <Button
                                    style={{ margin: 0 }}
                                    icon='content'
                                    basic
                                    onClick={this.showMenu(false)}
                                />
                            </Button.Group>
                            <Input
                                icon='search'
                                iconPosition='left'
                                placeholder='Search...'
                                style={{ width: '100%' }}
                            />
                            <Button.Group >
                                <Button
                                    style={{ margin: 0 }}
                                    icon='alarm'
                                    basic
                                    onClick={this.showWarning(false)}
                                />
                                <Button
                                    style={{ margin: 0 }}
                                    icon='comment'
                                    basic
                                    onClick={this.showChat(false)}
                                />
                            </Button.Group>
                        </Menu>
                    </div>
                    <div style={{ height: '100%', marginTop: ' 40px', }}>
                        <div
                            id='news'
                            style={{
                                display: 'block',
                                height: '100%'
                            }}
                        ><News /></div>
                        <div
                            id='projects'
                            style={{
                                display: 'none'
                            }}
                        ><Projects /></div>
                        <div
                            id='shop'
                            style={{
                                display: 'none'
                            }}
                        ><Shop /></div>
                        <div
                            id='vcard'
                            style={{
                                display: 'none'
                            }}
                        ><Profile /></div>
                    </div>
                </div>

                <div
                    className="ui buttons"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        bottom: '0px',
                        height: '45px',
                        zIndex: 10
                    }}
                >
                    <Button
                        style={{ margin: 0 }}
                        icon='browser'
                        onClick={this.news}
                    />
                    <Button
                        style={{ margin: 0 }}
                        icon='briefcase'
                        onClick={this.projects}
                    />
                    <Button
                        style={{ margin: 0 }}
                        icon='cart'
                        onClick={this.shop}
                    />
                    <Button
                        style={{ margin: 0 }}
                        icon='vcard'
                        onClick={this.vcard}
                    />
                </div>

                <div>
                    <Modal
                        style={{
                            marginTop: '0px',
                            left: '0',
                            height: '100%',
                            top: '0',
                            width: '100%'
                        }}
                        dimmer={dimmerMenu}
                        open={openMenu}
                        onClose={this.closeMenu}
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
                                    style={{ margin: 0 }}
                                    icon='arrow left'
                                    basic
                                    onClick={this.closeMenu}
                                />
                            </Button.Group >
                        </Menu>
                        <Settings />
                    </Modal>

                    <Modal
                        style={{
                            marginTop: '0px',
                            left: '0',
                            height: '100%',
                            top: '0',
                            width: '100%'
                        }}
                        dimmer={dimmerChat}
                        open={openChat}
                        onClose={this.closeChat}
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
                                    style={{ margin: 0 }}
                                    icon='arrow left'
                                    basic
                                    onClick={this.closeChat}
                                />
                            </Button.Group>
                            <Input
                                icon='search'
                                iconPosition='left'
                                placeholder='Search...'
                                style={{ width: '100%' }}
                            />
                        </Menu>

                        <div
                            style={{
                                height: '100%',
                                marginTop: ' 40px',
                            }}
                        >
                            <div id='chat-user'
                                style={{
                                    display: 'block',
                                    height: '100%'
                                }}
                            ><ChatUser /></div>
                            <div id='chat-project'
                                style={{
                                    display: 'none'
                                }}
                            ><ChatProjects /></div>
                            <div id='chat-shop'
                                style={{
                                    display: 'none'
                                }}
                            ><ChatShop /></div>
                        </div>

                        <div className="ui buttons"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                bottom: '0px',
                                height: '45px',
                                zIndex: 10
                            }}
                        >
                            <Button
                                style={{ margin: 0 }}
                                icon='users'
                                onClick={this.chatUser}
                            />
                            <Button
                                style={{ margin: 0 }}
                                icon='briefcase'
                                onClick={this.chatProject}
                            />
                            <Button
                                style={{ margin: 0 }}
                                icon='cart'
                                onClick={this.chatShop}
                            />
                        </div>
                    </Modal>

                    <Modal
                        style={{
                            marginTop: '0px',
                            left: '0',
                            height: '100%',
                            top: '0',
                            width: '100%'
                        }}
                        dimmer={dimmerWarning}
                        open={openWarning}
                        onClose={this.closeWarning}
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
                                    style={{ margin: 0 }}
                                    icon='arrow left'
                                    basic
                                    onClick={this.closeWarning}
                                />
                            </Button.Group>
                            <Input
                                icon='search'
                                iconPosition='left'
                                placeholder='Search...'
                                style={{ width: '100%' }}
                            />
                        </Menu>

                        <div
                            style={{
                                height: '100%',
                                marginTop: ' 40px',
                            }}
                        >
                            <div
                                id='warning-user'
                                style={{
                                    display: 'block',
                                    height: '100%'
                                }}
                            ><WarningUser /></div>
                            <div
                                id='warning-project'
                                style={{
                                    display: 'none'
                                }}
                            ><WarningProjects /></div>
                            <div
                                id='warning-shop'
                                style={{
                                    display: 'none'
                                }}
                            ><WarningShop /></div>
                        </div>

                        <div className="ui buttons"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                bottom: '0px',
                                height: '45px',
                                zIndex: 10
                            }}
                        >
                            <Button
                                style={{ margin: 0 }}
                                icon='users'
                                onClick={this.warningUser}
                            />
                            <Button
                                style={{ margin: 0 }}
                                icon='briefcase'
                                onClick={this.warningProject}
                            />
                            <Button
                                style={{ margin: 0 }}
                                icon='cart'
                                onClick={this.warningShop}
                            />
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}