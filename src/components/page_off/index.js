import React from 'react';
import _ from 'lodash';
import $ from 'jquery';

// api
import Request from '../api/request';
import { getData, deleteData } from '../indexedDB';

// ui
import { Button, Image, Modal, Transition, List, Input, Form, Icon } from 'semantic-ui-react';

// img
import B_G from '../img/bg-login.jpg';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

// กำหนด ให้มันพอดีกับจอ background
const style_bg_size = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
    opacity: 1,
}

// กำหนดรูป background
const style_bg_img = {
    height: '100%',
    backgroundSize: 'cover',
    lineHeight: '1.7em',
    textAlign: 'center',
    backgroundImage: `url(${B_G} )`,
    backgroundColor: 'transparent',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    opacity: 1,
}

const show_widgets = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 1,
    zIndex: 10,
    transition: 'opacity .3s ease',
    position: 'absolute',
}

const prompt = {
    height: '150px',
    position: 'absolute',
    top: '35%',
    right: '20%',
    left: '25%',
}

export class ButtonUserAction extends React.Component {
    state = {
        open: false,
        openLogin: false,
        openName: false,
        items: []
    }

    componentDidMount() {
        getData((log) => {
            if (log !== null) {
                this.setState({ items: log.slice(0, 100) })
            } else {
                console.log("log user errer");
            }
        })
    }

    deleteLog = deleteLogID => () => {
        deleteData(deleteLogID)
        this.setState({ items: this.state.items.filter(person => person._id != `${deleteLogID}`) })
    }

    show = dimmer => () => this.setState({ dimmer, open: true })

    showSignInForm = (dimmerSignIn, emailLog) => () => this.setState({ dimmerSignIn, openSignIn: true, emailLog: emailLog })

    showSignUpForm = dimmerSignUp => () => this.setState({ dimmerSignUp, openSignUp: true })

    showNameForm = (dimmerName, ) => () => this.setState({ dimmerName, openName: true })

    close = () => this.setState({ open: false })

    closeSignInForm = () => this.setState({ openSignIn: false })

    closeSignUpForm = () => this.setState({ openSignUp: false })

    closeNameForm = () => this.setState({ openName: false })

    closeLogUserForm = () => this.setState({ openLogUser: false })

    nextNameTo = () => {
        $('#name-form').css("display", "none")
        $('#email-pass-form').css("display", "block")
        $('#name-to-next').css("display", "none")
        $('#email-pass-to-next').css("display", "block")
        $('#back-email-pass-to').css("display", "block")
    }

    backToNameFrom = () => {
        $('#name-form').css("display", "block")
        $('#email-pass-form').css("display", "none")
        $('#name-to-next').css("display", "block")
        $('#email-pass-to-next').css("display", "none")
        $('#back-email-pass-to').css("display", "none")
    }

    signInTo = (email, password) => {

        email = $('#E_mail').val();
        password = $('#Pass').val();
        Request.signInAuth(email, password)


    }

    signUpTo = (username, email, password, passwordConf) => {
        username = $('#User_Name').val();
        email = $('#email').val();
        password = $('#pass').val();
        passwordConf = $('#re-pass').val();

        Request.signUpAuth(username, email, password, passwordConf)
    }

    render() {
        const {
            dimmer, dimmerSignIn, dimmerSignUp,
            open, openSignIn, openSignUp, items, emailLog
        } = this.state;
        return (
            <div>
                <Button
                    circular
                    icon='user'
                    style={{ fontSize: '25px' }}
                    onClick={this.show(false)}
                />
                <Modal
                    style={{
                        marginTop: '0px',
                        left: '10%',
                        height: '65%',
                        top: '15%',
                        width: '80%'
                    }}
                    dimmer={dimmer}
                    open={open}
                    onClose={this.close}
                >
                    <Modal.Header
                    >Users
                        <a
                            style={{
                                float: 'right',
                                position: 'absolute',
                                right: '8px'
                            }}
                            onClick={this.close}
                        ><Icon name="times" /></a>
                    </Modal.Header>
                    <div style={{ overflow: 'auto', height: '70%' }}>
                        <div style={{ margin: '15px 20px' }}>
                            <Transition.Group
                                as={List}
                                duration={200}
                                divided
                                size='huge'
                                verticalAlign='middle'
                            >
                                {items.map(item => (
                                    <List.Item key={item.userID} style={{ opacity: 1 }} >
                                        <a
                                            style={{
                                                float: 'left',
                                                width: '80%'
                                            }}
                                            onClick={
                                                this.showSignInForm(false, item.email)
                                            }
                                        >
                                            <Image
                                                style={{ float: 'left' }}
                                                avatar
                                                src={item.url_img}
                                                onClick={
                                                    this.showSignInForm(false, item.email)
                                                }
                                            />
                                            <List.Content
                                                style={{
                                                    float: 'left',
                                                    marginLeft: '9px',
                                                    marginTop: "8px"
                                                }}
                                                header={_.startCase(item.name)}
                                                onClick={
                                                    this.showSignInForm(false, item.email)
                                                }
                                            />
                                        </a >
                                        <Button
                                            style={{ float: 'right' }}
                                            disabled={items.length === 0}
                                            icon='minus'
                                            onClick={
                                                this.deleteLog(item._id)
                                            }
                                        />
                                    </List.Item>
                                ))}
                            </Transition.Group>
                        </div>
                        <div></div>
                    </div>
                    <Modal.Actions style={{ height: '100%' }} >
                        <Button
                            style={{ float: 'left' }}
                            positive
                            icon='sign in'
                            content="Sign In"
                            onClick={this.showSignInForm(false)}
                        />
                        <Button
                            style={{ float: 'right' }}
                            color='red'
                            icon='user plus'
                            content="Sign Up"
                            onClick={this.showSignUpForm(false)}
                        />
                    </Modal.Actions>
                </Modal>

                <Modal
                    style={{
                        marginTop: '0px',
                        left: '10%',
                        height: '65%',
                        top: '15%',
                        width: '80%'
                    }}
                    dimmer={dimmerSignIn}
                    open={openSignIn}
                    onClose={this.closeSignInForm}
                >
                    <Modal.Header>Sign In   <a style={{ float: 'right', position: 'absolute', right: '8px' }}
                        onClick={this.closeSignInForm}><Icon name="times" /></a></Modal.Header>
                    <div style={{ overflow: 'auto', height: '70%' }}>
                        <div style={{ margin: '35px 15%' }}>
                            <Form>
                                <Input placeholder='Email' id='E_mail' value={emailLog} type='email' style={{ width: '100%', marginTop: '30px' }} />
                                <Input placeholder='Password' id='Pass' type='password' style={{ width: '100%', marginTop: '30px' }} />
                            </Form>
                        </div>
                    </div>
                    <Modal.Actions style={{ height: '100%' }} >
                        <Button
                            style={{ float: 'left' }}
                            positive
                            icon='sign in'
                            labelPosition='left'
                            content="LOGIN"
                            onClick={this.signInTo} />
                    </Modal.Actions>
                </Modal>

                <Modal
                    style={{
                        marginTop: '0px',
                        left: '10%',
                        height: '65%',
                        top: '15%',
                        width: '80%'
                    }}
                    dimmer={dimmerSignUp}
                    open={openSignUp}
                    onClose={this.closeSignUpForm}
                >
                    <Modal.Header>
                        Sign Up
                        <a
                            style={{
                                float: 'right',
                                position: 'absolute',
                                right: '8px'
                            }}
                            onClick={this.closeSignUpForm}
                        ><Icon name="times" /></a>
                    </Modal.Header>
                    <div style={{ overflow: 'auto', height: '70%' }}>
                        <div style={{ margin: '40px 15%' }}>
                            <Form
                                id='name-form'
                                style={{ display: 'block' }}>
                                <Input
                                    placeholder='Name'
                                    id='User_Name'
                                    type='text'
                                    style={{
                                        width: '100%',
                                        marginTop: '30px'
                                    }}
                                />
                            </Form>
                        </div>
                        <div
                            id='email-pass-form'
                            style={{
                                margin: '35px 15%',
                                display: 'none'
                            }}
                        >
                            <Form  >
                                <Input
                                    placeholder='Email'
                                    id='email'
                                    type='email'
                                    style={{
                                        width: '100%',
                                        marginTop: '30px'
                                    }}
                                />
                                <Input
                                    placeholder='Password'
                                    id='pass'
                                    type='password'
                                    style={{
                                        width: '100%',
                                        marginTop: '30px'
                                    }}
                                />
                                <Input
                                    placeholder='Re-Password'
                                    id='re-pass'
                                    type='password'
                                    style={{
                                        width: '100%',
                                        marginTop: '30px'
                                    }}
                                />
                            </Form>
                        </div>
                    </div>
                    <Modal.Actions style={{ height: '100%' }} >
                        <Button
                            id="name-to-next"
                            style={{
                                float: 'left',
                                display: 'block'
                            }}
                            positive
                            icon='share'
                            labelPosition='left'
                            content="Next"
                            onClick={this.nextNameTo}
                        />
                        <Button
                            id="email-pass-to-next"
                            style={{
                                float: 'left',
                                display: 'none'
                            }}
                            positive
                            icon='checkmark'
                            labelPosition='left'
                            content="OK!"
                            onClick={this.signUpTo}
                        />
                        <Button
                            id="back-email-pass-to"
                            positive
                            icon='reply'
                            style={{
                                float: 'right',
                                display: 'none'
                            }}
                            labelPosition='left'
                            content="BACK"
                            onClick={this.backToNameFrom}
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

// โครง background
const Background = () => {
    return <div style={style_bg_img} ></div>
}

export class LogIn extends React.Component {
    render() {
        return (
            <div>
                <div style={style_bg_size}>
                    <Background />
                </div>
                <div style={show_widgets}>
                    <div style={{ opacity: 1 }}>
                        <div style={prompt}> </div>
                        <div style={{
                            bottom: '20px',
                            left: '20px',
                            padding: 0,
                            margin: 0,
                            position: 'absolute',
                        }}>
                            <ButtonUserAction />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}