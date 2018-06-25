import React from 'react';
import $ from 'jquery';

// ui
import { Button, Icon } from 'semantic-ui-react';

// css
import 'semantic-ui-css/semantic.min.css';
import '../../css/shop.css';

// img
import Jeans_img from '../../img/jeans.jpg'

// form page
import Tabs_Shop from '../tabs/shop';

export default class News_Shop extends React.Component {
    show = () => {
        $("#mySidebar").css("display", "block")
        $("#myOverlay").css("display", "block")
    };

    close = () => {
        $("#mySidebar").css("display", "none")
        $("#myOverlay").css("display", "none")
    };

    myAccFunc = () => {
        var x = $("#demoAcc");
        if (x.addClass("w3-show") == -1) {
            x.addClass += "w3-show";
        } else {
            x.addClass = x.addClass("w3-show");
        }
    };

    render() {
        return (
            <div>
                <div
                    style={{
                        position: 'absolute',
                        top: '0px',
                        width: '103%',
                        height: '100%',
                        overflowY: 'scroll'
                    }}
                >
                    <div style={{ margin: '10px 10px', height: '100%', }}>
                        <header
                            class="w3-container w3-xlarge"
                            style={{ backgroundColor: '#000', height: '45px' }}
                        >
                            <p
                                class="w3-left"
                                style={{
                                    marginTop: '6px',
                                    fontWeight: 'bolder',
                                    color: '#fff'
                                }}
                            >Jeans</p>
                        </header>

                        <div
                            class="w3-display-container w3-container"
                            style={{ marginTop: '5px' }}
                        >
                            <img
                                src={Jeans_img}
                                alt="Jeans"
                                style={{ width: '100% ' }}
                            />
                            <div
                                class="w3-display-topleft w3-text-white"
                                style={{ padding: '24px 48px' }}
                            >
                                <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
                                <h1 class="w3-hide-large w3-hide-medium">New arrivals</h1>
                                <h1 class="w3-hide-small">COLLECTION 2016</h1>
                                <p>
                                    <a
                                        href="#jeans"
                                        class="w3-button w3-black w3-padding-large w3-large"
                                    >SHOP NOW</a>
                                </p>
                            </div>
                        </div>

                        <Tabs_Shop />
                    </div>
                </div>


                <Button
                    circular
                    icon='list layout'
                    style={{
                        fontSize: '20px',
                        position: 'absolute',
                        zIndix: 10,
                        bottom: '15px',
                        right: '15px'
                    }}
                    onClick={this.show}
                />
                <nav
                    class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top"
                    style={{
                        zIndex: 3,
                        width: '250px',
                        display: 'none'
                    }}
                    id="mySidebar"
                >
                    <div
                        class="w3-container w3-display-container w3-padding-16"
                        style={{ marginTop: '70px' }}>
                        <i
                            class="w3-hide-large w3-button w3-display-topright"
                            style={{ marginTop: '15px' }}
                        ><Icon
                                onClick={this.close}
                                name="remove"
                            />
                        </i>
                        <h3 class="w3-wide"><b>LOGO</b></h3>
                    </div>
                    <div
                        class="w3-padding-64 w3-large w3-text-grey"
                        style={{ fontWeight: 'bold' }}>
                        <a
                            href="#"
                            class="w3-bar-item w3-button"
                        >Shirts</a>
                        <a
                            href="#"
                            class="w3-bar-item w3-button"
                        >Dresses</a>
                        <a
                            onClick={this.myAccFunc}
                            href="javascript:void(0)"
                            class="w3-button w3-block w3-white w3-left-align"
                            id="myBtn"
                        >Jeans <Icon name="caret down" />
                        </a>
                        <div
                            id="demoAcc"
                            class="w3-bar-block w3-hide w3-padding-large w3-medium"
                        >
                            <a
                                href="#"
                                class="w3-bar-item w3-button w3-light-grey"
                            ><Icon
                                    name="caret right"
                                />Skinny</a>
                            <a
                                href="#"
                                class="w3-bar-item w3-button"
                            >Relaxed</a>
                            <a
                                href="#"
                                class="w3-bar-item w3-button"
                            >Bootcut</a>
                            <a
                                href="#"
                                class="w3-bar-item w3-button"
                            >Straight</a>
                        </div>
                        <a
                            href="#"
                            class="w3-bar-item w3-button"
                        >Jackets</a>
                        <a
                            href="#"
                            class="w3-bar-item w3-button"
                        >Gymwear</a>
                        <a
                            href="#"
                            class="w3-bar-item w3-button"
                        >Blazers</a>
                        <a
                            href="#"
                            class="w3-bar-item w3-button"
                        >Shoes</a>
                    </div>
                    <a
                        href="#footer"
                        class="w3-bar-item w3-button w3-padding"
                    >Contact</a>
                    <a
                        href="javascript:void(0)"
                        class="w3-bar-item w3-button w3-padding"
                    >Newsletter</a>
                    <a
                        href="#footer"
                        class="w3-bar-item w3-button w3-padding"
                    >Subscribe</a>
                    <div style={{ height: '50px' }}></div>
                </nav>

                <div
                    class="w3-overlay w3-hide-large"
                    onClick={this.close}
                    style={{ cursor: 'pointer' }}
                    title="close side menu"
                    id="myOverlay"
                ></div>
            </div >
        )
    }
}