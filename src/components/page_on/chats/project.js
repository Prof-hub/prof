import React from 'react';
import $ from 'jquery';

// ui
import { Button, Menu } from 'semantic-ui-react';

// css
import 'semantic-ui-css/semantic.min.css';

// page form
import Chat_Project_List from '../list/chat_project';
import Chat_Project_On_List from '../list/chat_project_on';
import Chat_Project_Off_List from '../list/chat_project_off';

export default class Chat_Project extends React.Component {

    chatProjectMessageNews = () => {
        $('#chat-project-message-news').css("display", "block")
        $('#chat-project-on-news').css("display", "none")
        $('#chat-project-friend-news').css("display", "none")
    }

    chatProjectOnNews = () => {
        $('#chat-project-message-news').css("display", "none")
        $('#chat-project-on-news').css("display", "block")
        $('#chat-project-friend-news').css("display", "none")
    }

    chatProjectFriendNews = () => {
        $('#chat-project-message-news').css("display", "none")
        $('#chat-project-on-news').css("display", "none")
        $('#chat-project-friend-news').css("display", "block")
    }

    render() {
        return (
            <div>
                <Menu
                    style={{
                        margin: 0,
                        position: 'absolute',
                        zIndex: 9,
                        width: '100%'
                    }}
                >
                    <Button.Group style={{ width: '100%' }} >
                        <Button
                            style={{ margin: 0 }}
                            icon='talk'
                            basic
                            onClick={this.chatProjectMessageNews}
                        />
                        <Button
                            style={{ margin: 0 }}
                            icon='wait'
                            basic
                            onClick={this.chatProjectOnNews}
                        />
                        <Button
                            style={{ margin: 0 }}
                            icon='user'
                            basic
                            onClick={this.chatProjectFriendNews}
                        />
                    </Button.Group>
                </Menu>

                <div
                    style={{
                        position: 'absolute',
                        top: '80px',
                        width: '100%',
                        height: '84%'
                    }}
                >
                    <div style={{ margin: ' 0 0px', height: '100%' }} >
                        <div
                            id='chat-project-message-news'
                            style={{ display: 'block' }}
                        ><Chat_Project_List /></div>
                        <div
                            id='chat-project-on-news'
                            style={{ display: 'none' }}
                        ><Chat_Project_On_List /></div>
                        <div
                            id='chat-project-friend-news'
                            style={{ display: 'none' }}
                        ><Chat_Project_Off_List /></div>
                    </div>
                </div>
            </div>
        )
    }
}