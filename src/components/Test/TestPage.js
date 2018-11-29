import React, { Component } from 'react';
import {
  WebView,
  TouchableOpacity,
  View,
  Text,
  Modal,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Content,
} from 'native-base';

import Tab1 from './Tab1';
import { Actions } from 'react-native-router-flux';

export default class TestPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      canGoBack : false
    }
  }

 onNavigationStateChange(navState) {
   console.log('onNavigationStateChange done ..');
  this.setState({
    canGoBack: navState.canGoBack
  });
}

onBack() {
  console.log('press back button done ..');
  //this.refs[WEBVIEW_REF].goBack();
  //this.webview.goBack();
  Actions.replace('tabbar');
}

  render() {
    return (
      <View style={ { flex : 1 } }>
          
        <View>
          <TouchableOpacity
          //disabled={!this.state.canGoBack}
          onPress ={this.onBack.bind(this)}
          >
            <Text >Go Back</Text>
          </TouchableOpacity>
       </View>
          
          <WebView
            ref={ WEBVIEW_REF => this.webview  = WEBVIEW_REF }
            style={{flex: 1,marginTop:20}}
            onNavigationStateChange= {this.onNavigationStateChange.bind(this)}
            source={{uri: 'https://kavimo.com/medias/yizx8yhyesyx/view'}}
          /> 
      </View>
    );
  }
}