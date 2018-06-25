import React from 'react';

// ui
import { Form, TextArea } from 'semantic-ui-react';

// css
import 'semantic-ui-css/semantic.min.css';

// img
import User_img from '../img/user.jpg'

const sizes = ['mini']

export default class Post_Status extends React.Component {
    state = {
        size: sizes[0]
    }

    render() {
        return (
            <div>
                <div style={{ height: '42px' }}>
                    <div>
                        <a href="" >
                            <img
                                src={User_img}
                                alt="" srcset=""
                                style={{
                                    float: 'left',
                                    borderRadius: '50%',
                                    margin: '20px',
                                    width: '60px'
                                }}
                            />
                            <span
                                style={{
                                    position: 'absolute',
                                    fontSize: '20px',
                                    width: '135px',
                                    top: '65px'
                                }}
                            >Code</span>
                        </a>

                        <Form>
                            <TextArea
                                placeholder='Tell us more'
                                style={{
                                    height: '191px',
                                    position: 'absolute',
                                    width: '94%',
                                    left: '11px',
                                    top: '95px'
                                }}
                            />
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}