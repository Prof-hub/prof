import React from 'react';
// css
import 'semantic-ui-css/semantic.min.css';

// page form
import Warning_User_List from '../list/warning_user';

export default class Warning_User extends React.Component {
    render() {
        return (
            <div>
                <div id='warning-user-message-news' style={{ display: 'block' }}><Warning_User_List /></div>
            </div>
        )
    }
}