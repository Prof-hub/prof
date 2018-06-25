import React from 'react';

// api
import Request from '../api/request';

// ui
import { Image, Icon } from 'semantic-ui-react';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';


export class NavBer extends React.Component {
    state = {
        datas: []
    }

    logOut = () => {
        Request.signOutAuth()
    }

    componentDidMount() {
        Request.personalUser((user) => {
            if (user !== null) {
                this.setState({ datas: user.slice(0, 10) })
                console.log("personal user on", user);

            } else {
                console.log("log user errer");

            }
        })
    }

    render() {
        const { datas } = this.state;
        return (
            <div>
                {datas.map(data => (
                    <div
                        key={data._id}
                        className="w3-bar"
                        id="myNavbar"
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                        }}
                    >
                        <a
                            onClick={this.logOut}
                            className="w3-bar-item w3-button w3-hover-black w3-right"
                        ><Icon name="log out" /></a>
                        <a
                            href={`/profile/id=${data.userID}`}
                            style={{
                                position: 'relative',
                                width: '120px',
                            }}
                            className="w3-bar-item w3-button w3-hover-black"
                        ><Image style={{ float: 'left' }} avatar src={data.img} />
                            <h5
                                style={{
                                    position: 'absolute',
                                    left: '56px',
                                    top: 0,
                                    fontWeight: 'bold',
                                    color: '#fff'
                                }}>{data.name}</h5>
                        </a>
                    </div>
                ))}
            </div>
        )
    }

}