import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import Auth from './Auth/Auth.js';
const auth = new Auth();


class App extends Component {
    state = { visible: false };

    toggleVisibility = () => this.setState({ visible: !this.state.visible });

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { visible } = this.state;
        const { isAuthenticated } = this.props.auth;
        return (
<div className="App">


                {
                    !auth.isAuthenticated() && auth.login()
                }
                {
                    auth.isAuthenticated() && (
                      <div>
                          <Button
                          bsStyle="primary"
                          className="btn-margin"
                          onClick={this.logout.bind(this)}
                          >
                          Log Out
                          </Button>
                      <header className="App-header">
                          <img src={logo} className="App-logo" alt="logo" />
                          <h1 className="App-title">Welcome to React</h1>
                      </header>
                      <p className="App-intro">
                          To get started, edit <code>src/App.js</code> and save to reload.
                          <Button content='Click Here' />
                      </p>
                      <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
                      <Sidebar.Pushable as={Segment}>
                          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
                              <Menu.Item name='home'>
                                  <Icon name='home' />
                                  Home
                              </Menu.Item>
                              <Menu.Item name='gamepad'>
                                  <Icon name='gamepad' />
                                  Games
                              </Menu.Item>
                              <Menu.Item name='camera'>
                                  <Icon name='camera' />
                                  Channels
                              </Menu.Item>
                          </Sidebar>
                          <Sidebar.Pusher>
                              <Segment basic>
                                  <Header as='h3'>Application Content</Header>
                              </Segment>
                          </Sidebar.Pusher>
                      </Sidebar.Pushable>
                      </div>
                    )
                  }
            </div>
        );
    }
}

export default App;
