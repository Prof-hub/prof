import React from 'react';
import $ from 'jquery';

// ui
import { Button, Menu } from 'semantic-ui-react';

// css
import 'semantic-ui-css/semantic.min.css';

// page form
import Chat_User_List from '../list/chat_user';
import Chat_User_On_List from '../list/chat_user_on';
import Chat_User_Off_List from '../list/chat_user_off';


export default class Chat_User extends React.Component {

    chatUserMessageNews = () => {
        $('#chat-user-message-news').css("display", "block")
        $('#chat-user-on-news').css("display", "none")
        $('#chat-user-friend-news').css("display", "none")
    }

    chatUserOnNews = () => {
        $('#chat-user-message-news').css("display", "none")
        $('#chat-user-on-news').css("display", "block")
        $('#chat-user-friend-news').css("display", "none")
    }

    chatUserFriendNews = () => {
        $('#chat-user-message-news').css("display", "none")
        $('#chat-user-on-news').css("display", "none")
        $('#chat-user-friend-news').css("display", "block")
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
                            onClick={this.chatUserMessageNews}
                        />
                        <Button
                            style={{ margin: 0 }} icon='wait' basic onClick={this.chatUserOnNews} />
                        <Button
                            style={{ margin: 0 }} icon='user' basic onClick={this.chatUserFriendNews} />
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
                    <div style={{ margin: ' 0 0px', height: '100%' }}>
                        <div
                            id='chat-user-message-news'
                            style={{ display: 'block' }}
                        ><Chat_User_List /></div>
                        <div
                            id='chat-user-on-news'
                            style={{ display: 'none' }}
                        ><Chat_User_On_List /></div>
                        <div
                            id='chat-user-friend-news'
                            style={{ display: 'none' }}
                        ><Chat_User_Off_List /></div>
                    </div>
                </div>
            </div>
        )
    }
}