import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = { visible: false };
    toggleVisibility = () => this.setState({ visible: !this.state.visible });
      render() {
          const { visible } = this.state;
        return (
          <div className="App">
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
                          <Image src='/assets/images/wireframe/paragraph.png' />
                      </Segment>
                  </Sidebar.Pusher>
              </Sidebar.Pushable>
          </div>
        );
      }
}

export default App;
