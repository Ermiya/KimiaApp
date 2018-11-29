import React, { Component } from 'react';
import {
  WebView,
  TouchableOpacity,
  View,
  Text,
  Modal,
  Dimensions
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

import { Actions } from 'react-native-router-flux';

export default class PlayVideo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      canGoBack : false,
      width:  Dimensions.get('window').width,
      height: Dimensions.get('window').height
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
  Actions.pop();
}

  render() {
    return (
      <View style={ { flex : 1 } }>
          
        <View>
          <TouchableOpacity onPress ={this.onBack.bind(this)}>
            <Text >Go Back</Text>
          </TouchableOpacity>
       </View>
          
          <WebView
            ref={ WEBVIEW_REF => this.webview  = WEBVIEW_REF }
            style={{ flex: 1,marginTop:20,height:this.state.height,width:this.state.width }}
            onNavigationStateChange= {this.onNavigationStateChange.bind(this)}
            source={{uri: 'https://kavimo.com/medias/yizx8yhyesyx/view'}}
          /> 
      </View>
    );
  }
}