import React, { Component } from 'react';
import {
  Container,
  Header,
  Right,
  Left,
  Content,
  Button,
  Text,
  Form,
  Icon,
  Spinner,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import styles from './Profile.css';
import * as Common from '../../Common';

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Header
          style={styles.header}
          androidStatusBarColor={Common.BRAND_COLOR_3}
          iosBarStyle="light-content"
        >
          <Left>
            <Icon
              name="md-menu"
              onPress={() => Actions.drawerOpen()}
              style={styles.icon}
            />
          </Left>
          <Right>
            <Text style={styles.headerText}>مشخصات من</Text>
          </Right>
        </Header>
      </Container>
    );
  }
}
