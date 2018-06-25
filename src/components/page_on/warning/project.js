import React from 'react';

// css
import 'semantic-ui-css/semantic.min.css';

// page form
import Warning_Project_List from '../list/warning_project';

export default class Warning_Project extends React.Component {
    render() {
        return (
            <div>
                <div id='warning-project-message-news' style={{ display: 'block' }}><Warning_Project_List /></div>
            </div>
        )
    }
}