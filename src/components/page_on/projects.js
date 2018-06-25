import React from 'react';
import $ from 'jquery';

// ui
import { Button, Menu } from 'semantic-ui-react';

// css
import 'semantic-ui-css/semantic.min.css';

// page form
import Projects_Code from './projects/code';
import Projects_Graphic from './projects/graphic';

export default class Projects extends React.Component {

    projectscode = () => {
        $('#projectscode').css("display", "block")
        $('#projectsgraphic').css("display", "none")
    };

    projectsgraphic = () => {
        $('#projectscode').css("display", "none")
        $('#projectsgraphic').css("display", "block")
    };

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
                            icon='code'
                            basic
                            onClick={this.projectscode}
                        />
                        <Button
                            style={{ margin: 0 }}
                            icon='block layout'
                            basic
                            onClick={this.projectsgraphic}
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
                    <div style={{ margin: ' 0', height: '100%' }}>
                        <div
                            id='projectscode'
                            style={{ display: 'block' }}
                        ><Projects_Code /></div>
                        <div
                            id='projectsgraphic'
                            style={{ display: 'none' }}
                        ><Projects_Graphic /></div>
                    </div>
                </div>
            </div>
        )
    }
}