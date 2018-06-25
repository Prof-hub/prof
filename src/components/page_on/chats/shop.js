import React from 'react';
import $ from 'jquery';

// ui
import { Button, Menu } from 'semantic-ui-react';

// css
import 'semantic-ui-css/semantic.min.css';

// page form
import Chat_Shop_List from '../list/chat_shop';
import Chat_Shop_On_List from '../list/chat_shop_on';
import Chat_Shop_Off_List from '../list/chat_shop_off';

export default class Chat_Shop extends React.Component {

    chatShopMessageNews = () => {
        $('#chat-shop-message-news').css("display", "block")
        $('#chat-shop-on-news').css("display", "none")
        $('#chat-shop-friend-news').css("display", "none")
    }

    chatShopOnNews = () => {
        $('#chat-shop-message-news').css("display", "none")
        $('#chat-shop-on-news').css("display", "block")
        $('#chat-shop-friend-news').css("display", "none")
    }

    chatShopFriendNews = () => {
        $('#chat-shop-message-news').css("display", "none")
        $('#chat-shop-on-news').css("display", "none")
        $('#chat-shop-friend-news').css("display", "block")
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
                            onClick={this.chatShopMessageNews}
                        />
                        <Button
                            style={{ margin: 0 }}
                            icon='wait'
                            basic
                            onClick={this.chatShopOnNews}
                        />
                        <Button
                            style={{ margin: 0 }}
                            icon='user'
                            basic
                            onClick={this.chatShopFriendNews}
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
                    <div
                        style={{
                            margin: ' 0 0px',
                            height: '100%'
                        }}
                    >
                        <div
                            id='chat-shop-message-news'
                            style={{ display: 'block' }}
                        ><Chat_Shop_List /></div>
                        <div
                            id='chat-shop-on-news'
                            style={{ display: 'none' }}
                        ><Chat_Shop_On_List /></div>
                        <div
                            id='chat-shop-friend-news'
                            style={{ display: 'none' }}
                        ><Chat_Shop_Off_List /></div>
                    </div>
                </div>
            </div>
        )
    }
}