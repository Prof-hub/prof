import React from 'react';

// css
import 'semantic-ui-css/semantic.min.css';

// page form
import Warning_Shop_List from '../list/warning_shop';

export default class Warning_Shop extends React.Component {
    render() {
        return (
            <div>
                <div id='warning-shop-message-news' style={{ display: 'block' }}><Warning_Shop_List /></div>
            </div>
        )
    }
}