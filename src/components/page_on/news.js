import React from 'react';
import $ from 'jquery';

// ui
import { Button, Menu } from 'semantic-ui-react';

// css
import 'semantic-ui-css/semantic.min.css';

// page form
import News_Follows from './news/follow';
import News_Shop from './news/shop';
import News_User from './news/user';
import News_Project from './news/project';

export default class News extends React.Component {

    newsfollows = () => {
        $('#newsfollows').css("display", "block")
        $('#newsprojects').css("display", "none")
        $('#newsshops').css("display", "none")
        $('#userabout').css("display", "none")
    }

    newsprojects = () => {
        $('#newsfollows').css("display", "none")
        $('#newsprojects').css("display", "block")
        $('#newsshops').css("display", "none")
        $('#userabout').css("display", "none")
    }

    newsshops = () => {
        $('#newsfollows').css("display", "none")
        $('#newsprojects').css("display", "none")
        $('#newsshops').css("display", "block")
        $('#userabout').css("display", "none")
    }

    userabout = () => {
        $('#newsfollows').css("display", "none")
        $('#newsprojects').css("display", "none")
        $('#newsshops').css("display", "none")
        $('#userabout').css("display", "block")
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
                            icon='newspaper'
                            basic
                            onClick={this.newsfollows}
                        />
                        <Button
                            style={{ margin: 0 }}
                            icon='inbox'
                            basic
                            onClick={this.newsprojects}
                        />
                        <Button
                            style={{ margin: 0 }}
                            icon='shopping bag'
                            basic
                            onClick={this.newsshops}
                        />
                        <Button
                            style={{ margin: 0 }}
                            icon='user'
                            basic
                            onClick={this.userabout}
                        />
                    </Button.Group>
                </Menu>

                <div
                    style={{
                        position: 'absolute',
                        top: '80px',
                        width: '100%',
                        height: '84%',
                        overflowX: 'hidden'
                    }}
                >
                    <div style={{ margin: ' 0 0px', height: '100%' }}>
                        <div
                            id='newsfollows'
                            style={{ display: 'block' }}
                        ><News_Follows /></div>
                        <div
                            id='newsprojects'
                            style={{ display: 'none' }}
                        ><News_Project /></div>
                        <div
                            id='newsshops'
                            style={{ display: 'none' }}
                        ><News_Shop /></div>
                        <div
                            id='userabout'
                            style={{ display: 'none' }}
                        ><News_User /></div>
                    </div>
                </div>
            </div>
        )
    }
}