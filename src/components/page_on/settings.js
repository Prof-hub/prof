import React from 'react';

// ui
import { Icon } from 'semantic-ui-react';

// css
import 'w3-css/w3.css';
import 'w3-css/4/w3mobile.css';

export default class Shop extends React.Component {
    render() {
        return (
            <div>
                <div
                    class="w3-display-container w3-container"
                    style={{ marginTop: '42px' }}
                >
                    <a
                        href="#"
                        class="w3-bar-item w3-button w3-padding"
                        style={{
                            textAlign: 'left',
                            width: '100%'
                        }}
                    ><Icon name="sign out" />Sign Out</a>
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}