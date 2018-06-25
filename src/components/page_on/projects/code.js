import React from 'react';
// ui
import { Button, Menu, Select } from 'semantic-ui-react';

// css
import 'semantic-ui-css/semantic.min.css';

// img
import User_img from '../../img/user.jpg'

// page form
import Project_Code from '../list/project_code';

const options = [
    { key: 'all', text: 'All', value: 'all' },
    { key: 'javascript', text: 'JavaScript', value: 'javascript' },
    { key: 'css', text: 'Css', value: 'css' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'java', text: 'JAVA', value: 'java' },
    { key: 'python', text: 'Python', value: 'python' },
]

const sizes = ['mini']

export default class Projects_Code extends React.Component {

    state = { size: sizes[0] }

    render() {

        return (
            <div>
                <div style={{ height: '42px' }}>
                    <Menu >
                        <div>
                            <a href="" >
                                <img
                                    src={User_img}
                                    alt=""
                                    srcset=""
                                    style={{
                                        float: 'left',
                                        borderRadius: '50%',
                                        margin: '20px',
                                        width: '60px',
                                    }} />
                                <span style={{
                                    position: 'absolute',
                                    fontSize: '20px',
                                    width: '135px',
                                    top: '20px'
                                }}>Code</span>
                            </a>
                            <Select
                                compact
                                options={options}
                                defaultValue='all'
                                style={{
                                    width: '100px',
                                    position: 'absolute',
                                    right: '15px',
                                    top: '30px',
                                }} />
                            <Button
                                icon='unhide'
                                label={{ as: 'a', basic: true, content: '2,048' }}
                                labelPosition='left'
                                style={{ position: 'absolute', left: '100px', top: '53px', }}
                            />
                        </div>
                    </Menu>
                </div>
                <div style={{ margin: '65px 8px 0', height: '100%', }}>
                    <Project_Code />
                </div>

            </div>
        )
    }
}