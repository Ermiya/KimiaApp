import React, { Component } from 'react';
import Video from 'react-native-video';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import PropTypes from 'prop-types';
import { I18nManager, WebView } from 'react-native';
import {
  Container,
  Header,
  Left,
  Icon,
  Right,
  Text,
  Spinner,
  Button,
} from 'native-base';
import * as OHApi from './../OHApi';
import * as axios from 'axios';
import * as Common from './../Common';

const BASE_KAVIMO_URL = 'https://kavimo.com/api/v1/';
const MEDIA_KAVIMO_URL = BASE_KAVIMO_URL + 'medias/?access-token=' + Common.KAVIMO_ACCESS_TOKEN;
const MEDIA_KAVIMO_URL_TEST = 'https://kavimo.com/temp/test';

export default class TestPage3 extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          // ref={WEBVIEW_REF}
          style={{ flex: 1 }}
          // onNavigationStateChange= {this.onNavigationStateChange.bind(this)}
          source={{ uri: 'https://kavimo.com/medias/yizx8yhyesyx/view' }}
        />
      </View>
    );
  }
}
