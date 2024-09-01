import React from 'react';
import {Icon, TabBar} from '@ant-design/react-native';
import Home from '../Screens/TabScreens/Home';
import Discover from '../Screens/TabScreens/Discover';
import Library from '../Screens/TabScreens/Library';
import Profile from '../Screens/TabScreens/Profile';

export default class Tabbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTab: 'homeTab',
    };
  }

  onChangeTab(tabName: any) {
    this.setState({
      selectedTab: tabName,
    });
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="rgba(0,0,0,0.7)">
        <TabBar.Item
          title="Home"
          icon={<Icon name="home" />}
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => this.onChangeTab('homeTab')}>
          <Home />
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="compass" />}
          title="Discover"
          selected={this.state.selectedTab === 'discoverTab'}
          onPress={() => this.onChangeTab('discoverTab')}>
          <Discover />
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="calendar" />}
          title="Library"
          selected={this.state.selectedTab === 'libraryTab'}
          onPress={() => this.onChangeTab('libraryTab')}>
          <Library />
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="Profile"
          selected={this.state.selectedTab === 'profileTab'}
          onPress={() => this.onChangeTab('profileTab')}>
          <Profile />
        </TabBar.Item>
      </TabBar>
    );
  }
}
